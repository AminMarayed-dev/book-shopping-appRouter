"use client";

import {
  Tabs,
  Tab,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import Link from "next/link";

function DrawerList({ toggleDrawer }: any) {
  const role = getLocalStorage("role");
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
      url: "about",
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
      url: role === "admin" || role === "user" ? "/" : "",
    },
  ];

  const categoryList = [
    {
      category: "رده سنی نوجوانان",
      items: ["فانتزی", "وحشت"],
    },
    {
      category: "رده سنی جوان",
      items: ["فانتزی", "عاشقانه", "علمی تخیلی"],
    },
    {
      category: "رده سنی بزرگسال",
      items: ["داستانی", "روانشناسی"],
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
                        ? (setLocalStorage("role", ""),
                          toggleDrawer(true),
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
        // <Box>
        //   <Accordion elevation={0}>
        //     <AccordionSummary
        //       expandIcon={<ArrowBackIosNewOutlinedIcon />}
        //       aria-controls="panel1-content"
        //       id="panel1-header"
        //     >
        //       <List>
        //         {["All mail", "Trash", "Spam"].map((text, index) => (
        //           <ListItem
        //             key={text}
        //             disablePadding
        //             onClick={handleListItemClick}
        //           >
        //             <ListItemButton>
        //               <ListItemText primary={text} />
        //             </ListItemButton>
        //           </ListItem>
        //         ))}
        //       </List>
        //     </AccordionSummary>
        //   </Accordion>
        // </Box>
        <Box>
          {categoryList.map((category, index) => (
            <Accordion key={index} elevation={0}>
              <AccordionSummary expandIcon={<ArrowBackIosNewOutlinedIcon />}>
                <Typography>{category.category}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0 }}>
                <List>
                  {category.items.map((text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      onClick={handleListItemClick}
                    >
                      <ListItemButton>
                        <ListItemText primary={text} />
                      </ListItemButton>
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
