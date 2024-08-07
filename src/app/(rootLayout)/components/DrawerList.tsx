"use client";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { getCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

function DrawerList({ toggleDrawer }: any) {
  const role: any = getCookie("role");
  const [roleText, setRoleText] = useState("");

  useEffect(() => {
    setRoleText(role);
  }, []);

  const menuList = [
    {
      text: "صفحه اصلی",
      icon: <HomeIcon />,
      url: "",
    },
    {
      text: "درباره ما",
      icon: <InfoIcon />,
      url: "about-us",
    },
    {
      text: "تماس با ما",
      icon: <PhoneInTalkIcon />,
      url: "",
    },
    {
      text: "علاقه مندی",
      icon: <FavoriteBorderIcon />,
      url: "",
    },
    {
      text:
        role === "admin"
          ? "پنل ادمین"
          : role === "user"
          ? "پنل کاربر"
          : "ورود/ثبت نام",

      icon: <PersonIcon />,

      url:
        role === "admin"
          ? "dashboard"
          : role === "user"
          ? "profile"
          : "register",
    },
    {
      text: role === "admin" || role === "user" ? "خروج" : "",
      icon: role === "admin" || role === "user" ? <LogoutIcon /> : "",
      url: role === "admin" || role === "user" ? "register" : "",
    },
  ];

  const categoryList = [
    {
      category: "رده سنی نوجوانان",
      categoryEn: "teenager",
      items: [
        { text: "فانتزی", url: "fantasy" },
        { text: "وحشت", url: "horror" },
      ],
    },
    {
      category: "رده سنی جوان",
      categoryEn: "young",
      items: [
        { text: "فانتزی", url: "fantasy" },
        { text: "وحشت", url: "horror" },
      ],
    },
    {
      category: "رده سنی بزرگسال",
      categoryEn: "adult",
      items: [
        { text: "فانتزی", url: "fantasy" },
        { text: "وحشت", url: "horror" },
      ],
    },
  ];

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleListItemClick = () => {
    toggleDrawer(false);
  };

  return (
    <Box sx={{ width: 250 }} role="presentation">
      <Tabs
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="منو" />
        <Tab label="دسته بندی" />
      </Tabs>
      {value === 0 && (
        <Box>
          <List>
            {menuList.map((menu, index) => (
              <ListItem
                key={menu.text}
                disablePadding
                onClick={handleListItemClick}
              >
                <Link href={`/${menu.url}`}>
                  <ListItemButton
                    onClick={() => {
                      menu.text === "خروج"
                        ? (handleListItemClick(),
                          setCookie("role", ""),
                          setRoleText(""))
                        : "";
                    }}
                  >
                    <ListItemIcon>{menu.icon}</ListItemIcon>
                    <ListItemText primary={menu.text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      {value === 1 && (
        <Box>
          {categoryList.map((category, index) => (
            <Accordion key={index} elevation={0}>
              <AccordionSummary expandIcon={<ArrowBackIosNewOutlinedIcon />}>
                <Typography>{category.category}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0 }}>
                <List>
                  {category.items.map((item, index) => (
                    <ListItem
                      key={item.text}
                      disablePadding
                      onClick={handleListItemClick}
                    >
                      <Link
                        href={`/product-category/${category.categoryEn}/${category.categoryEn}-${item.url}`}
                      >
                        <ListItemButton>
                          <ListItemText primary={item.text} />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default DrawerList;
