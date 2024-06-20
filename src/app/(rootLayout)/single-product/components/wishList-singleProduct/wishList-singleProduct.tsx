import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useEffect, useState } from "react";
import getCookieData from "@/utils/cookie";

import { BooksEntity } from "@/hooks/type";

import { useGetBookById } from "@/hooks/useGetBookById";
import { useEditUser, useGetUser } from "../../hook";

interface User {
  wishlist: BooksEntity[];
}
function WishListSingleProduct({ book }: { book: BooksEntity }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const userCookie = getCookieData("role");
  const { data: user } = useGetUser(userCookie);
  const { mutate: editUserMutation } = useEditUser();

  useEffect(() => {
    if (user && user.wishlist) {
      const newWishlist = user.wishlist.filter(
        (item: BooksEntity) => item.id === book.id
      );
      if (newWishlist.length > 0) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  }, [user]);

  const toggleFavorite = async () => {
    if (userCookie?.role === "admin" || userCookie?.role === "user") {
      if (!isFavorite) {
        const newUser = {
          ...user,
          wishlist: [...user?.wishlist!, book],
        };
        editUserMutation(newUser);
      } else {
        const newWishlist = user?.wishlist!.filter(
          (item: BooksEntity) => item.id != book.id
        );
        const newUser = {
          ...user,
          wishlist: newWishlist,
        };
        editUserMutation(newUser);
      }
    }

    setIsFavorite((prevFavorite) => !prevFavorite);
  };
  return (
    <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
      <IconButton onClick={toggleFavorite}>
        {isFavorite ? (
          <FavoriteIcon sx={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: "black" }} />
        )}
      </IconButton>
      <Typography sx={{ fontSize: "14px" }}>افزودن به علاقه مندی</Typography>
    </Box>
  );
}

export default WishListSingleProduct;
