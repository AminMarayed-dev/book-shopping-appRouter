"use client";

import ChangeQuantity from "@/components/change-quantity/ChangeQuantity";
import { routes } from "@/constant/routes";
import { BooksEntity } from "@/type";
import { formatNumber } from "@/utils/formatNumber";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { Close } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    }
  };

  const removeFromBasket = (id: string) => {
    const updatedBasketItems = basketItems.filter((item) => item.id !== id);
    setLocalStorage("basket", updatedBasketItems);
    setArrayBook(updatedBasketItems);
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
        {arrayBook.map((item, index) => (
          <Card
            sx={{
              display: "flex",
              "&:hover": { bgcolor: "primary.dark" },
              borderBottom: "2px solid #EFEFEF85",
            }}
            key={index}
          >
            <CardMedia
              sx={{
                display: "grid",
                alignItems: "start",
                paddingX: 1,
                paddingTop: 3,
              }}
            >
              <Image
                alt="img of book"
                src={item.imageUrl![0]}
                width={140}
                height={200}
              />
            </CardMedia>
            <CardContent>
              <Typography>{item.name}</Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  height: "30px",
                  textAlign: "center",
                }}
              ></Box>
              <Typography
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                  fontSize: 15,
                  mb: 1,
                }}
              >
                قیمت: {formatNumber(item.price!)} تومان
              </Typography>
              <Divider
                sx={{
                  borderStyle: "dashed",
                  borderWidth: "1px",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  my: "10px",
                  height: "30px",
                  textAlign: "center",
                }}
                key={index}
              >
                <Typography
                  sx={{
                    display: "flex",
                    flexWrap: "nowrap",
                    fontSize: 15,
                    my: 1,
                  }}
                >
                  تعداد:
                </Typography>
                <ChangeQuantity
                  addToNumber={() => addToNumber(item.id!)}
                  disabled={disable}
                  item={item.id!}
                  quantity={item.quantityInBasket!}
                  subtractFromNumber={() => subtractFromNumber(item.id!)}
                />
              </Box>
              <Divider
                sx={{
                  borderStyle: "dashed",
                  borderWidth: "1px",
                }}
              />
              <Typography
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                  fontSize: 15,
                  mt: 1,
                }}
              >
                جمع جز: {formatNumber(item.price! * item.quantityInBasket!)}{" "}
                تومان
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
