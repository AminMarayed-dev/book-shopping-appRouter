"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
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
} from "@mui/material";
import axios from "axios";

interface Book {
  name: string;
  writer: string;
  price: number;
  genre: string;
  ageGroup: string;
  isbn: number;
  imageUrl: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState<Book>({
    name: "",
    writer: "",
    price: 0,
    genre: "",
    ageGroup: "",
    isbn: 0,
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

  const handleAddBook = async () => {
    try {
      const response = await axios.post("http://localhost:3000/books", newBook);
      setBooks([...books, response.data]);
      setNewBook({
        name: "",
        writer: "",
        price: 0,
        genre: "",
        ageGroup: "",
        isbn: 0,
        imageUrl: "",
        description: "",
      });
    } catch (error) {
      console.error("There was an error adding the book!", error);
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        داشبورد کتاب فروشی
      </Typography>

      <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
        <Table sx={{ backgroundColor: "pink" }}>
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

      <Typography variant="h5" gutterBottom>
        افزودن کتاب جدید
      </Typography>
      <form>
        <TextField
          label="نام"
          name="name"
          value={newBook.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="نویسنده"
          name="writer"
          value={newBook.writer}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="قیمت"
          name="price"
          value={newBook.price}
          onChange={handleInputChange}
          type="number"
          fullWidth
          margin="normal"
        />
        <TextField
          label="ژانر"
          name="genre"
          value={newBook.genre}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="گروه سنی"
          name="ageGroup"
          value={newBook.ageGroup}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="شابک"
          name="isbn"
          value={newBook.isbn}
          onChange={handleInputChange}
          type="number"
          fullWidth
          margin="normal"
        />
        <TextField
          label="آدرس تصویر"
          name="imageUrl"
          value={newBook.imageUrl}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
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
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddBook}
          sx={{ margin: 2 }}
        >
          افزودن کتاب
        </Button>
      </form>
    </Container>
  );
};

export default Dashboard;
