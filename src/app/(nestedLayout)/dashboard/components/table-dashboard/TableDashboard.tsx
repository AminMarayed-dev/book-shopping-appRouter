import { BooksEntity } from "@/type";
import { Delete, Edit } from "@mui/icons-material";
import {
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

function TableDashboard({
  currentView,
  books,
  page,
  confirmDelete,
  handleEditClick,
  handleChangePage,
}: {
  currentView: string;
  books: BooksEntity[];
  page: number;
  confirmDelete: (id: string) => void;
  handleEditClick: (book: BooksEntity) => void;
  handleChangePage: any;
}) {
  return (
    <>
      {" "}
      {currentView === "table" && (
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
            لیست کتاب های موجود
          </Typography>
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
                {books
                  ?.slice(page * 5, page * 5 + 5)
                  .map((book: any, index: any) => (
                    <TableRow key={index}>
                      <TableCell>
                        <IconButton
                          aria-label="delete"
                          onClick={() => confirmDelete(book.id)}
                        >
                          <Delete style={{ color: "secondary.dark" }} />
                        </IconButton>
                        <IconButton
                          aria-label="edit"
                          onClick={() => handleEditClick(book)}
                        >
                          <Edit style={{ color: "secondary.dark" }} />
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

export default TableDashboard;
