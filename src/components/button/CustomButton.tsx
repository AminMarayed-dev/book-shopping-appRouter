"use client";
import { Button, Typography } from "@mui/material";
import React from "react";

type TypeProps = {
  text: string;
  handleClick: () => void;
  sx?: object; 

};

const CustomButton = ({ text, handleClick , sx }: TypeProps) => {
  return (
    <Button   onClick={handleClick} sx={sx}>
      {text}
    </Button>
  );
};

export default CustomButton;
