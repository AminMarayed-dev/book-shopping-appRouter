import { api } from "@/api/config.api";
import { BooksEntity } from "@/type";
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import { useEditBookk } from "../../hook";

function TableInventory({
  currentView,
  books,
  page,
  handleChangePage,
}: {
  currentView: string;
  books: BooksEntity[];
  page: number;
  handleChangePage: any;
}) {
  const [isClicked, setIsClicked] = useState<string | null>(null);
  const [isClicked2, setIsClicked2] = useState<string | null>(null);
  const [newValues, setNewValues] = useState<
    { id: string; quantity?: number; price?: number }[]
  >([]);
  const { mutate: editUserMutation } = useEditBookk();

  console.log(newValues);

  async function updateBooks(book) {
    await api.patch(`/books/${book.id}`, book);
    try {
      Swal.fire({
        title: "موفق!",
        text: "کتاب ها با موفقیت ویرایش شدند",
        icon: "success",
      });
    } catch {
      Swal.fire({
        title: "نا موفق!",
        text: "کتاب ها ویرایش نشدند",
        icon: "error",
      });
    }
  }
  function saveChange() {
    newValues.map((item) => {
      // updateBooks(item);
      editUserMutation(item);
    });
    setNewValues([]);
  }

  function changeQuantity(e: any, book: BooksEntity) {
    const newQuantity = e.target.value;

    const foundedId = newValues.findIndex((item) => item.id === book.id);
    if (foundedId > -1) {
      newValues[foundedId].quantity = newQuantity;
    } else {
      newValues.push({ id: book.id, quantity: newQuantity });
    }
    setNewValues(newValues);
  }
  function changePrice(e: any, book: BooksEntity) {
    const newPrice = e.target.value;
    const foundedId = newValues.findIndex((item) => item.id === book.id);
    if (foundedId > -1) {
      newValues[foundedId].price = newPrice;
    } else {
      newValues.push({ id: book.id, price: newPrice });
    }
    setNewValues(newValues);
  }

  return (
    <>
      {currentView === "storeForm" && (
        <Container
          sx={{
            backgroundColor: "secondary.dark",
            my: "2rem",
            py: "2rem",
            border: "5px solid",
            borderColor: "#db3249",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              color="white"
              sx={{ mb: "2rem" }}
            >
              تغییر موجودی/ قیمت
            </Typography>
            <Button
              disabled={
                newValues.length > 0 ? false : true
              }
              onClick={saveChange}
              sx={{ border: 2 }}
            >
              ثبت
            </Button>
          </Box>
          <TableContainer component={Paper} sx={{ mb: 4, margin: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>نام کتاب</TableCell>
                  <TableCell>قیمت</TableCell>
                  <TableCell>موجودی</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books
                  ?.slice(page * 5, page * 5 + 5)
                  .map((book: BooksEntity, index: number) => (
                    <TableRow key={index}>
                      <TableCell>{book.name}</TableCell>
                      <TableCell>
                        {isClicked2 === book.id ? (
                          <TextField
                            autoFocus
                            onChange={(e) => changePrice(e, book)}
                            onBlur={() => setIsClicked2(null)}
                          />
                        ) : (
                          <TableCell
                            id={book.id}
                            sx={{
                              bgcolor: newValues.find(
                                (item) => item.id === book.id && item.price
                              )
                                ? "blue"
                                : "",
                            }}
                            onClick={() => setIsClicked2(book.id)}
                          >
                            {newValues?.find((item) => item.id === book.id)
                              ?.price || book.price}
                          </TableCell>
                        )}
                      </TableCell>
                      <TableCell>
                        {isClicked === book.id ? (
                          <TextField
                            autoFocus
                            onChange={(e) => changeQuantity(e, book)}
                            onBlur={() => setIsClicked(null)}
                          />
                        ) : (
                          <TableCell
                            id={book.id}
                            sx={{
                              bgcolor: newValues.find(
                                (item) => item.id === book.id && item.quantity
                              )
                                ? "blue"
                                : "",
                            }}
                            onClick={() => setIsClicked(book.id)}
                          >
                            {newValues.find((item) => item.id === book.id)
                              ?.quantity || book.quantity}
                          </TableCell>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[]}
              component="div"
              count={books?.length}
              rowsPerPage={5}
              page={page}
              onPageChange={handleChangePage}
            />
          </TableContainer>
        </Container>
      )}
    </>
  );
}

export default TableInventory;
