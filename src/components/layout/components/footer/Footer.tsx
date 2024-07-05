"use client";

import { routes } from "@/constant/routes";
import { getLocalStorage } from "@/utils/localStorage";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const firstList = [
  {
    icon: <LocationOnIcon />,
    text: "آدرس: تهران، انقلاب، خیابان 12 فروردین، پلاک 300، واحد 8",
  },
  { icon: <EmailIcon />, text: "کد پستی: 1314665541" },
  { icon: <PhoneEnabledIcon />, text: "تلفن: 02166973224" },
  { icon: <PhoneIphoneIcon />, text: "شماره همراه: 09109099953 " },
  { icon: <AccessTimeIcon />, text: "ساعات کاری: شنبه تا چهارشنبه 10 الی 17" },
];

const secondList = [
  { icon: <TelegramIcon />, text: "تلگرام: Vida_Pub@" },
  { icon: <InstagramIcon />, text: "اینستاگرام: Vida_Pub" },
  { icon: <EmailIcon />, text: "ایمیل: info@vidapub.com  " },
];

function Footer() {
  const basketBooks = getLocalStorage("basket");

  const [lengthBookBasket, setLengthBookBasket] = useState(0);
  useEffect(() => {
    setLengthBookBasket(basketBooks.length);
  }, [basketBooks]);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "primary.dark",
          mx: "auto",
          mt: 4,
          p: 1,
          mb: 6,
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ mb: 2, ml: 2 }}
            color="secondary"
          >
            ارتباط با ما
          </Typography>
          <List>
            {firstList.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ mb: 2, ml: 2 }}
            color="secondary"
          >
            با ما همراه باشید
          </Typography>
          <List>
            {secondList.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ p: 2 }}
        >
          {" ساخته شده توسط راشد و داداچاشCopyright ©"}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          backgroundColor: "white",
          boxShadow: "0 -1px 3px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
          py: 1,
        }}
      >
        <Grid container justifyContent="space-evenly">
          <Grid item>
            <Link href={routes.home} passHref>
              <Box textAlign="center">
                <StoreOutlinedIcon sx={{ color: "black" }} />
                <Typography variant="h5">فروشگاه</Typography>
              </Box>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/search" passHref>
              <Box textAlign="center">
                <FilterAltOutlinedIcon sx={{ color: "black" }} />
                <Typography variant="h5">فیلتر</Typography>
              </Box>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/favorites" passHref>
              <Box textAlign="center">
                <FavoriteBorderIcon sx={{ color: "black" }} />
                <Typography variant="h5">علاقه مندی</Typography>
              </Box>
            </Link>
          </Grid>
          <Grid item sx={{ position: "relative" }}>
            <Link href="/cart" passHref>
              <Box textAlign="center">
                {" "}
                <ShoppingBagOutlinedIcon sx={{ color: "black" }} />{" "}
                <Box
                  sx={{
                    bgcolor: "secondary.light",
                    borderRadius: 10,
                    width: 20,
                    height: 20,
                    fontSize: "10px",
                    // textAlign: "center",
                    // my: "auto",
                    // display: "flex",
                    position: "absolute",
                    top: "-5px",
                    color: "white",
                    right: "0px",
                  }}
                >
                  {lengthBookBasket}
                </Box>
                <Typography variant="h5">سبد خرید</Typography>
              </Box>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/profile" passHref>
              <Box textAlign="center">
                <AccountCircleIcon sx={{ color: "black" }} />
                <Typography variant="h5">پروفایل</Typography>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Footer;
