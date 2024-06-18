"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import GridViewIcon from "@mui/icons-material/GridView";
import { useEffect, useState } from "react";
import React from "react";
import CustomButton from "@/components/button/CustomButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TwitterIcon from "@mui/icons-material/Twitter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useGetBookByAge, useGetBookById } from "../../hook";

function SingleProduct({ id }: { id: string }) {
  const [number, setNumber] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const { data } = useGetBookById(id);
  const genre = data?.genre;
  const ageGroup = data?.ageGroup;
  const { data : dataBookGenre } = useGetBookByAge({ genre , ageGroup });
  

  const changeGenre = [{genre : "فانتزی" , genreEn : "fantasy"},{genre : "وحشت" , genreEn : "horror"}]
  const changeAgeGroup = [{ageGroup : "نوجوان" , ageGroupEn : "teenager"},{ageGroup : "جوان" , ageGroupEn : "young"}]
  const genreUrl = changeGenre.find((item)=> item.genre === genre)
  const ageGroupUrl = changeAgeGroup.find((item)=> item.ageGroup === ageGroup)



  const handleImageClick = (image) => {
    setMainImage(image);
  };
  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };
  function addTobasket() {}

  const toggleFavorite = () => {
    setIsFavorite((prevFavorite) => !prevFavorite);
  };
  const subtractFromNumber = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  const addToNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };


  const nextBooks = () => {
    if (currentIndex + 2 < dataBookGenre?.length) {
      setCurrentIndex((prevIndex) => prevIndex + 2);
    }
  };

  const prevBooks = () => {
    if (currentIndex - 2 >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - 2);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: "10px",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "13.3px" }}>خانه</Typography>
          <Typography sx={{ fontSize: "13.3px" }}>/</Typography>
          <Typography sx={{ fontSize: "13.3px", textWrap: "nowrap" }}>
            {" "}
            رده سنی {data?.ageGroup}
          </Typography>
          <Typography sx={{ fontSize: "13.3px" }}>/</Typography>
          <Typography
            sx={{ fontSize: "13.3px", textWrap: "nowrap", fontWeight: "bold" }}
          >
            {" "}
            ژانر {data?.genre}
          </Typography>
        </Box>

        <Box>
          <KeyboardArrowRightIcon />
          <GridViewIcon />
          <KeyboardArrowLeftIcon />
        </Box>
        <Box></Box>
      </Box>

      <Box sx={{ mb: "20px", width: "100%", textAlign: "center" }}>
        <img
          src={mainImage}
          alt="main product"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      {/* Thumbnail images */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {data?.imageUrl.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`thumbnail ${index}`}
            style={{ width: "100px", height: "100px", cursor: "pointer" }}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </Box>

      {/* description */}
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
          sx={{ color: "blue", fontSize: "18px", fontWeight: "bold" }}
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
                "&:hover": { backgroundColor: "blue", color: "white" },
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
                "&:hover": { backgroundColor: "blue", color: "white" },
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
              bgcolor: "blue",
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
              handleClick={addTobasket}
              sx={{ fontSize: "13px", fontWeight: "bold", color: "white" }}
            />
          </Box>
        </Box>

        {/* wishlist */}
        <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <IconButton onClick={toggleFavorite}>
            {isFavorite ? (
              <FavoriteIcon sx={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: "black" }} />
            )}
          </IconButton>
          <Typography sx={{ fontSize: "14px" }}>
            افزودن به علاقه مندی
          </Typography>
        </Box>

        <Divider sx={{ width: "80%", mx: "auto", my: "20px" }} />

        <Box sx={{ display: "flex", gap: "5px" }}>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            دسته :
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "gray" }} onClick={()=>location.href = `/product-category/${ageGroupUrl?.ageGroupEn}/${ageGroupUrl?.ageGroupEn}-${genreUrl?.genreEn}`}>
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
      </Box>

      <Divider sx={{ width: "80%", mx: "auto", my: "20px" }} />

      {/* description */}
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
            sx={{ fontSize: "16px", color: "blue" }}
            onClick={toggleDescription}
          >
            توضیحات
          </Typography>
        </Box>
        {isDescriptionOpen && (
          <Typography variant="body2" sx={{}}>
            کتاب تک جلدی هارلی کویین یکی از بهترین آثار در دنیای دی سی به قلم
            پاول دینی و پت کدیگنروانه بازار شده است.
          </Typography>
        )}
      </Box>

      <Divider sx={{ width: "80%", mx: "auto", my: "20px" }} />

      <Typography sx={{ fontWeight: "bold", fontSize: "25px", mt: "10px" }}>
        محصولات مرتبط
      </Typography>

      {/*  swiper image*/}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={prevBooks} disabled={currentIndex === 0}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Box sx={{ display: "flex", overflow: "hidden", width: "100%" }}>
          {dataBookGenre?.slice(currentIndex, currentIndex + 2).map((book, index) => (
            <Card key={index} sx={{ flex: "0 0 45%", margin: "10px" }}>
              <CardMedia
                component="img"
                height="140"
                image={book?.imageUrl[0]}
                alt={book.name}
              />
              <CardContent>
                <Typography variant="h6" sx={{fontSize:"1rem"}}>{book.name}</Typography>
                <Typography variant="body2" color="text.secondary" className="truncate">
                  {book?.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  {book?.price} ریال
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <IconButton
          onClick={nextBooks}
          disabled={currentIndex + 2 >= dataBookGenre?.length}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SingleProduct;
