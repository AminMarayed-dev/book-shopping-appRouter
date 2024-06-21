import { TextField, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";

interface TextFieldFormProps {
  textFa: string;
  name: string;
  value: string | number;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldForm: React.FC<TextFieldFormProps> = ({
  textFa,
  name,
  value,
  handleInputChange
}) => {
  return (
    <div style={{ width: '100%' }}>
      <Typography color="white">{textFa}</Typography>
      <TextField
        name={name}
        value={value}
        onChange={handleInputChange}
        fullWidth
        sx={{
          backgroundColor: "white",
          mb: "1rem",
          "& .MuiOutlinedInput-root": {
            height: '56px', 
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiInputBase-input": {
            color: "secondary.dark",
          },
        }}
      />
    </div>
  );
};

export default TextFieldForm;
