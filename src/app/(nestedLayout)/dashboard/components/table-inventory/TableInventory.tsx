import { BooksEntity } from "@/type";
import {
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
import { useState} from "react";

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
  const [currentValue, setCurrentValue] = useState<any>(0);
  const [newValues, setNewValues] = useState<{ id: string; quantity: string }[]>([]);

  function changeQuantity(e: any, book: BooksEntity) {
    const temp = [...newValues];
    const foundedId = newValues.findIndex((item) => item.id === book.id);
    if (foundedId > -1) {
      temp[foundedId].quantity = e.target.value;
    } else {
      temp.push({ id: book.id, quantity: e.target.value });
    }
    setNewValues(temp);
  }

  function handleCellClick(book: BooksEntity) {
    setIsClicked(book.id);
    setCurrentValue(
      newValues.find((item) => item.id === book.id)?.quantity || book.quantity
    );
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
          <Typography
            variant="h4"
            gutterBottom
            color="white"
            sx={{ mb: "2rem" }}
          >
            تغییر موجودی/ قیمت
          </Typography>
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
                      <TableCell>{book.price}</TableCell>
                      <TableCell>
                        {isClicked === book.id ? (
                          <TextField
                            autoFocus
                            value={currentValue}
                            onChange={(e) => {setCurrentValue(e.target.value); changeQuantity(e,book)}}
                            onBlur={() => setIsClicked(null)}
                          />
                        ) : (
                          <TableCell
                            id={book.id}
                            onClick={() => handleCellClick(book)}
                          >
                            {book.quantity}
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
