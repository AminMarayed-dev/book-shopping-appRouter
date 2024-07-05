import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import ChangeQuantity from "../change-quantity/ChangeQuantity";
import { formatNumber } from "@/utils/formatNumber";
import { Close } from "@mui/icons-material";
import { BooksEntity } from "@/type";

function CardBasket({
  item,
  subtractFromNumber,
  addToNumber,
  removeFromBasket,
}: {
  item: BooksEntity;
  subtractFromNumber: (id: string) => void;
  addToNumber: (id: string) => void;
  removeFromBasket: (id: string) => void;
}) {
  return (
    <Card
      sx={{
        display: "flex",
        "&:hover": { bgcolor: "primary.dark" },
        borderBottom: "2px solid #EFEFEF85",
      }}
    >
      <CardMedia
        sx={{
          display: "grid",
          alignItems: "center",
          padding: 1,
          width: "60%",
        }}
      >
        <Image
          alt="img of book"
          src={item.imageUrl ? item.imageUrl[0] : ""}
          width={500}
          height={500}
        />
      </CardMedia>
      <CardContent sx={{ width: "55%" }}>
        <Typography
          sx={{
            fontSize: "15px",
            textWrap: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {item.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            my: "10px",
            height: "30px",
            textAlign: "center",
          }}
        >
          <ChangeQuantity
            item={item.id!}
            subtractFromNumber={() => subtractFromNumber(item.id!)}
            disabled={false}
            addToNumber={() => addToNumber(item.id!)}
            quantity={item.quantityInBasket!}
          />
        </Box>
        <Typography
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            fontSize: "13px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {item.quantityInBasket} × {formatNumber(item.price!)} تومان
        </Typography>
      </CardContent>
      <IconButton
        sx={{ display: "grid", alignItems: "center" }}
        onClick={() => removeFromBasket(item.id!)}
      >
        <Close />
      </IconButton>
    </Card>
  );
}

export default CardBasket;
