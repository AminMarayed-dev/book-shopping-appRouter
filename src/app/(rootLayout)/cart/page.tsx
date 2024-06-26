"use client";

import Box from "@mui/material/Box";
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
import { Close } from "@mui/icons-material";
import Image from "next/image";
import { formatNumber } from "@/utils/formatNumber";
import ghayoumi from "../../../../public/ghayoumi.jpg";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import CustomButton from "@/components/button/CustomButton";
import { useEffect, useState } from "react";
import { BooksEntity } from "@/type";
import { useRouter } from "next/navigation";
import { routes } from "@/context/routes";

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [arrayBook, setArrayBook] = useState([]);
  const basketItems: BooksEntity[] = getLocalStorage("basket");
  useEffect(() => {
    setArrayBook(basketItems);
    const price = basketItems.reduce(
      (a, b) => a + b?.price! * b?.quantityInBasket!,
      0
    );
    setTotalPrice(price);
  }, [basketItems.length]);

  const subtractFromNumber = (id: string) => {
    const foundedIndex = basketItems.findIndex(
      (item: BooksEntity) => item.id === id
    );
    if (basketItems[foundedIndex]?.quantityInBasket! >= 2) {
      setTotalPrice((prev) => prev - basketItems[foundedIndex]?.price!);

      basketItems[foundedIndex].quantityInBasket! -= 1;
      setLocalStorage("basket", basketItems);
      setArrayBook(basketItems);
    }
  };

  const addToNumber = (id: string) => {
    const foundedIndex = basketItems.findIndex(
      (item: BooksEntity) => item.id === id
    );
    if (!(basketItems[foundedIndex].quantityInBasket! >= 3)) {
      (basketItems[foundedIndex].quantityInBasket! += 1),
        setTotalPrice((prev) => prev + basketItems[foundedIndex]?.price!);
    }

    setLocalStorage("basket", basketItems);
    setArrayBook(basketItems);
  };
  const router = useRouter();
  return (
    <Container>
      <Box sx={{ flex: 1, overflowY: "auto", mb: 4 }}>
        {arrayBook.map((item, index) => {
          return (
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
                  alt="test"
                  src={item.imageUrl[0]}
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
                  قیمت: {formatNumber(item.price)} تومان
                </Typography>
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
                    my: 1,
                  }}
                >
                  تعداد:
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
                          onClick={() => subtractFromNumber(item.id)}
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
                        <Button
                          onClick={() => addToNumber(item.id)}
                          sx={{
                            fontSize: "13px",
                            color: "gray",
                            width: "100%",
                            display: "flex",
                            "&:hover": { color: "white" },
                          }}
                        >
                          +
                        </Button>
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
                          جمع جز: {formatNumber(item.price)} تومان
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Typography>
              </CardContent>
              <IconButton sx={{ display: "grid", alignItems: "start" }}>
                <Close />
              </IconButton>
            </Card>
          );
        })}
      </Box>
      <Button
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
