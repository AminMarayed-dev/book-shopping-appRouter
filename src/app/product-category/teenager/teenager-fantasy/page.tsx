"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  ImageList,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function page() {
  const [books, setBooks] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };
  async function GetBook() {
    const res = await axios.get(
      "http://localhost:3000/books?ageGroup=نوجوان&genre=فانتزی"
    );
    console.log(res.data);
    return res.data;
  }

  useEffect(() => {
    GetBook().then((data) => {
      console.log(data);
      setBooks(data);
    });
  }, []);

  return (
    <Box>
      <Box sx={{ display: "flex" , gap:1 , mt:2 , mx:2}}>
        <Typography
          sx={{ fontSize: "13.3px" ,color:"gray" }}
          onClick={() => (location.href = "/")}
        >
          خانه
        </Typography>
        <Typography sx={{ fontSize: "13.3px" ,color:"gray"}}> / </Typography>

        <Typography
          sx={{ fontSize: "13.3px", textWrap: "nowrap",color:"gray" }}
          onClick={() => (location.href = "/product-category/teenager")}
        >
          رده سنی نوجوان
        </Typography>
        <Typography sx={{ fontSize: "13.3px" ,color:"gray"}}>/</Typography>
        <Typography
          sx={{ fontSize: "13.3px", textWrap: "nowrap", fontWeight: "bold" }}
        >
          {" "}
          ژانر فانتزی
        </Typography>
      </Box>
<Divider sx={{my:2}}/>

      {/* cards */}
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {books.map((book, index) => (
          <Card
            key={index}
            sx={{
              flex: "0 0 45%",
              margin: "10px",
              boxShadow: "none",
              textAlign: "center",
            }}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={() => handleCardHover(-1)}
          >
            <CardMedia
              component="img"
              height="80px"
              width="80px"
              image={
                hoveredIndex === index ? book.imageUrl[1] : book.imageUrl[0]
              }
              alt={book.name}
              sx={{
                transition: "transform 0.3s", 
                transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)", 
              }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontSize: "14px" }}>
                {book.name}
              </Typography>

              <Typography
                variant="h6"
                color="primary"
                sx={{ fontSize: "13px" }}
              >
                {book.price} ریال
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Description */}
      <Box sx={{ px: 2 }}>
        <Typography
          sx={{ fontSize: "36px", color: "blue", textAlign: "center", py: 6 }}
        >
          کتاب داستان فانتزی نوجوان انتشارات ویدا
        </Typography>

        <Box
          sx={{
            fontSize: "18px",
            justifyContent: "space-between",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <img
            src="https://vidapub.com/wp-content/uploads/2022/01/teen-fantasy-story-book-400x400.jpg"
            alt=""
          />
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                color: "gray",
                textAlign: "justify",
                px: 2,
                pt: 2,
              }}
            >
              کتاب های داستان فانتزی نوجوانان امروزه بین نوجوانان طرف داران
              زیادی پیدا کرده، چرا که ژانر فانتزی ژانر بسیار محبوبی بین نوجوانان
              است و تقریباً بیشتر نوجوانان به این ژانر علاقه دارند. حال، سوال
              پیش می‌آید که به چه ژانری فانتزی می گویند؟ کتاب های فانتزی معمولاً
              با ویژگی های گوناگون و متفاوتی تعریف می شوند. فانتزی به ژانری می
              گویند که معمولاً تخیلی است و در دنیایی مشخص و خارج از دنیای واقعی
              جریان دارند و عموماً از جادو و پدیده های ماورای طبیعی استفاده می
              شود مثل مجموعه کتاب های تاریخ اعماق زمین . این کتاب ها به منظور
              دور کردن افکار از دنیای واقعی و فاصله گرفتن از روزمرگی و دنیای
              عادی است. البته بسیاری از کتاب های فانتزی بدون هیچ کدام از این
              ویژگی ها بسیار موفق بوده‌اند. همین ویژگی تخیلی بودن و متفاوت بودن
              از ژانر‌های دیگر باعث شده محبوبیت این کتاب های داستان فانتزی
              نوجوانان بسیار زیاد باشد.
            </Typography>{" "}
            <Box sx={{mt:3}}>
            <img
              src="https://vidapub.com/wp-content/uploads/2022/01/teen-fantasy-story-vida-publications-buy-400x400.jpg"
              alt=""
            />
          </Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "24px", px: 2, py: 2 }}
            >
              بهترین کتاب های فانتزی
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "gray",
                textAlign: "justify",
                px: 2,
                pb: 2,
              }}
            >
              همان طور که گفته شد، فانتزی ژانری ادبی است که در ایران تقریباً از
              سال ۱۳۰۰ شمسی تحت تأثیر ترجمه های کتاب های غربی شکل گرفت و در دهه
              های اخیر با استقبال بیشتری نیز از سمت کودکان و نوجوانان قرار گرفته
              است. ژانر فانتزی همیشه جذاب بوده، چه در فیلم ها و چه در کتاب های
              گوناگون. در ادبیات بسیاری از کتاب های داستان فانتزی نوجوانان یکی
              از بهترین کتاب های فانتزی شناخته شده و بعد ها با الهام از این کتاب
              ها فیلم های سینمایی و سریال های بسیاری ساخته شده که یکی از معروف
              ترین آن ها مجموعه «ارباب حلقه ها» یا «هری پاتر» است. این کتاب ها
              مجموعه های بسیار معروفی در ژانر فانتزی هستند که کمتر کسی تاکنون
              اسم آن ها را نشنیده است. اگر شما هم از آن دسته افرادی هستید که به
              داستان های فانتزی نوجوانان علاقه مند هستید، توصیه می شود حتماً
              کتاب هایی در ژانر تخیلی نیز امتحان کنید، مانند مجموعه کتاب های
              مدرسه عهد بوق چرا که ژانر این کتاب ها به ژانر فانتزی بسیار نزدیک
              است.{" "}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            justifyContent: "space-between",
            flexDirection: "column",
            display: "flex",
          }}
        >
         
          <Box>
            {" "}
            <Box
          sx={{
            justifyContent: "space-between",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <img
            src="https://vidapub.com/wp-content/uploads/2022/01/teen-fantasy-story-vida-publications-400x400.jpg"
            alt=""
          />
       
        </Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "24px", px: 2, py: 2 }}
            >
              کتاب های فانتزی برای نوجوانان{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "gray",
                textAlign: "justify",
                px: 2,
                pb: 2,
              }}
            >
             اگر از دوست داران کتاب داستان فانتزی نوجوانان باشید، احتمالاً می دانید کتاب های بسیاری در این زمینه نوشته شده که بسیاری از آن ها بسیار محبوب تر است و تقریباً همه آن ها را می شناسند.

اگر به دنبال راهی برای خرید کتاب فانتزی هستید، اما وقت کافی برای انتخاب بهترین کتاب از میان انبوه کتاب های فانتزی را ندارید، نگران نباشید، چرا که بسیاری از سایت ها بخشی از کتاب را به صورت خلاصه می نویسند و شما می توانید به راحتی پس از خواندن خلاصه داستان تصمیم بگیرید این کتاب را می پسندید یا خیر. بسیاری از سایت ها نیز امکان دانلود پی دی اف کتاب فانتزی را دارند.

در پایان، بهتر است اگر به کتاب داستان فانتزی نوجوانان علاقه دارید، از سایتی آن را خریداری کنید که به آن اعتماد دارید. پیشنهاد ما به شما سایت انتشارات ویدا است، چرا که این انتشارات در زمینه ادبیات کودک و نوجوان فعالیت های بسیاری داشته و در زمینه ژانر فانتزی نیز آثار عمده ای دارد.
            </Typography>{" "}
          </Box>
        </Box>
     
      </Box>
    </Box>
  );
}

export default page;