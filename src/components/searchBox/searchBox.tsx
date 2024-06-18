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
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { api } from "@/api/config.api";
import { TypeBook } from "@/type";
import Link from "next/link";

function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  const [listBook, setListBooks] = useState([]);

  async function GetBooksSearch(searchValue: string) {
    if (searchValue.trim() === "") {
      setListBooks([]);
      return;
    }
    try {
      const res = await api.get(`/books?q=${searchValue}`);
      setListBooks(res.data);
    } catch (error) {
      setListBooks([]);
    }
  }

  useEffect(() => {
    GetBooksSearch(searchValue);
  }, [searchValue]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSearchValue(e.target.value);
    }, 2000);
  };

  const defaultProps = {
    options: listBook,
    getOptionLabel: (option: TypeBook) => option.name,
  };

  return (
      <Box sx={{ p: 1 }}>
        <Autocomplete
          {...defaultProps}
          id="disable-close-on-select"
          disableCloseOnSelect
          renderOption={(props, option) => (
            <Link href={`/product/${option.id}`}>
    
              <ListItem {...props} key={option.id}>
                <ListItemAvatar>
                  <Avatar src={option.imageUrl[0]} alt={option.name} />
                </ListItemAvatar>
                <ListItemText primary={option.name} secondary={option.writer} />
              </ListItem>
            </Link>
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
              ? `لطفاً نام کتاب را وارد کنید`
              : `کتابی با نام "${searchValue}" یافت نشد`
          }
        />
      </Box>
  );
}

export default SearchBox;
