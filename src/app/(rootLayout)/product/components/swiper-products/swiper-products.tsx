import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Link from "next/link";
import { BooksEntity } from "@/type";
import { routes } from "@/context/routes";

function SwiperProducts({ dataBookGenre }: { dataBookGenre: BooksEntity[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton onClick={prevBooks} disabled={currentIndex === 0}>
        <KeyboardArrowRightIcon />
      </IconButton>
      <Box sx={{ display: "flex", overflow: "hidden", width: "100%" }}>
        {dataBookGenre
          ?.slice(currentIndex, currentIndex + 2)
          .map((book: BooksEntity, index: number) => (
            <Card key={index} sx={{ flex: "0 0 45%", margin: "10px" }}>
                <Link href={routes.sigleProduct.replace(`:slug` , book.id! )}>
                <CardMedia
                  component="img"
                  height="140"
                  image={book?.imageUrl![0]}
                  alt={book.name}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    color="primarsecondary.light"
                    paddingBottom={1}
                  >
                    {book.name}
                  </Typography>

                  <Typography variant="h5" color="primarsecondary.light">
                    {book?.price} ریال
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          ))}
      </Box>
      <IconButton
        onClick={nextBooks}
        disabled={currentIndex + 2 >= dataBookGenre?.length}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
    </Box>
  );
}

export default SwiperProducts;
