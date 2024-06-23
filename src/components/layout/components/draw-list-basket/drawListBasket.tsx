import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import Image from "next/image";
import logo from "../../../../../public/tuba.jpg"
import CustomButton from "@/components/button/CustomButton";
interface SwipeableTemporaryDrawerProps {
  open: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const SwipeableTemporaryDrawer: React.FC<SwipeableTemporaryDrawerProps> = ({
  open,
  toggleDrawer,
}) => {
    const [number, setNumber] = useState(0);


    function addTobasket() {}
    const subtractFromNumber = () => {
        setNumber((prevNumber) => prevNumber - 1);
      };
    
      const addToNumber = () => {
        setNumber((prevNumber) => prevNumber + 1);
      };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{display : "flex" , justifyContent:"space-between" , alignContent : "center"}}>
        {" "}
        <Typography variant={"h4"}>سبد خرید</Typography>
        <Typography>بستن</Typography>

      </Box>{" "}
      <Divider />

<Card sx={{display : "flex"}}>
<CardMedia>
<Image alt="icon" src={logo}/>
</CardMedia>
<CardContent>
<Typography>کتاب وحشت</Typography>
<Box
        sx={{
          display: "flex",
          gap: "10px",
          my: "10px",
          height: "30px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid gray",
            borderRadius: "4px",
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              width: "40px",
              borderRight: "1px solid gray",
              padding: "8px",
              justifyContent: "center",
              display: "flex",
              "&:hover": {
                backgroundColor: "secondary.light",
                color: "white",
              },
            }}
          >
            <CustomButton
              text="-"
              handleClick={subtractFromNumber}
              sx={{
                fontSize: "13px",
                color: "gray",
                "&:hover": { color: "white" },
              }}
            />
          </Box>

          <Box
            sx={{
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                width: "20px",
                fontSize: "14px",
                color: "gray",
                textAlign: "center",
                m: "auto",
              }}
            >
              {number}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "40px",
              borderLeft: "1px solid gray",
              display: "flex",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "secondary.light",
                color: "white",
              },
            }}
          >
            <CustomButton
              text="+"
              handleClick={addToNumber}
              sx={{
                fontSize: "13px",
                color: "gray",
                width: "100%",
                display: "flex",
                "&:hover": { color: "white" },
              }}
            />
          </Box>
        </Box>

        
      </Box>
<Typography></Typography>
</CardContent>
<IconButton>
    <Close/>
</IconButton>


</Card>




    </Box>
  );

  return (
    <SwipeableDrawer
      anchor={"left"}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {list()}
    </SwipeableDrawer>
  );
};

export default SwipeableTemporaryDrawer;
