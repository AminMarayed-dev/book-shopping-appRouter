import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useEffect, useState } from "react";
import { useGetUser } from "../../hook";
import getCookieData from "@/utils/cookie";
import axios from "axios";
import { getLocalStorage } from "@/utils/localStorage";

function WishListSingleProduct({ book }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const userCookie = getCookieData("role");
    // const userCookie = getLocalStorage("role")[0];

//   const { data: user } = useGetUser(userCookie);

  useEffect(() => {
    const getWishlistUser = async (userCookie) => {
      const { data: user } = await axios.get(
        `http://localhost:3000/users/${userCookie.id}`
      );
      return user;
    };
    getWishlistUser(userCookie).then((user) => {
      console.log(user);
      const newWishlist = user.wishlist.filter((item) => (item.id = book.id));
      console.log(newWishlist);
      console.log(newWishlist.length);
      if (newWishlist.length > 0) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    });
  }, []);

  const toggleFavorite = async () => {
    if (userCookie?.role === "admin" || userCookie?.role === "user") {
      if (!isFavorite) {
        console.log("add");

        const { data: user } = await axios.get(
          `http://localhost:3000/users/${userCookie?.id}`
        );
        const { data: bookk } = await axios.get(
          `http://localhost:3000/books/${book.id}`
        );
        const newUser = {
          ...user,
          wishlist: [...user.wishlist, bookk],
        };
        await axios.patch(
          `http://localhost:3000/users/${newUser?.id}`,
          newUser
        );
        console.log(newUser);
      } else {
        const { data: user } = await axios.get(
          `http://localhost:3000/users/${userCookie.id}`
        );
        const newWishlist = user.wishlist.filter((item) => item.id != book.id);
        console.log(newWishlist);
        const newUser = {
          ...user,
          wishlist: newWishlist,
        };
        await axios.patch(`http://localhost:3000/users/${user?.id}`, newUser);

        console.log("delete");
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
