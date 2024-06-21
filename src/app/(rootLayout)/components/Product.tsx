"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Link from "next/link";
import { useGetBooksByGroup } from "@/hooks/useGetBooksByAgeGroup";
import { useState } from "react";
import { BooksEntity } from "@/type";



function Product({
  ageGroup,
  ageGroupEn,
}: {
  ageGroup: string;
  ageGroupEn: string;
}) {
  const { data, isLoading, isSuccess, isError, error } = useGetBooksByGroup({
    ageGroup,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextBooks = () => {
    if (currentIndex + 2 < data?.length) {
      setCurrentIndex((prevIndex) => prevIndex + 2);
    }
  };

  const prevBooks = () => {
    if (currentIndex - 2 >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - 2);
    }
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  if (isSuccess && data) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          mt: 4,
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          مجموعه کتاب های {ageGroup}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>

          
          <IconButton onClick={prevBooks} disabled={currentIndex === 0}>
            <KeyboardArrowRightIcon />

          </IconButton>



          <Box sx={{ display: "flex", overflow: "hidden", width: "100%" }}>
            {data?.slice(currentIndex, currentIndex + 2).map((book : BooksEntity, index : number) => (
              <Card key={index} sx={{ flex: "0 0 45%", margin: "10px" }}>
                <Link href={`/product/${book.id}`}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={book?.imageUrl![0]}
                    alt={book.name}
                  />
                  <CardContent>
                    <Typography variant="h5">{book.name}</Typography>
                    <Typography
                      variant="h5"
                      color="secondary.light"
                      sx={{ mt: 1 }}
                    >
                      {book?.price} ریال
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </Box>
          <IconButton
            onClick={nextBooks}
            disabled={currentIndex + 2 >= data?.length}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Link href={`/product-category/${ageGroupEn}`} passHref>
            <Button variant="contained" color="secondary">
              مشاهده محصولات
            </Button>
          </Link>
        </Box>
      </Box>
    );
  }
}

export default Product;
