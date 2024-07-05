"use client";

import CardBasket from "@/components/card-basket/CardBasket";
import { routes } from "@/constant/routes";
import { BooksEntity } from "@/type";
import { formatNumber } from "@/utils/formatNumber";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Cart() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [arrayBook, setArrayBook] = useState<BooksEntity[]>([]);
  const basketItems: BooksEntity[] = getLocalStorage("basket") || [];
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setArrayBook(basketItems);
    const price = basketItems.reduce(
      (a, b) => a + b?.price! * b?.quantityInBasket!,
      0
    );
    setTotalPrice(price);
  }, [basketItems.length]);

  const subtractFromNumber = (id: string) => {
    const foundedIndex = basketItems.findIndex((item) => item.id === id);
    if (basketItems[foundedIndex]?.quantityInBasket! >= 2) {
      setTotalPrice((prev) => prev - basketItems[foundedIndex]?.price!);
      basketItems[foundedIndex].quantityInBasket! -= 1;
      setLocalStorage("basket", basketItems);
      setArrayBook([...basketItems]);
      setDisable(false);
    } else {
      removeFromBasket(id);
    }
  };

  const removeFromBasket = (id: string) => {
    const updatedBasketItems = basketItems.filter((item) => item.id !== id);
    Swal.fire({
      title: "آیا از حذف این کتاب مطمئن هستید؟",
      text: "عملیات غیرقابل بازگشت خواهد بود!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "حذف کتاب",
      cancelButtonText: "انصراف",
      customClass: {
        container: "my-swal",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setLocalStorage("basket", updatedBasketItems);
        setArrayBook(updatedBasketItems);
      }
    });
  };

  const addToNumber = (id: string) => {
    const foundedIndex = basketItems.findIndex((item) => item.id === id);
    if (!(basketItems[foundedIndex].quantityInBasket! >= 3)) {
      basketItems[foundedIndex].quantityInBasket! += 1;
      setTotalPrice((prev) => prev + basketItems[foundedIndex]?.price!);
    } else setDisable(true);
    setLocalStorage("basket", basketItems);
    setArrayBook([...basketItems]);
  };

  const router = useRouter();

  return (
    <Container>
      <Box sx={{ flex: 1, overflowY: "auto", mb: 4 }}>
        {arrayBook.map((item) => (
          <CardBasket
            addToNumber={addToNumber}
            item={item}
            removeFromBasket={removeFromBasket}
            subtractFromNumber={subtractFromNumber}
            key={item.id}
          />
        ))}
      </Box>
      <Typography>جمع کل سبد خرید: {formatNumber(totalPrice)} تومان</Typography>
      <Button
        sx={{ mt: "1rem" }}
        fullWidth
        variant="contained"
        color="secondary"
        onClick={() => router.push(routes.checkout)}
      >
        تسویه حساب
      </Button>
    </Container>
  );
}

export default Cart;
