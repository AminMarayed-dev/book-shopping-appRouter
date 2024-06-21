import { BooksEntity } from "@/type";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { ChangeEvent } from "react";
function FormDashboard({
  currentView,
  editingBook,
  newBook,
  setNewBook,
  handleFileUpload,
  handleEditBook,
  handleSaveBook,
  handleCancelEdit
}: {
  currentView: string;
  editingBook: BooksEntity | null;
  newBook: BooksEntity;
  setNewBook: ({} : BooksEntity) => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>, a: number) => void;
  handleEditBook: (newBook : BooksEntity) => void;
  handleSaveBook: (newBook : BooksEntity) => void;
  handleCancelEdit : ()=>void
}) {

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
      color: "secondary.dark",
    },
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: name === "price" || name === "isbn" ? Number(value) : value,
    });
  };

  return (
    <>
      {" "}
      {currentView === "form" && (
        <Container
          sx={{
            backgroundColor: "secondary.dark",
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
              <Typography sx={{ mt: "1rem", color: "white" }}>نام</Typography>
              <TextField
                placeholder="نام"
                name="name"
                value={newBook.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                sx={inputStyle}
              />
              <Typography sx={{ mt: "1rem", color: "white" }}>
                نویسنده
              </Typography>
              <TextField
                placeholder="نویسنده"
                name="writer"
                value={newBook.writer}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                sx={inputStyle}
              />
              <Typography sx={{ mt: "1rem", color: "white" }}>قیمت</Typography>
              <TextField
                placeholder="قیمت"
                name="price"
                type="number"
                value={newBook.price}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                sx={inputStyle}
              />
              <Typography sx={{ mt: "1rem", color: "white" }}>ژانر</Typography>
              <TextField
                placeholder="ژانر"
                name="genre"
                value={newBook.genre}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                sx={inputStyle}
              />
              <Typography sx={{ mt: "1rem", color: "white" }}>
                گروه سنی
              </Typography>
              <TextField
                placeholder="گروه سنی"
                name="ageGroup"
                value={newBook.ageGroup}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                sx={inputStyle}
              />
              <Typography sx={{ mt: "1rem", color: "white" }}>شابک</Typography>
              <TextField
                placeholder="شابک"
                name="isbn"
                type="number"
                value={newBook.isbn}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                sx={inputStyle}
              />

              <Typography sx={{ mt: "1rem", color: "white" }}>
                توضیحات
              </Typography>
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
                {newBook.imageUrl![0] && (
                  <Image
                    src={newBook.imageUrl![0]}
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
                {newBook?.imageUrl![1] && (
                  <Image
                    src={newBook?.imageUrl[1]}
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
                {newBook?.imageUrl![2] && (
                  <Image
                    src={newBook?.imageUrl[2]}
                    alt="Back Cover Image"
                    width={50}
                    height={50}
                    style={{ marginLeft: "10px" }}
                  />
                )}
              </Box>
              <Box display="flex" mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={
                    editingBook
                      ? () => handleEditBook(newBook)
                      : () => handleSaveBook(newBook)
                  }
                  sx={{
                    backgroundColor: "#db3249",
                    color: "white",
                    "&:hover": { backgroundColor: "#db3249d6" },
                  }}
                >
                  {editingBook ? "ویرایش کتاب" : "افزودن کتاب"}
                </Button>
                {editingBook && (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleCancelEdit}
                    sx={{
                      backgroundColor: "#db3249",
                      color: "white",
                      "&:hover": { backgroundColor: "#db3249d6" },
                      ml: 2,
                    }}
                  >
                    انصراف
                  </Button>
                )}
              </Box>
            </Box>
          </form>
        </Container>
      )}
    </>
  );
}

export default FormDashboard;
