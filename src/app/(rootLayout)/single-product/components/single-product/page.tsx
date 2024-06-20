"use client";

import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import {
  useGetBookByAge,
  useGetBookById,
} from "@/app/(rootLayout)/single-product/hook";
import SwiperProducts from "../swiper-products/swiper-products";
import DesSingleProduct from "../des-singleProduct/des-singleProduct";
import TitleSingleProduct from "../title-singleProduct/title-singleProduct";
import {
  TypeChangeAgeGroup,
  TypeChangeGenre,
} from "@/app/(rootLayout)/single-product/hook/type";
import ImageSingleProduct from "../image-singleProduct/image-singleProduct";

function SingleProduct({ id }: { id: string }) {
  const { data } = useGetBookById(id);
  const genre: string = data?.genre || "";
  const ageGroup: string = data?.ageGroup || "";
  const { data: dataBookGenre } = useGetBookByAge({ genre, ageGroup });

  const changeGenre: TypeChangeGenre[] = [
    { genre: "فانتزی", genreEn: "fantasy" },
    { genre: "وحشت", genreEn: "horror" },
  ];

  const changeAgeGroup: TypeChangeAgeGroup[] = [
    { ageGroup: "نوجوان", ageGroupEn: "teenager" },
    { ageGroup: "جوان", ageGroupEn: "young" },
  ];
  const genreUrl = changeGenre.find((item) => item.genre === genre);
  const ageGroupUrl = changeAgeGroup.find((item) => item.ageGroup === ageGroup);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {data && (
        <TitleSingleProduct
          data={data}
          ageGroupEn={ageGroupUrl?.ageGroupEn || ""}
          genreEn={genreUrl?.genreEn || ""}
        />
      )}

      {/* image */}
      {data && <ImageSingleProduct data={data} />}

      {/* description */}
      {data && (
        <DesSingleProduct
          data={data}
          ageGroupUrl={ageGroupUrl!}
          genreUrl={genreUrl!}
        />
      )}
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
