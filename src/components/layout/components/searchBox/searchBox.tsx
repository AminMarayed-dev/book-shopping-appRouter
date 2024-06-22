import {
  Autocomplete,
  Avatar,
  Box,
  InputAdornment,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, {  useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { useGetBookSearch } from "../../hook";
import { BooksEntity } from "@/type";

function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  const { data: listBook } = useGetBookSearch(searchValue);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSearchValue(e.target.value);
      setOpen(true);
    }, 2000);
  };

  const defaultProps = {
    options: listBook,
    getOptionLabel: (option: BooksEntity) => option.name,
  };

  const handleOptionSelect = (event: React.ChangeEvent<{}>, value: BooksEntity | null) => {
    setOpen(false);
    setSearchValue("");
  };

  return (
    <Box sx={{ p: 1 }}>
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={handleOptionSelect}
        renderOption={(props, option) => (
          <ListItem {...props} key={option.id}>
            <Link href={`/product/${option.id}`}>
              <ListItemAvatar>
                <Avatar src={option.imageUrl[0]} alt={option.name} />
              </ListItemAvatar>
              <ListItemText primary={option.name} secondary={option.writer} />
            </Link>
          </ListItem>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="جستجوی محصولات"
            variant="outlined"
            name="search"
            id="search"
            value={searchValue}
            onChange={handleSearch}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
        noOptionsText={
          searchValue === ""
            ? "لطفاً نام کتاب را وارد کنید"
            : `کتابی با نام "${searchValue}" یافت نشد`
        }
      />
    </Box>
  );
}

export default SearchBox;
