import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import Image from "next/image";
import CustomButton from "@/components/button/CustomButton";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { BooksEntity } from "@/type";
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
  // const [addedValue, setAddedValue] = useState([]);
  const basketItems = getLocalStorage("basket");

  const subtractFromNumber = (id : string) => {
    const foundedIndex = basketItems.findIndex((item : BooksEntity) => item.id === id);
    if (basketItems[foundedIndex].quantityInBasket >= 1) {
      basketItems[foundedIndex].quantityInBasket -= 1;
      setLocalStorage("basket", basketItems);
    }
  };

  const addToNumber = (id : string) => {
    const foundedIndex = basketItems.findIndex((item : BooksEntity) => item.id === id);
    basketItems[foundedIndex].quantityInBasket += 1;
    setLocalStorage("basket", basketItems);
    // setAddedValue(basketItems);
  };

  return (
    <SwipeableDrawer
      anchor={"left"}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box sx={{ width: 250 }} role="presentation">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Typography variant={"h4"}>سبد خرید</Typography>
          <Typography>بستن</Typography>
        </Box>{" "}
        <Divider />
        {basketItems.map((item: any) => (
          <Card sx={{ display: "flex" }} key={item.id}>
            <CardMedia>
              <Image
                alt={item.name}
                src={item.imageUrl[0]}
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
                    <CustomButton
                      text="-"
                      handleClick={() => subtractFromNumber(item.id)}
                      sx={{
                        fontSize: "13px",
                        color: "gray",
                        "&:hover": { color: "white" },
                      }}
                    />
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
                      handleClick={() => addToNumber(item.id)}
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
              </Box>
              <Typography>قیمت :{item.price}</Typography>
            </CardContent>
            <IconButton>
              <Close />
            </IconButton>
          </Card>
        ))}
      </Box>
    </SwipeableDrawer>
  );
};

export default SwipeableTemporaryDrawer;
