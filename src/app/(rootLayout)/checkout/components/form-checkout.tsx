"use client";

import { Box, Typography } from "@mui/material";
import { getCookie } from "cookies-next";
import { cities } from "../form-data/FormData";
import { useGetUserById } from "../hook/useGetUserById";
import InputCheckOut from "./input-checkout";
import SelectCheckOut from "./select-checkout";

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
        <InputCheckOut
          label="نام"
          disabled={true}
          value={data?.name.split(" ")[0]}
        />
        <InputCheckOut
          label="نام خانوادگی"
          disabled={true}
          value={data?.name.split(" ")[1]}
        />
        <InputCheckOut
          label="شماره موبایل"
          disabled={true}
          value={data?.mobile}
        />
        <InputCheckOut label="ایمیل" disabled={true} value={data?.email} />
        <InputCheckOut label="کشور/منطقه" disabled={true} value="ایران" />
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
        <InputCheckOut label="آدرس دقیق پستی" />
        <InputCheckOut label="کد پستی" />
      </Box>
    </Box>
  );
}

export default FormCheckout;
