"use client";

import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  ImageList,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import GridViewIcon from "@mui/icons-material/GridView";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { useState } from "react";
import React from "react";
import CustomButton from "@/components/button/CustomButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TwitterIcon from '@mui/icons-material/Twitter';
function SingleProduct() {
  const [number, setNumber] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  function addTobasket() {}

  const toggleFavorite = () => {
    setIsFavorite((prevFavorite) => !prevFavorite);
  };
  const subtractFromNumber = () => {
    console.log("first");
    setNumber((prevNumber) => prevNumber - 1);
  };

  const addToNumber = () => {
    console.log("first");

    setNumber((prevNumber) => prevNumber + 1);
  };
  const data = {
    name: "کتاب بسه دیگه اثر احسان محمدی",
    id: "5",
    imageURL: "https://www.30book.com/Media/Book/84633.jpg",
    detail:
      "ین کتاب راجب حسابان استین کتاب راجب حسابان است ین کتاب راجب حسابان است کتاب راجب ب حسابان است کتاب راجب ب حسابان است کتاب راجب ب حسابان است کتاب راجب ب حسابان است کتاب راجب ب حسابان است  ب حسابان است کتاب راجب حسابان است",
    price: 5000,
    role: "کاربر",
    genre: "ترسناک",
    Ages: "نوجوان",
    detsail: "",
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: "10px" }}
      >
        <Box>
          خانه / رده سنی {data.Ages} / ژانر {data.genre}
        </Box>
        <Box>
          <KeyboardArrowRightIcon />
          <GridViewIcon />
          <KeyboardArrowLeftIcon />
        </Box>
        <Box></Box>
      </Box>

      {/* image */}
      <Box sx={{ mb: "40px" }}>
        <ImageList
          sx={{
            objectFit: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="https://vidapub.com/wp-content/uploads/2024/02/harley-quinn-mad-love.jpg" />
        </ImageList>
      </Box>

      {/* description */}
      <Box sx={{ boxShadow: 2, px: 2, borderRadius: "4px", backgroundColor: "white" , mx:2 , mt:2}}>
    <Box>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {data.name}
        </Typography>
      </Box>
      {/* rate */}
      <Box sx={{ display: "flex", gap: "20px", mt: "10px", mb: "20px" }}>
        {" "}
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <Typography sx={{ color: "gray" }}>دیدگاه 0 کاربر</Typography>
      </Box>
      {/* price */}
      <Typography sx={{ color: "blue", fontSize: "20px", fontWeight: "bold" }}>
        {data.price + " "} ریال
      </Typography>
      {/* detail */}
      <Typography sx={{ color: "gray", mt: "10px" }}>{data.detail}</Typography>

      {/* add basket */}
      <Box sx={{display : "flex" , gap : "10px" , my:"10px"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid #000", 
            borderRadius: "4px", 
            backgroundColor: "white", 
          }}
        >
          <Box
            sx={{
              borderRight: "1px solid #000",
              padding: "8px",
              "&:hover": { backgroundColor: "blue", color: "white" },
            }}
          >
            <CustomButton text="-" handleClick={subtractFromNumber} sx={{"&:hover":{color : "white"}}}/>
          </Box>
          <Box
            sx={{
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">{number}</Typography>
          </Box>
          <Box
            sx={{
              borderLeft: "1px solid #000",
              padding: "8px",
              "&:hover": { backgroundColor: "blue", color: "white" },
            }}
          >
            <CustomButton text="+" handleClick={addToNumber} sx={{"&:hover":{color : "white"}}}/>
          </Box>
        </Box>

        <Box sx={{bgcolor:"blue" , color : "white" , p : "5px"  ,    display: "flex",
              alignItems: "center",
              justifyContent: "center",}}>
          {" "}
          <CustomButton text={"افزودن به سبد خرید"} handleClick={addTobasket} sx={{fontSize: "15px", fontWeight: "bold" , color: "white"}} />
        </Box>
      </Box>


{/* wishlist */}
     <Box sx={{display : "flex" , gap:"5px" , alignItems:"center"}}>
     <IconButton onClick={toggleFavorite}>
        {isFavorite ? (
          <FavoriteIcon sx={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: "black" }} />
        )}
      </IconButton>
      <Typography>افزودن به علاقه مندی</Typography>
     </Box>

     <Divider sx={{width:"80%" , mx:"auto" , my:"20px"}}/>


<Box sx={{display : "flex" , gap:"5px"}}>
  <Typography sx={{fontWeight:"bold"}}>دسته :</Typography>
  <Typography sx={{}}>ژانر {data.genre}  </Typography>
</Box>
<Box sx={{display : "flex" , gap:"5px" , alignItems:"center", mt:"10px" , mb:"30px"}}>
  <Typography sx={{fontWeight:"bold" }}>دنبال کنید :</Typography>
  <TwitterIcon/>  
</Box>

    </Box>


<Typography sx={{fontWeight: "bold" , fontSize:"25px",mt:"10px"}}>محصولات مرتبط</Typography>
    </Box>
  );
}

export default SingleProduct;
