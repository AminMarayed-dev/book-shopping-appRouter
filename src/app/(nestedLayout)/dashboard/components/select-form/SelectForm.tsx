import { FormControl, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'

function SelectForm({value , handleChange} : {value :string, handleChange : (e : React.ChangeEvent<HTMLInputElement>)=>void}) {
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
    <Typography sx={{ mt: "1rem", color: "white" }}>
      ژانر
    </Typography>
    <Select
      labelId="genre-select-label"
      id="genre-select"
      value={value}
      onChange={handleChange}
      sx={{...inputStyle , mb:2}}
    >
      <MenuItem value={"وحشت"}>وحشت</MenuItem>
      <MenuItem value={"فانتزی"}>فانتزی</MenuItem>
    </Select>
  </FormControl>
)
}

export default SelectForm