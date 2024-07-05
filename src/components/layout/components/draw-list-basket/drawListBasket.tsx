import ButtonTypeOne from "@/components/button-type-one/ButtonTypeOne";
import CardBasket from "@/components/card-basket/CardBasket";
import { routes } from "@/constant/routes";
import { BooksEntity } from "@/type";
import { formatNumber } from "@/utils/formatNumber";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../../../../global.css";

interface SwipeableTemporaryDrawerProps {
  open: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const SwipeableTemporaryDrawer: React.FC<SwipeableTemporaryDrawerProps> = ({
  open,
  toggleDrawer,
}) => {
  const [arrayBook, setArrayBook] = useState<BooksEntity[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const basketItems: BooksEntity[] = getLocalStorage("basket");
  const router = useRouter();

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
    } else {
      removeFromBasket(id);
    }
  };

  const addToNumber = (id: string) => {
    const foundedIndex = basketItems.findIndex((item) => item.id === id);
    if (!(basketItems[foundedIndex].quantityInBasket! >= 3)) {
      basketItems[foundedIndex].quantityInBasket! += 1;
      setTotalPrice((prev) => prev + basketItems[foundedIndex]?.price!);
    }

    setLocalStorage("basket", basketItems);
    setArrayBook([...basketItems]);
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
  function routeToCart() {
    toggleDrawer(false);
    router.push(routes.cart);
  }
  return (
    <SwipeableDrawer
      anchor={"right"}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box
        sx={{
          width: 300,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
        role="presentation"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: " flex-end",
          }}
        >
          <Typography sx={{ m: 2, fontSize: "20px", fontWeight: "bold" }}>
            سبد خرید
          </Typography>
          <Typography
            sx={{ m: 2, fontWeight: "bold" }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon sx={{ fontSize: 16 }} /> بستن{" "}
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ flex: 1, overflowY: "auto" }}>
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
        <Divider />

        <Box sx={{ padding: 2 }}>
          <Typography>
            جمع کل سبد خرید: {formatNumber(totalPrice)} تومان
          </Typography>
          <ButtonTypeOne text="مشاهده و سبد خرید" handleClick={routeToCart} />
          <ButtonTypeOne
            text="تسویه حساب"
            handleClick={() => (location.href = routes.checkout)}
          />
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};

export default SwipeableTemporaryDrawer;
