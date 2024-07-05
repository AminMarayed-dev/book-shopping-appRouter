"use client";
import { Button, ButtonProps } from "@mui/material";

const ButtonTypeOne = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      sx={{
        bgcolor: "secondary.light",
        mt: 1,
        "&:hover": {
          color: "white",
          backgroundColor: "secondary.light",
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonTypeOne;
