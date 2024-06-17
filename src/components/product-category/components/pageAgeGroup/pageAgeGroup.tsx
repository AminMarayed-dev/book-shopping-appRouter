"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import OneCard from "../../../oneCard/oneCard";
import { useGetBooksByAgeGroup } from "../../hook";

function PageAgeGroup({
  ageGroup,
  ageGroupEn,
}: {
  ageGroup: string;
  ageGroupEn: string;
}) {
  const { data } = useGetBooksByAgeGroup(ageGroup);

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 1, mt: 2, mx: 2 }}>
        <Typography
          sx={{ fontSize: "13.3px", color: "gray" }}
          onClick={() => (location.href = "/")}
        >
          خانه
        </Typography>
        <Typography sx={{ fontSize: "13.3px", color: "gray" }}>/</Typography>
        <Typography
          sx={{ fontSize: "13.3px", textWrap: "nowrap", fontWeight: "bold" }}
          onClick={() => (location.href = `/product-category/${ageGroupEn}`)}
        >
          {" "}
          {`  رده سنی ${ageGroup}`}
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />

      {/* cards */}
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {data?.map((book, index) => (
          <OneCard index={index} book={book} />
        ))}
      </Box>

      {/* Description */}
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

      <Typography
        sx={{
          m: "auto",
          textAlign: "center",
          fontWeight: "bold",
          mt: 4,
          mb: 2,
        }}
      >{`کتاب های ${ageGroup} انتشارات ویدا`}</Typography>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: 3, m: 3 }}
      >
        <Card
          sx={{ boxShadow: 4 }}
          onClick={() =>
            (location.href = `/product-category/${ageGroupEn}/${ageGroupEn}-horror`)
          }
        >
          <CardContent>
            <CardMedia
              component="img"
              height="80px"
              width="80px"
              image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5ro1_jqPLIabWZlGwYA63gv96VdXp6ebuWumd_EZhzJMhb6yH"
              alt="vahshat"
            />
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "16px",
                py: 2,
              }}
            >
              وحشت
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{ boxShadow: 4 }}
          onClick={() =>
            (location.href = `/product-category/${ageGroupEn}/${ageGroupEn}-fantasy`)
          }
        >
          <CardContent>
            {" "}
            <CardMedia
              component="img"
              height="80px"
              width="80px"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa87oVxNlYLwQganon9WAkLtqY6CqaNlfxFaDO-WK3-oPgpFds"
              alt="vahshat"
            />
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "16px",
                py: 2,
              }}
            >
              فانتزی
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ boxShadow: 4 }}>
          <CardContent>
            {" "}
            <CardMedia
              component="img"
              height="80px"
              width="80px"
              image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmuUM9fntQuPzLKKRAHpk15Lg6hoyJqcpgkVPK60z-PyeyF62C"
              alt="love"
            />
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "16px",
                py: 2,
              }}
            >
              عاشقانه
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default PageAgeGroup;
