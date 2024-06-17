"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";

// Swiper components, modules, and styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useGetBooksByGroup } from "@/hooks/useGetBooksByAgeGroup";

function Product({ageGroup}:{ageGroup:string}) {
  const { data, isLoading, isSuccess, isError, error } = useGetBooksByGroup({ageGroup});

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  if (isSuccess && data) {
    return (
      <Box
        component="section"
        sx={{ width: "100%", p: 4, textAlign: "center" }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
        مجموعه کتاب های {ageGroup}
        </Typography>
        <Swiper
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={2}
        >
          {data.map((book:any) => (
            <SwiperSlide key={book.id}>
              <Card sx={{ maxWidth: 345, mx: "auto" }}>
                <CardMedia
                  component="img"
                  height="120"
                  image={book.imageUrl}
                  alt={book.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.name}
                  </Typography>
                  <Typography variant="body2" color="secondary.light">
                    {book.price} تومان
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box sx={{ mt: 2 }}>
          <Link href={`/product-category/${data?.slug}`} passHref>
            <Button variant="contained" color="primary">
              مشاهده محصولات
            </Button>
          </Link>
        </Box>
      </Box>
    );
  }

  return null; // Fallback for when no conditions are met
}

export default Product;
