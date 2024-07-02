import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import Image from "next/image";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { BooksEntity } from "@/type";
import CloseIcon from "@mui/icons-material/Close";
import { formatNumber } from "@/utils/formatNumber";
import { routes } from "@/constant/routes";
import { useRouter } from "next/navigation";
<<<<<<< HEAD

=======
import ChangeQuantity from "@/components/change-quantity/ChangeQuantity";
import ButtonTypeOne from "@/components/button-type-one/ButtonTypeOne";
>>>>>>> feature/mohammad
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
<<<<<<< HEAD
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const basketItems: BooksEntity[] = getLocalStorage("basket") || [];
=======
  const [totalPrice, setTotalPrice] = useState(0);
  const basketItems: BooksEntity[] = getLocalStorage("basket");
>>>>>>> feature/mohammad
  const router = useRouter();

  useEffect(() => {
    setArrayBook(basketItems);
    const price = basketItems.reduce(
      (a, b) => a + (b?.price! * b?.quantityInBasket!),
      0
    );
    setTotalPrice(price);
  }, [basketItems.length]);

  const subtractFromNumber = (id: string) => {
    const foundedIndex = basketItems.findIndex((item) => item.id === id);
    if (basketItems[foundedIndex]?.quantityInBasket! >= 1) {
      setTotalPrice((prev) => prev - basketItems[foundedIndex]?.price!);

      basketItems[foundedIndex].quantityInBasket! -= 1;
      setLocalStorage("basket", basketItems);
      setArrayBook([...basketItems]);
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
    setLocalStorage("basket", updatedBasketItems);
    setArrayBook(updatedBasketItems);
  };

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
          }}
        >
          <Typography sx={{ m: 2, fontSize: "20px", fontWeight: "bold" }}>
            سبد خرید
          </Typography>
<<<<<<< HEAD
          <Typography sx={{ m: 2, fontWeight: "bold" }} onClick={toggleDrawer(false)}>
=======
          <Typography
            sx={{ m: 2, fontWeight: "bold" }}
            onClick={toggleDrawer(false)}
          >
>>>>>>> feature/mohammad
            <CloseIcon sx={{ fontSize: 16 }} /> بستن{" "}
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          {arrayBook.map((item) => (
            <Card
              sx={{
                display: "flex",
                "&:hover": { bgcolor: "primary.dark" },
                borderBottom: "2px solid #EFEFEF85",
              }}
              key={item.id}
            >
              <CardMedia
                sx={{ display: "grid", alignItems: "center", padding: 1 }}
              >
                <Image
                  alt='img of book'
                  src={item.imageUrl ? item.imageUrl[0] : ""}
                  width={300}
                  height={200}
                />
              </CardMedia>
              <CardContent>
                <Typography>{item.name}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    my: "10px",
                    height: "30px",
                    textAlign: "center",
                  }}
                >
<<<<<<< HEAD
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      border: "1px solid gray",
                      borderRadius: "4px",
                      backgroundColor: "white",
                    }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        borderRight: "1px solid gray",
                        padding: "8px",
                        justifyContent: "center",
                        display: "flex",
                        "&:hover": {
                          backgroundColor: "secondary.light",
                          color: "white",
                        },
                      }}
                    >
                      <Button
                        onClick={() => subtractFromNumber(item.id!)}
                        sx={{
                          fontSize: "13px",
                          color: "gray",
                          "&:hover": { color: "white" },
                        }}
                      >
                        -
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        padding: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          width: "20px",
                          fontSize: "14px",
                          color: "gray",
                          textAlign: "center",
                          m: "auto",
                        }}
                      >
                        {item.quantityInBasket}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: "40px",
                        borderLeft: "1px solid gray",
                        display: "flex",
                        justifyContent: "center",
                        "&:hover": {
                          backgroundColor: "secondary.light",
                          color: "white",
                        },
                      }}
                    >
                      <CustomButton
                        text="+"
                        handleClick={() => addToNumber(item.id!)}
                        sx={{
                          fontSize: "13px",
                          color: "gray",
                          width: "100%",
                          display: "flex",
                          "&:hover": { color: "white" },
                        }}
                      />
                    </Box>
                  </Box>
=======
                  <ChangeQuantity
                    item={item.id}
                    subtractFromNumber={() => subtractFromNumber(item.id)}
                    disabled={false}
                    addToNumber={() => addToNumber(item.id)}
                    quantity={item.quantityInBasket}
                  />
>>>>>>> feature/mohammad
                </Box>
                <Typography
                  sx={{ display: "flex", flexWrap: "nowrap", fontSize: 15 }}
                >
                  {item.quantityInBasket} × {formatNumber(item.price!)} تومان
                </Typography>
              </CardContent>
              <IconButton
                sx={{ display: "grid", alignItems: "start" }}
                onClick={() => removeFromBasket(item.id!)}
              >
                <Close />
              </IconButton>
            </Card>
          ))}
        </Box>
        <Divider />

        <Box sx={{ padding: 2 }}>
          <Typography>
            جمع کل سبد خرید: {formatNumber(totalPrice)} تومان
          </Typography>
          <ButtonTypeOne
            text="مشاهده و سبد خرید"
            handleClick={() => router.push(routes.cart)}
          />
          <ButtonTypeOne text="تسویه حساب" />
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};

export default SwipeableTemporaryDrawer;
