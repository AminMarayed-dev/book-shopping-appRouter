import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import WishListSingleProduct from "../wishlist-singleProduct/WishListSingleProduct";
import { TypeChangeAgeGroup, TypeChangeGenre } from "../../hook/type";
import { BooksEntity } from "@/type";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import { routes } from "@/constant/routes";
import ChangeQuantity from "@/components/change-quantity/ChangeQuantity";
import RatingSingleProduct from "../rating-singleProduct/RatingSingleProduct";
import DescriptionSingleProduct from "../description-singleProduct/DescriptionSingleProduct";

function MainSingleProduct({
  data,
  ageGroupUrl,
  genreUrl,
}: {
  data: BooksEntity;
  ageGroupUrl: TypeChangeAgeGroup;
  genreUrl: TypeChangeGenre;
}) {
  const [quantity, setQuantity] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const arrayBooksBasket = getLocalStorage("basket");

  function addToBasket() {
    console.log(arrayBooksBasket);
    const foundedBookBasket = arrayBooksBasket.findIndex(
      (item: BooksEntity) => item.id === data.id
    );
    if (foundedBookBasket > -1) {
      arrayBooksBasket[foundedBookBasket].quantityInBasket = quantity;
      setLocalStorage("basket", arrayBooksBasket);
    } else {
      const productBasket = {
        ...data,
        quantityInBasket: quantity,
      };
      setLocalStorage("basket", [...getLocalStorage("basket"), productBasket]);
    }
  }

  const subtractFromNumber = () => {
    setDisabled(false);
    if (quantity > 0) {
      setQuantity((prevNumber) => {
        prevNumber <= 2 ? setDisabled(false) : "";
        return prevNumber - 1;
      });
    }
  };

  const addToNumber = () => {
    setQuantity((prevNumber) => {
      prevNumber >= 2 ? setDisabled(true) : "";
      return prevNumber + 1;
    });
  };

  return (
    <Box
      sx={{
        boxShadow: 2,
        px: 2,
        borderRadius: "4px",
        backgroundColor: "white",
        my: 2,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
        {data?.name}
      </Typography>

      <RatingSingleProduct />

      <Typography
        sx={{
          color: "secondary.light",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {data?.price + " "} ریال
      </Typography>

      <Typography sx={{ color: "gray", fontSize: "14px" }}>
        {data?.description}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          height: "30px",
        }}
      >
        <ChangeQuantity
          item={""}
          subtractFromNumber={() => subtractFromNumber()}
          disabled={disabled}
          addToNumber={() => addToNumber()}
          quantity={quantity}
        />

        <Button
          onClick={addToBasket}
          sx={{
            fontSize: "13px",
            fontWeight: "bold",
            bgcolor: "secondary.light",
            color: "white",
            p: "10px",
            "&:hover": {
              color: "white",
              backgroundColor: "secondary.light",
            },
          }}
        >
          افزودن به سبد خرید
        </Button>
      </Box>

      <WishListSingleProduct book={data} />

      <Divider sx={{ width: "80%", mx: "auto", my: "20px" }} />

      <Box sx={{ display: "flex", gap: "5px" }}>
        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
          دسته :
        </Typography>
        <Typography
          sx={{ fontSize: "14px", color: "gray" }}
          onClick={() =>
            router.push(
              routes.productCategoryGenre
                .replace(`:slug`, ageGroupUrl?.ageGroupEn!)
                .replace(
                  `:genre`,
                  `${ageGroupUrl?.ageGroupEn}-${genreUrl?.genreEn!}`
                )
            )
          }
        >
          ژانر {data?.genre}{" "}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "5px",
          alignItems: "center",
          mt: "10px",
          mb: "30px",
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
          دنبال کنید :
        </Typography>
        <TwitterIcon />
      </Box>

      <DescriptionSingleProduct />
    </Box>
  );
}
export default MainSingleProduct;
