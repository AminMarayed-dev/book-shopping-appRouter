"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image, { StaticImageData } from "next/image";
import {
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
  IconButton,
} from "@mui/material";
import logo from "../../../public/redlogo.svg";
import { Logout, Home, Delete, Edit } from "@mui/icons-material";
import axios from "axios";
import Swal from "sweetalert2";

interface Book {
  id: number;
  name: string;
  writer: string;
  price: number;
  genre: string;
  ageGroup: string;
  isbn: number;
  imageUrl: string[];
  description: string;
}

const myLogo: StaticImageData = logo;

const Dashboard: React.FC = () => {
  useEffect(() => {
    // Set the background color when the component mounts
    document.body.style.backgroundColor = "#162e54";
    // Cleanup function to reset the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState<Book>({
    id: 0,
    name: "",
    writer: "",
    price: 0,
    genre: "",
    ageGroup: "",
    isbn: 0,
    imageUrl: [],
    description: "",
  });
  const [page, setPage] = useState(0);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books");
        setBooks(response.data);
      } catch (error) {
        console.error("There was an error fetching the books!", error);
      }
    };
    fetchBooks();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: name === "price" || name === "isbn" ? Number(value) : value,
    });
  };

  const inputStyle = {
    backgroundColor: "white",
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiInputBase-input": {
      color: "#162e54",
    },
    "& .MuiInputLabel-root": {
      color: "#162e54",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "red",
    },
  };

  const handleFileUpload = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const updatedImageUrls = [...newBook.imageUrl];
        updatedImageUrls[index] = base64String;
        setNewBook({
          ...newBook,
          imageUrl: updatedImageUrls,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveBook = async () => {
    if (editingBook) {
      // Edit existing book
      try {
        const response = await axios.put(
          `http://localhost:3000/books/${editingBook.id}`,
          newBook
        );
        setBooks(
          books.map((book) =>
            book.id === editingBook.id ? response.data : book
          )
        );
        setEditingBook(null);
        setNewBook({
          id: 0,
          name: "",
          writer: "",
          price: 0,
          genre: "",
          ageGroup: "",
          isbn: 0,
          imageUrl: [],
          description: "",
        });
        toast("کتاب با موفقیت ویرایش شد");
      } catch (error) {
        toast("مشکلی پیش آمده!!!");
      }
    } else {
      // Add new book
      try {
        const response = await axios.post(
          "http://localhost:3000/books",
          newBook
        );
        setBooks([...books, response.data]);
        setNewBook({
          id: 0,
          name: "",
          writer: "",
          price: 0,
          genre: "",
          ageGroup: "",
          isbn: 0,
          imageUrl: [],
          description: "",
        });
        toast("کتاب با موفقیت افزوده شد");
      } catch (error) {
        toast("مشکلی پیش آمده!!!");
      }
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    console.log(event);
  };

  const handleEditClick = (book: Book) => {
    setEditingBook(book);
    setNewBook(book);
  };

  // const handleDeleteClick = async (id: number) => {
  //   try {
  //     await axios.delete(`http://localhost:3000/books/${id}`);
  //     setBooks(books.filter((book) => book.id !== id));
  //     toast("کتاب با موفقیت حذف شد");
  //   } catch (error) {
  //     toast("مشکلی پیش آمده!!!");
  //   }
  // };

  const handleDeleteClick = (id: number) => {
    Swal.fire({
      title: "آیا از حذف این کتاب مطمئن هستید؟",
      text: "این عملیات غیرقابل بازگشت خواهد بود!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "حذف کتاب",
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/books/${id}`);
          setBooks(books.filter((book) => book.id !== id));
          Swal.fire({
            title: "کتاب با موفقیت حذف شد!",
            text: "دیگه هیچ کاریش نمیشه کرد",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            title: "مشکلی پیش آمده !",
            text: "حذف کتاب با موفقیت انجام نشد!",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#162e54",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#db3249",
        }}
      >
        <Box display="flex" alignItems="center" m={2}>
          <Image src={myLogo} alt="logo" width={50} />
          <Typography>دَشبورد</Typography>
        </Box>
        <Box ml={3}>
          <IconButton aria-label="logout" onClick={() => (location.href = "/")}>
            <Home style={{ color: "#db3249" }} />
          </IconButton>
          <IconButton
            aria-label="logout"
            onClick={() => (location.href = "/register")}
          >
            <Logout style={{ color: "#db3249" }} />
          </IconButton>
        </Box>
      </Box>
      <Container>
        <Typography variant="h6" color="white" my={2}>
          لیست کتاب های موجود در سایت
        </Typography>
      </Container>
      <Container>
        <TableContainer component={Paper} sx={{ mb: 4, margin: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>نام کتاب</TableCell>
                <TableCell>نویسنده</TableCell>
                <TableCell>ژانر</TableCell>
                <TableCell>گروه سنی</TableCell>
                <TableCell>شابک</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.slice(page * 5, page * 5 + 5).map((book, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDeleteClick(book.id)}
                    >
                      <Delete style={{ color: "#162e54" }} />
                    </IconButton>
                    <IconButton
                      aria-label="edit"
                      onClick={() => handleEditClick(book)}
                    >
                      <Edit style={{ color: "#162e54" }} />
                    </IconButton>
                  </TableCell>
                  <TableCell>{book.name}</TableCell>
                  <TableCell>{book.writer}</TableCell>
                  <TableCell>{book.genre}</TableCell>
                  <TableCell>{book.ageGroup}</TableCell>
                  <TableCell>{book.isbn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={books.length}
            rowsPerPage={5}
            page={page}
            onPageChange={handleChangePage}
          />
        </TableContainer>
      </Container>
      <Container
        sx={{
          backgroundColor: "#162e54",
          my: "2rem",
          py: "2rem",
          border: "5px solid",
          borderColor: "#db3249",
        }}
      >
        <Typography variant="h4" gutterBottom color="white">
          {editingBook ? "ویرایش کتاب" : "افزودن کتاب جدید"}
        </Typography>
        <form>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <TextField
              label="نام"
              name="name"
              value={newBook.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              sx={inputStyle}
            />
            <TextField
              placeholder="نویسنده"
              name="writer"
              value={newBook.writer}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              sx={inputStyle}
            />
            <TextField
              label="قیمت"
              name="price"
              type="number"
              value={newBook.price}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              sx={inputStyle}
            />
            <TextField
              placeholder="ژانر"
              name="genre"
              value={newBook.genre}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              sx={inputStyle}
            />
            <TextField
              placeholder="گروه سنی"
              name="ageGroup"
              value={newBook.ageGroup}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              sx={inputStyle}
            />
            <TextField
              label="شابک"
              name="isbn"
              type="number"
              value={newBook.isbn}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              sx={inputStyle}
            />
            <TextField
              placeholder="توضیحات"
              name="description"
              value={newBook.description}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              sx={inputStyle}
            />
            <Typography mt={2} mb={1} color="white">
              عکس اصلی را بارگذاری کنید:
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <input type="file" onChange={(e) => handleFileUpload(e, 0)} />
              {newBook.imageUrl[0] && (
                <Image
                  src={newBook.imageUrl[0]}
                  alt="Main Image"
                  width={50}
                  height={50}
                  style={{ marginLeft: "10px" }}
                />
              )}
            </Box>
            <Typography mt={3} mb={1} color="white">
              عکس روی جلد را بارگذاری کنید:
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <input type="file" onChange={(e) => handleFileUpload(e, 1)} />
              {newBook.imageUrl[1] && (
                <Image
                  src={newBook.imageUrl[1]}
                  alt="Cover Image"
                  width={50}
                  height={50}
                  style={{ marginLeft: "10px" }}
                />
              )}
            </Box>
            <Typography mt={3} mb={1} color="white">
              عکس پشت جلد را بارگذاری کنید:
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <input type="file" onChange={(e) => handleFileUpload(e, 2)} />
              {newBook.imageUrl[2] && (
                <Image
                  src={newBook.imageUrl[2]}
                  alt="Back Cover Image"
                  width={50}
                  height={50}
                  style={{ marginLeft: "10px" }}
                />
              )}
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveBook}
              sx={{
                backgroundColor: "#db3249",
                mt: "3rem",
                color: "white",
                "&:hover": { backgroundColor: "#db3249d6" },
              }}
            >
              {editingBook ? "ویرایش کتاب" : "افزودن کتاب"}
            </Button>
            <ToastContainer autoClose={2000} rtl={true} />
          </Box>
        </form>
      </Container>
    </>
  );
};

export default Dashboard;
