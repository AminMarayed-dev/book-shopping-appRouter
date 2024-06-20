import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import amin from "../../../../public/amin.jpg";
import rashed from "../../../../public/rashed.jpg";
import ghayoumi from "../../../../public/ghayoumi.jpg";
import tuba from "../../../../public/tuba.jpg";

export default function AboutUs() {
  return (
    <>
      <Typography variant="h4" sx={{ py: "1rem", textAlign: "center" }}>
        تیم توسعه دهنده :
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Box
            sx={{
              p: "1rem",
              width: "160px",
              height: "280px",
              textAlign: "center",
            }}
          >
            <Image
              src={amin}
              alt="amin"
              width={130}
              height={130}
              style={{ borderRadius: "50%" }}
            />
            <Typography variant="h6">امین</Typography>
            <Typography variant="body2">سرگروه</Typography>
            <Typography variant="body2">حرفه‌ای</Typography>
            <Typography variant="body2">حساس روی layout</Typography>
            <Typography variant="body2">تشنه‌ی قدرت</Typography>
            <Typography variant="body2">گنگ</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              p: "1rem",
              width: "160px",
              height: "280px",
              textAlign: "center",
            }}
          >
            <Image
              src={rashed}
              alt="rashed"
              width={130}
              height={130}
              style={{ borderRadius: "50%" }}
            />
            <Typography variant="h6">راشد</Typography>
            <Typography variant="body2">استقلالی دو آتیشه</Typography>
            <Typography variant="body2">مالک وبسایت </Typography>
            <Typography variant="body2">عاشق</Typography>
            <Typography variant="body2">خدا نکشتت</Typography>
            <Typography variant="body2">فرهنگی</Typography>
          </Box>
        </Grid> 
        <Grid item>
          <Box
            sx={{
              p: "1rem",
              width: "160px",
              height: "280px",
              textAlign: "center",
            }}
          >
            <Image
              src={tuba}
              alt="tuba"
              width={130}
              height={130}
              style={{ borderRadius: "50%" }}
            />
            <Typography variant="h6">طوبی</Typography>
            <Typography variant="body2">مورد اعتماد</Typography>
            <Typography variant="body2">کاربلد</Typography>
            <Typography variant="body2">با سلیقه </Typography>
            <Typography variant="body2">خوش اخلاق</Typography>
            <Typography variant="body2">جدی در مواقع نیاز</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              p: "1rem",
              width: "160px",
              height: "280px",
              textAlign: "center",
            }}
          >
            <Image
              src={ghayoumi}
              alt="ghayoumi"
              width={130}
              height={130}
              style={{ borderRadius: "50%" }}
            />
            <Typography variant="h6">قیومی</Typography>
            <Typography variant="body2">null</Typography>
            <Typography variant="body2">null</Typography>
            <Typography variant="body2">null</Typography>
            <Typography variant="body2">null</Typography>
            <Typography variant="body2">null</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
