"use client";

import { Container } from "@mui/material";

import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getLocalStorage } from "@/utils/localStorage";
import ButtonTypeOne from "@/components/button-type-one/ButtonTypeOne";
import { routes } from "@/constant/routes";

function createData(name: string, price: number | string) {
  return { name, price };
}

const allBasket = getLocalStorage("basket");
const subRows = allBasket.map((item: any) =>
  createData(item.name, item.quantityInBasket * item.price)
);
const totalAllPrice = allBasket.reduce(
  (acc: any, curr: any) => acc + curr.quantityInBasket * curr.price,
  0
);

const rows = [
  ...subRows,
  // createData("جمع جزء", totalAllPrice),
  createData("مجموع", totalAllPrice),
];

function PaymentCheckOut() {
  return (
    <Container>
      <TableContainer
        component={Paper}
        sx={{ p: 2, bgcolor: "primary.dark", mb: 4 }}
      >
        <Table sx={{ minWidth: 150 }}>
          <TableHead>
            <TableRow>
              <TableCell>محصول</TableCell>
              <TableCell align="right">جمع جزء</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonTypeOne text=" ثبت سفارش" handleClick={()=>location.href=(routes.payment)} />
    </Container>
  );
}

export default PaymentCheckOut;
