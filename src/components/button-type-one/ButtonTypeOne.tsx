"use client";
import { Button } from "@mui/material";
import React from "react";

type TypeProps = {
  text: string;
  handleClick?: () => void;
};

const ButtonTypeOne = ({ text, handleClick }: TypeProps) => {
  return (
    <Button
      fullWidth
      sx={{
        bgcolor: "secondary.light",
        mt: 1,
        "&:hover": {
          color: "white",
          backgroundColor: "secondary.light",
        },
      }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default ButtonTypeOne;
