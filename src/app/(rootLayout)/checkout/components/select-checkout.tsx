"use client"
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function SelectCheckOut({ placeholder, menuList, label }) {
  return (
    <div>
      <FormControl sx={{width:"100%", mt: 3 }}>
        <Typography component="h5" variant="h5" sx={{mb:1}}>{label}</Typography>
        <Select
        fullWidth
        //   value={personName}
        //   onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "darkgray",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
            color:'primary'
          }}
        >
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
          {menuList.map((menu) => (
            <MenuItem
              key={menu}
              value={menu}
            >
              {menu}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}


export default SelectCheckOut;
