import CustomButton from "@/components/button/CustomButton";
import { Box, Divider, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import WishListSingleProduct from "../wishList-singleProduct/wishList-singleProduct";
import { TypeChangeAgeGroup, TypeChangeGenre } from "../../hook/type";
import { BooksEntity } from "@/type";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";

function DesSingleProduct({
  data,
  ageGroupUrl,
  genreUrl,
}: {
  data: BooksEntity;
  ageGroupUrl: TypeChangeAgeGroup;
  genreUrl: TypeChangeGenre;
}) {
  const [number, setNumber] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  function addToBasket() {
    const arrayBooksBasket = getLocalStorage("basket");
    const foundedBookBasket = arrayBooksBasket.findIndex((item) => item.id === data.id
    );
        if (foundedBookBasket > -1) {
      arrayBooksBasket[foundedBookBasket].quantityInBasket = number 
      setLocalStorage("basket", arrayBooksBasket);
    } else {   
       const productBasket = {
        ...data,
        quantityInBasket: number,
      };
      setLocalStorage("basket", [...getLocalStorage("basket"), productBasket]);
    }
  }

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const subtractFromNumber = () => {
    if (number > 0) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };

  const addToNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <Box
      sx={{
        boxShadow: 2,
        px: 2,
        borderRadius: "4px",
        backgroundColor: "white",
        mx: 2,
        mt: 2,
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
          {data?.name}
        </Typography>
      </Box>

      {/* rate */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          mt: "10px",
          mb: "20px",
        }}
      >
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "gray", fontSize: "14px" }}>
            (دیدگاه 0 کاربر)
          </Typography>
        </Box>
      </Box>

      {/* price */}
      <Typography
        sx={{
          color: "secondary.light",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {data?.price + " "} ریال
      </Typography>

      {/* detail */}
      <Typography sx={{ color: "gray", mt: "10px", fontSize: "14px" }}>
        {data?.description}
      </Typography>

      {/* add basket */}
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
              handleClick={subtractFromNumber}
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
              {number}
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
              handleClick={addToNumber}
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

        <Box
          sx={{
            bgcolor: "secondary.light",
            color: "white",
            p: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <CustomButton
            text={"افزودن به سبد خرید"}
            handleClick={addToBasket}
            sx={{ fontSize: "13px", fontWeight: "bold" }}
          />
        </Box>
      </Box>

      {/* wishList */}
      <WishListSingleProduct book={data} />
      <Divider sx={{ width: "80%", mx: "auto", my: "20px" }} />

      <Box sx={{ display: "flex", gap: "5px" }}>
        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
          دسته :
        </Typography>
        <Typography
          sx={{ fontSize: "14px", color: "gray" }}
          onClick={() =>
            (location.href = `/product-category/${ageGroupUrl?.ageGroupEn}/${ageGroupUrl?.ageGroupEn}-${genreUrl?.genreEn}`)
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
      <Box
        sx={{
          display: "flex",
          cursor: "pointer",
          flexDirection: "column",
          mt: "10px",
          mb: "10px",
          borderRadius: "4px",
          padding: "8px",
          gap: "10px",
          backgroundColor: "#f0f0f0",
          mx: "20px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          {isDescriptionOpen ? (
            <ExpandLessIcon sx={{ color: "gray" }} />
          ) : (
            <ExpandMoreIcon sx={{ color: "gray" }} />
          )}

          <Typography
            variant="body1"
            sx={{ fontSize: "16px", color: "secondary.light" }}
            onClick={toggleDescription}
          >
            توضیحات
          </Typography>
        </Box>
        {isDescriptionOpen && (
          <Typography variant="body2">
            کتاب تک جلدی هارلی کویین یکی از بهترین آثار در دنیای دی سی به قلم
            پاول دینی و پت کدیگنروانه بازار شده است.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default DesSingleProduct;
