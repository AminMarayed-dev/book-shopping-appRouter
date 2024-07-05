"use client";
import DrawerList from "@/app/(rootLayout)/components/DrawerList";
import { routes } from "@/constant/routes";
import { getLocalStorage } from "@/utils/localStorage";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { Divider, Drawer } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SwipeableTemporaryDrawer from "../draw-list-basket/drawListBasket";
import SearchBox from "../searchBox/searchBox";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  justifyContent: "center",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  "@media all": {
    minHeight: 60,
  },
}));

function Header() {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [lengthBookBasket, setLengthBookBasket] = useState(0);
  const basketBooks = getLocalStorage("basket");

  useEffect(() => {
    setLengthBookBasket(basketBooks.length);
  }, [basketBooks]);

  const router = useRouter();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const toggleDrawerLeft =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setDrawerOpen(open);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" elevation={0}>
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              ml: 3,
              mt: 0.5,
            }}
          >
            <Image
              onClick={() => router.push(routes.home)}
              src="https://vidapub.com/wp-content/uploads/2021/05/logo-6.png"
              alt="Logo"
              width={140}
              height={140}
            />
          </Box>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            sx={{ ml: 2 }}
          >
            <PersonIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            sx={{ position: "relative" }}
            onClick={toggleDrawerLeft(true)}
          >
            <LocalMallIcon />
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
                top: "5px",
                color: "white",
                right: "0px",
              }}
            >
              {lengthBookBasket}
            </Box>
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <DrawerList toggleDrawer={toggleDrawer} />
          </Drawer>
        </StyledToolbar>
      </AppBar>
      <Divider />
      <SearchBox />
      <Divider />
      <SwipeableTemporaryDrawer
        open={drawerOpen}
        toggleDrawer={toggleDrawerLeft}
      />
    </Box>
  );
}

export default Header;
