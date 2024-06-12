"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
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
import { Logout, Home} from "@mui/icons-material";
import axios from "axios";

interface Book {
  name: string;
  writer: string;
  price: string;
  genre: string;
  ageGroup: string;
  isbn: string;
  imageUrl: string;
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
    name: "",
    writer: "",
    price: "",
    genre: "",
    ageGroup: "",
    isbn: "",
    imageUrl: "",
    description: "",
  });
  const [page, setPage] = useState(0);

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
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        backgroundColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#162e54",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#162e54",
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

  const handleAddBook = async () => {
    try {
      const response = await axios.post("http://localhost:3000/books", newBook);
      setBooks([...books, response.data]);
      setNewBook({
        name: "",
        writer: "",
        price: "",
        genre: "",
        ageGroup: "",
        isbn: "",
        imageUrl: "",
        description: "",
      });
    } catch (error) {
      console.error("There was an error adding the book!", error);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    console.log(event);
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
          <Image src={myLogo} alt="Example Image" width={50} />
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
        <Typography variant="h5" gutterBottom color="white">
          افزودن کتاب جدید
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
              label="نویسنده"
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
              value={newBook.price}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              sx={inputStyle}
            />
            <TextField
              label="ژانر"
              name="genre"
              value={newBook.genre}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              sx={inputStyle}
            />
            <TextField
              label="گروه سنی"
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
              value={newBook.isbn}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              sx={inputStyle}
            />
            <TextField
              label="توضیحات"
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
            <input
              type="file"
              name="imageUrl"
              value={newBook.imageUrl}
              onChange={handleInputChange}
            />
            <Typography mt={3} mb={1} color="white">
              عکس روی جلد را بارگذاری کنید:
            </Typography>
            <input
              type="file"
              name="imageUrl"
              value={newBook.imageUrl}
              onChange={handleInputChange}
            />
            <Typography mt={3} mb={1} color="white">
              عکس پشت جلد را بارگذاری کنید:
            </Typography>
            <input
              type="file"
              name="imageUrl"
              value={newBook.imageUrl}
              onChange={handleInputChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddBook}
              sx={{
                backgroundColor: "#db3249",
                mt: "3rem",
                "&:hover": { backgroundColor: "#db3249d6" },
              }}
            >
              افزودن کتاب
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default Dashboard;
