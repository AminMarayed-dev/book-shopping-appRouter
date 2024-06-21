import { BooksEntity } from "@/type";
import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { ChangeEvent } from "react";
import TextFieldForm from "../text-field-form/TextFieldForm";

function FormDashboard({
  currentView,
  editingBook,
  newBook,
  setNewBook,
  handleFileUpload,
  handleEditBook,
  handleSaveBook,
  handleCancelEdit,
}: {
  currentView: string;
  editingBook: BooksEntity | null;
  newBook: BooksEntity;
  setNewBook: (book: BooksEntity) => void;
  handleFileUpload: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleEditBook: (newBook: BooksEntity) => void;
  handleSaveBook: (newBook: BooksEntity) => void;
  handleCancelEdit: () => void;
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
      [name]:
        name === "price" || name === "isbn"
          ? isNaN(Number(value))
            ? newBook[name]
            : Number(value)
          : value,
    });
  };
  const handleAgeGroupChange = (e: ChangeEvent<{ value: unknown }>) => {
    setNewBook({
      ...newBook,
      ageGroup: e.target.value as string,
    });
  };

  const handleGenreChange = (e: ChangeEvent<{ value: unknown }>) => {
    setNewBook({
      ...newBook,
      genre: e.target.value as string,
    });
  };

  const textBook = [
    { textFa: "نام", name: "name", value: newBook.name },
    { textFa: "نویسنده", name: "writer", value: newBook.writer },
    { textFa: "قیمت", name: "price", value: newBook.price },
    { textFa: "شابک", name: "isbn", value: newBook.isbn },
  ];

  return (
    <>
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
              {textBook.map((item, index) => (
                <TextFieldForm
                  key={index}
                  textFa={item.textFa}
                  name={item.name}
                  handleInputChange={handleInputChange}
                  value={item.value}
                />
              ))}

              <FormControl fullWidth>
                <Typography sx={{ mt: "1rem", color: "white" }}>
                  گروه سنی
                </Typography>
                <Select
                  labelId="age-group-select-label"
                  id="age-group-select"
                  value={newBook.ageGroup}
                  onChange={handleAgeGroupChange}
                  sx={inputStyle}
                >
                  <MenuItem value={"نوجوان"}>نوجوان</MenuItem>
                  <MenuItem value={"جوان"}>جوان</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <Typography sx={{ mt: "1rem", color: "white" }}>
                  ژانر
                </Typography>
                <Select
                  labelId="genre-select-label"
                  id="genre-select"
                  value={newBook.genre}
                  onChange={handleGenreChange}
                  sx={{...inputStyle , mb:2}}
                >
                  <MenuItem value={"وحشت"}>وحشت</MenuItem>
                  <MenuItem value={"فانتزی"}>فانتزی</MenuItem>
                </Select>
              </FormControl>

              <TextFieldForm
                textFa={"توضیحات"}
                name={"description"}
                value={newBook.description}
                handleInputChange={handleInputChange}
              ></TextFieldForm>

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
