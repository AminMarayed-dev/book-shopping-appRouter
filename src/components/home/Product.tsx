"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

// Swiper components, modules, and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const data = [
  {
    id: 1,
    image:
      "https://vidapub.com/wp-content/uploads/2023/05/%D8%A2%D8%B1%DA%86%DB%8C%D8%A8%D8%A7%D9%84%D8%AF%D9%84%D8%A7%DA%A9%D8%B3-400x400.jpg",
    tagline: "2",
    title: "salam",
    price: 2,
  },
  {
    id: 1,
    image:
      "https://vidapub.com/wp-content/uploads/2023/05/%D8%A2%D8%B1%DA%86%DB%8C%D8%A8%D8%A7%D9%84%D8%AF%D9%84%D8%A7%DA%A9%D8%B3-400x400.jpg",
    tagline: "2",
    title: "salam",
    price: 2,
  },
  {
    id: 1,
    image:
      "https://vidapub.com/wp-content/uploads/2023/05/%D8%A2%D8%B1%DA%86%DB%8C%D8%A8%D8%A7%D9%84%D8%AF%D9%84%D8%A7%DA%A9%D8%B3-400x400.jpg",
    tagline: "2",
    title: "salam",
    price: 2,
  },
];

function Product() {
  return (
    <Box component="section" sx={{ width: "100%", p: 4, textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        مجموعه کتاب های نوجوان
      </Typography>
      <Swiper
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={2}
      >
        {data.map(({ id, image, title, price }) => (
          <SwiperSlide key={id}>
            <Card sx={{ maxWidth: 345, mx: "auto" }}>
              <CardMedia
                component="img"
                height="120"
                image={image}
                alt={title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {price} تومان
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box sx={{ mt: 2 }}>
        <Link href={"/"} passHref>
          <Button variant="contained" color="primary">
            مشاهده محصولات
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Product;
