import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import { BooksEntity } from "../../app/(rootLayout)/product-category/hook/type";

function OneCard({ book, index }: { book: BooksEntity; index: number }) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleCardHover = (index: number) => {
    setHoveredIndex(index);
  };
  return (
    <Card
      onClick={() => (location.href = `/product/${book.id}`)}
      key={index}
      sx={{
        flex: "0 0 45%",
        margin: "1px",
        m: "auto",
        boxShadow: "none",
        textAlign: "center",
      }}
      onMouseEnter={() => handleCardHover(index)}
      onMouseLeave={() => handleCardHover(-1)}
    >
      <CardMedia
        component="img"
        image={hoveredIndex === index ? book?.imageUrl![1] : book?.imageUrl![0]}
        alt={book?.name}
        sx={{
          width: "200px",
          objectFit: "contain",
          height: "200px",
          transition: "transform 0.3s",
          transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
        }}
      />
      <CardContent>
        <Typography variant="h6" sx={{ fontSize: "14px" }}>
          {book?.name}
        </Typography>

        <Typography
          variant="h6"
          color="secondary.light"
          sx={{ fontSize: "13px" }}
        >
          {book?.price} تومان
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OneCard;
