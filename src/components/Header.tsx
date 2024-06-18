"use client";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Image from "next/image";
import {
  Autocomplete,
  Divider,
  Drawer,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import DrawerList from "./home/DrawerList";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { api } from "../api/config.api";
import SearchBox from "./layout/components/searchBox/searchBox";

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

 



  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
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
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <DrawerList toggleDrawer={toggleDrawer} />
          </Drawer>
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
          >
            <LocalMallIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>
      <Divider />
     
      <SearchBox/>
      <Divider />
    </Box>
  );
}

export default Header;
