import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

function SelectForm({
  value,
  item1,
  item2,
  handleChange,
}: {
  value: string;
  item1: string;
  item2: string;
  handleChange: (e: SelectChangeEvent<string>) => void;
}) {
  const inputStyle = {
    backgroundColor: "white",
    "& .MuiOutlinedInput-root": {
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
  };

  return (
    <FormControl fullWidth>
      <Typography sx={{ mt: "1rem", color: "white" }}>ژانر</Typography>
      <Select
        labelId="genre-select-label"
        id="genre-select"
        value={value}
        onChange={handleChange}
        sx={{ ...inputStyle, mb: 2 }}
      >
        <MenuItem value={item1}>{item1}</MenuItem>
        <MenuItem value={item2}>{item2}</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectForm;
