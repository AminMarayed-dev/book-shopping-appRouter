"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import SelectCheckOut from "./select-checkout";
import { cities } from "../form-data/FormData";
import InputCheckOut from "./input-checkout";
import { useGetUserById } from "../hook/useGetUserById";
import { getCookie } from "cookies-next";
import { Input } from "postcss";

// const labels = [
//     { text: "نام", disabled: false, value: "" },
//     { text: "نام خانوادگی", disabled: false, value: "" },
//     { text: "کشور/منطقه", disabled: true, value: "ایران" },
//     { text: "آدرس دقیق پستی", disabled: false, value: "" },
//     { text: "کد پستی", disabled: false, value: "" },
//     { text: "شماره موبایل", disabled: false, value: "" },
//     { text: "ایمیل (اختیاری)", disabled: false, value: "" },
//   ];
// const threeLabelsFirst = labels.slice(0, 3);
// const anotherLabels = labels.slice(3);

function FormCheckout() {
  const id = getCookie("id");
  const { data } = useGetUserById(String(id));
  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h4">
        جزئیات صورت حساب
      </Typography>
      <Box
        component="form"
        sx={{
          mt: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <InputCheckOut label="نام"  disabled={true} value={data?.name.split(" ")[0]} />
        <InputCheckOut label="نام خانوادگی" disabled={true} value={data?.name.split(" ")[1]} />
        <InputCheckOut label="شماره موبایل" disabled={true} value={data?.mobile} />
        <InputCheckOut label="ایمیل" disabled={true} value={data?.email} />
        <InputCheckOut label="کشور/منطقه" disabled={true} value="ایران"  />
        <SelectCheckOut
          label="استان"
          placeholder="لطفا استان مورد نظر را انتخاب کنید"
          menuList={cities}
        />
        <SelectCheckOut
          label="شهر"
          placeholder="لطفا شهر مورد نظر را انتخاب کنید"
          menuList={cities}
        />

        <InputCheckOut label="آدرس دقیق پستی"/>
        <InputCheckOut label="کد پستی"/>
      </Box>
    </Box>
  );
}

export default FormCheckout;
