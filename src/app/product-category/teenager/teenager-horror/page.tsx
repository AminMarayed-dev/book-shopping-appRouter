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
    const res = await axios.get("http://localhost:3000/books?ageGroup=نوجوان&genre=وحشت");
    console.log(res.data)
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
         <Typography sx={{ fontSize: "13.3px" ,color:"gray"}} onClick={()=>location.href="/"}>خانه</Typography>
          <Typography sx={{ fontSize: "13.3px",color:"gray" }}>/</Typography>
          
          <Typography sx={{ fontSize: "13.3px", textWrap: "nowrap",color:"gray" }} onClick={()=>location.href="/product-category/teenager"}>
            رده سنی نوجوان
          </Typography>
          <Typography sx={{ fontSize: "13.3px",color:"gray" }}>/</Typography>
          <Typography
            sx={{ fontSize: "13.3px", textWrap: "nowrap", fontWeight: "bold" }}
          >
            {" "}
            ژانر وحشت
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
              image={hoveredIndex === index ? book.imageUrl[1] : book.imageUrl[0]}
              alt={book.name}
              sx={{
                transition: 'transform 0.3s', 
                transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)', 
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
      <Box sx={{ px:2}}>
        <Typography sx={{fontSize:"36px" ,color:"blue" , textAlign:"center", py:6}}>کتاب داستان وحشت نوجوان انتشارات ویدا</Typography>

       
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
                pb: 4,
                color: "blue",
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
                pt: 2,
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
    </Box>
  );
}

export default page;