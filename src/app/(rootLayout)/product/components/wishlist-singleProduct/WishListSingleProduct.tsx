import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useEffect, useState } from "react";
import { BooksEntity } from "@/type";
import { useEditUser, useGetUser } from "../../hook";
import { getCookie } from "cookies-next";
import { TypeUser } from "@/type";


function WishListSingleProduct({ book }: { book: BooksEntity }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const userId = getCookie("id") as string;
  const userRole = getCookie("role");
  
  const { data: user  } = useGetUser(userId);
  const { mutate: editUserMutation } = useEditUser();

  useEffect(() => {
    if (user && user.wishlist) {
      const newWishlist = user.wishlist!.filter(
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
    if (userRole === "admin" || userRole === "user") {
      if (!isFavorite) {
        const newUser: TypeUser = {
          ...user!,
          wishlist: [...(user?.wishlist || []), book],
        };
        editUserMutation(newUser);
      } else {
        const newWishlist = user?.wishlist!.filter(
          (item: BooksEntity) => item.id != book.id
        );
        const newUser : TypeUser = {
          ...user!,
          wishlist: newWishlist || [],
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
