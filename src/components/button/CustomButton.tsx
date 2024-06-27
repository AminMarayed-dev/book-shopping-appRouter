"use client";
import { Button, Typography } from "@mui/material";
import React from "react";

type TypeProps = {
  text: string;
  handleClick: () => void;
  sx?: object; 
  disabled? :any
};

const CustomButton = ({ text, handleClick , sx , disabled }: TypeProps) => {
  return (
    <Button   onClick={handleClick} sx={sx} disabled = {false}>
      {text}
    </Button>
  );
};

export default CustomButton;
