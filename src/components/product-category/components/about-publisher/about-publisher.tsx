import { Box, Typography } from "@mui/material";
import React from "react";

function AboutPublisher() {
  return (
    <Box sx={{ px: 2 }}>
      <Box
        sx={{
          fontSize: "18px",
          justifyContent: "space-between",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <img
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*AkQo9Uu8xHeehPGkRrUJOg.jpeg"
          alt=""
        />
        <Box>
          {" "}
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "24px",
              px: 2,
              pt: 6,
              pb: 2,
              color: "secondary.light",
              textAlign: "center",
            }}
          >
            درباره انتشارات ویدا{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "gray",
              textAlign: "justify",
              px: 2,
            }}
          >
            انتشارات ویدا از سال 1376 فعالیت خود را در زمینه ادبیات کودک و
            نوجوان آغاز کرده است و تا کنون با چاپ بیش از 300 اثر سعی داشته تا
            سهمی هر چند کوچک در گسترش فرهنگ کتاب و کتابخوانی در میان کودکان و
            نوجوانان این مرز و بوم داشته باشد. عمده‌ی آثار نشر ویدا در ژانرهای
            فانتزی، علمی تخیلی، وحشت، معمایی و کارآگاهی تقسیم می‌شود. اکنون با
            گذشت بیش از 24 سال از فعالیت انتشارات ویدا امیدواریم توانسته باشیم
            رضایت مخاطبان عزیز را جلب کرده باشیم.
          </Typography>{" "}
        </Box>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          mt: 2,
          display: "flex",
        }}
      >
        <img
          src="https://vidapub.com/wp-content/uploads/2022/01/vida-publishing-logo-289x300.jpg"
          alt=""
        />
      </Box>
    </Box>
  );
}

export default AboutPublisher;
