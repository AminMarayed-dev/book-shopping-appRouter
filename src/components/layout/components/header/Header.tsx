"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Image from "next/image";
import { Divider, Drawer } from "@mui/material";
import DrawerList from "@/app/(rootLayout)/components/DrawerList";
import SearchBox from "../searchBox/searchBox";
import { useRouter } from "next/navigation";
import SwipeableTemporaryDrawer from "../draw-list-basket/drawListBasket";
import { routes } from "@/constant/routes";

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
            onClick={toggleDrawerLeft(true)}
          >
            <LocalMallIcon />
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
