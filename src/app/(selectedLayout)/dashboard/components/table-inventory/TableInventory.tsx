// import { BooksEntity } from "@/type";
// import {
//   Container,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { useState} from "react";

// function TableInventory({
//   currentView,
//   books,
//   page,
//   handleChangePage,
// }: {
//   currentView: string;
//   books: BooksEntity[];
//   page: number;
//   handleChangePage: any;
// }) {
//   const [isClicked, setIsClicked] = useState<string | null>(null);
//   const [currentValue, setCurrentValue] = useState<any>(0);
//   const [newValues, setNewValues] = useState<{ id: string; quantity: string }[]>([]);

//   function changeQuantity(e: any, book: BooksEntity) {
//     const temp = [...newValues];
//     const foundedId = newValues.findIndex((item) => item.id === book.id);
//     if (foundedId > -1) {
//       temp[foundedId].quantity = e.target.value;
//     } else {
//       temp.push({ id: book.id, quantity: e.target.value });
//     }
//     setNewValues(temp);
//   }

//   function handleCellClick(book: BooksEntity) {
//     setIsClicked(book.id);
//     setCurrentValue(
//       newValues.find((item) => item.id === book.id)?.quantity || book.quantity
//     );
//   }

//   return (
//     <>
//       {currentView === "storeForm" && (
//         <Container
//           sx={{
//             backgroundColor: "secondary.dark",
//             my: "2rem",
//             py: "2rem",
//             border: "5px solid",
//             borderColor: "#db3249",
//           }}
//         >
//           <Typography
//             variant="h4"
//             gutterBottom
//             color="white"
//             sx={{ mb: "2rem" }}
//           >
//             تغییر موجودی/ قیمت
//           </Typography>
//           <TableContainer component={Paper} sx={{ mb: 4, margin: "auto" }}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>نام کتاب</TableCell>
//                   <TableCell>قیمت</TableCell>
//                   <TableCell>موجودی</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {books
//                   ?.slice(page * 5, page * 5 + 5)
//                   .map((book: BooksEntity, index: number) => (
//                     <TableRow key={index}>
//                       <TableCell>{book.name}</TableCell>
//                       <TableCell>{book.price}</TableCell>
//                       <TableCell>
//                         {isClicked === book.id ? (
//                           <TextField
//                             autoFocus
//                             value={currentValue}
//                             onChange={(e) => {setCurrentValue(e.target.value); changeQuantity(e,book)}}
//                             onBlur={() => setIsClicked(null)}
//                           />
//                         ) : (
//                           <TableCell
//                             id={book.id}
//                             onClick={() => handleCellClick(book)}
//                           >
//                             {newValues.find((item) => item.id === book.id)?.quantity || book.quantity}
//                           </TableCell>
//                         )}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//               </TableBody>
//             </Table>
//             <TablePagination
//               rowsPerPageOptions={[]}
//               component="div"
//               count={books?.length}
//               rowsPerPage={5}
//               page={page}
//               onPageChange={handleChangePage}
//             />
//           </TableContainer>
//         </Container>
//       )}
//     </>
//   );
// }

// export default TableInventory;
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
import { useState } from "react";

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
  //   const [currentValue, setCurrentValue] = useState<string | number>(0);
  const [newValues, setNewValues] = useState<
    { id: string; quantity: number; price: number }[]
  >([]);
  //   const [currentPrice, setCurrentPrice] = useState<string | number>(0);

  function changeQuantity(e: any, book: BooksEntity) {
    const newQuantity = e.target.value;
    // setCurrentValue(newQuantity);

    const temp = [...newValues];
    const foundedId = newValues.findIndex((item) => item.id === book.id);
    if (foundedId > -1) {
      temp[foundedId].quantity = newQuantity;
    } else {
      temp.push({ id: book.id, quantity: newQuantity, price: book.price });
    }
    setNewValues(temp);
  }
  //   console.log(currentPrice);
  function changePrice(e: any, book: BooksEntity) {
    const newPrice = e.target.value;
    // setCurrentValue(newPrice);

    const temp = [...newValues];
    const foundedId = newValues.findIndex((item) => item.id === book.id);
    if (foundedId > -1) {
      temp[foundedId].price = newPrice;
    } else {
      temp.push({ id: book.id, quantity: book.quantity, price: newPrice });
    }
    setNewValues(temp);
  }

  function handleCellClick(book: BooksEntity) {
    setIsClicked(book.id);
    // setCurrentValue(
    //   newValues.find((item) => item.id === book.id)?.quantity || book.quantity
    // );
  }
  function handleCellClick2(book: BooksEntity) {
    setIsClicked2(book.id);
    console.log(book.id);
    // setCurrentPrice(
    //   newValues.find((item) => item.id === book.id)?.price || book.price
    // );
  }
//   console.log(isClicked2);


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
                      <TableCell>
                        {isClicked2 === book.id ? (
                          <TextField
                            autoFocus
                            // value={currentPrice}
                            onChange={(e) => changePrice(e, book)}
                            onBlur={() => setIsClicked2(null)}
                          />
                        ) : (
                          <TableCell
                            id={book.id}
                            onClick={() => handleCellClick2(book)}
                          >
                            {newValues.find((item) => item.id === book.id)
                              ?.price || book.price}
                          </TableCell>
                        )}
                      </TableCell>
                      <TableCell>
                        {isClicked === book.id ? (
                          <TextField
                            autoFocus
                            // value={currentValue}
                            onChange={(e) => changeQuantity(e, book)}
                            onBlur={() => setIsClicked(null)}
                          />
                        ) : (
                          <TableCell
                            id={book.id}
                            onClick={() => handleCellClick(book)}
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
