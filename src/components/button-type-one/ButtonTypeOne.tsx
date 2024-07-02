"use client";
import { Button, Typography } from "@mui/material";
import React from "react";

type TypeProps = {
  text: string;
  handleClick?: () => void;
};

const ButtonTypeOne = ({ text, handleClick }: TypeProps) => {
  return (
    <Button
      fullWidth
      sx={{ bgcolor: "secondary.light", mt: 1 }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default ButtonTypeOne;
