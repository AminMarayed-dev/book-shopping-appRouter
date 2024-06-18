"use client";

import { Box, Divider, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import GridViewIcon from "@mui/icons-material/GridView";
import { useEffect, useState } from "react";
import React from "react";
import { useGetBookByAge, useGetBookById } from "../../hook";
import SwiperProducts from "../swiper-products/swiper-products";
import DesSingleProduct from "../des-singleProduct/des-singleProduct";

function SingleProduct({ id }: { id: string }) {
  const [mainImage, setMainImage] = useState("");
  const { data } = useGetBookById(id);
  const genre: string = data?.genre || "";
  const ageGroup: string = data?.ageGroup || "";
  const { data: dataBookGenre } = useGetBookByAge({ genre, ageGroup });

  const changeGenre = [
    { genre: "فانتزی", genreEn: "fantasy" },
    { genre: "وحشت", genreEn: "horror" },
  ];
  const changeAgeGroup = [
    { ageGroup: "نوجوان", ageGroupEn: "teenager" },
    { ageGroup: "جوان", ageGroupEn: "young" },
  ];
  const genreUrl = changeGenre.find((item) => item.genre === genre);
  const ageGroupUrl = changeAgeGroup.find((item) => item.ageGroup === ageGroup);

  useEffect(() => {
    if (data?.imageUrl.length > 0) {
      setMainImage(data.imageUrl[0]);
    }
  }, [data]);

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: "10px",
          alignItems: "center",
          mx: "10px",
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
        {data?.imageUrl.slice(0, 3).map((image, index) => (
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

      <DesSingleProduct
        data={data}
        ageGroupUrl={ageGroupUrl}
        genreUrl={genreUrl}
      />

      <Divider sx={{ mt: "20px" }} />

      <Typography sx={{ fontWeight: "bold", fontSize: "25px", mt: "10px" }}>
        محصولات مرتبط
      </Typography>

      {/*  swiper image*/}
      {dataBookGenre && <SwiperProducts dataBookGenre={dataBookGenre} />}
    </Box>
  );
}

export default SingleProduct;
