"use client";

import ImageSingleProduct from "@/app/(rootLayout)/product/components/image-singleProduct/ImageSingleProduct";
import MainSingleProduct from "@/app/(rootLayout)/product/components/main-singleProduct/MainSingleProduct";
import SwiperProducts from "@/app/(rootLayout)/product/components/swiper-products/swiper-products";
import TitleSingleProduct from "@/app/(rootLayout)/product/components/title-singleProduct/TitleSingleProduct";
import { useGetBookByAge } from "@/app/(rootLayout)/product/hook/index";
import {
  TypeChangeAgeGroup,
  TypeChangeGenre,
} from "@/app/(rootLayout)/product/hook/type";
import { useGetBookById } from "@/hooks/useGetBookById";
import { Box, Divider, Typography } from "@mui/material";

function SingleProduct({ id }: { id: string }) {
  const { data, isLoading } = useGetBookById(id);

  const genre: string = data?.genre || "";
  const ageGroup: string = data?.ageGroup || "";
  const { data: dataBookGenre } = useGetBookByAge({ genre, ageGroup });

  if (isLoading) {
    return <Box>Loading ...</Box>;
  }

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
        <MainSingleProduct
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
