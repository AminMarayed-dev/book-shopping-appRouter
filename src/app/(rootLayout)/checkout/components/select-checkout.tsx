"use client";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";

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

function SelectCheckOut({
  placeholder,
  menuList,
  label,
}: {
  placeholder: any;
  menuList: any;
  label: any;
}) {
  return (
    <div>
      <FormControl sx={{ width: "100%", mt: 3 }}>
        <Typography component="h5" variant="h5" sx={{ mb: 1 }}>
          {label}
        </Typography>
        <Select
          fullWidth
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
            color: "primary",
          }}
        >
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
          {menuList.map((menu: any) => (
            <MenuItem key={menu} value={menu}>
              {menu}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectCheckOut;
