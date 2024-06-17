"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  ImageList,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function page() {
  const [books, setBooks] = useState([]);

  async function GetBook() {
    const res = await axios.get("http://localhost:3000/books?ageGroup=جوان&genre=عاشقانه");
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
         <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "13.3px" }}>خانه</Typography>
          <Typography sx={{ fontSize: "13.3px" }}>/</Typography>
          <Typography sx={{ fontSize: "13.3px", textWrap: "nowrap" }}>
            {" "}
            رده سنی {books.ageGroup}
          </Typography>
          <Typography sx={{ fontSize: "13.3px" }}>/</Typography>
          <Typography
            sx={{ fontSize: "13.3px", textWrap: "nowrap", fontWeight: "bold" }}
          >
            {" "}
            ژانر {books.genre}
          </Typography>
        </Box>
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
          >
            <CardMedia
              component="img"
              height="80px"
              width="80px"
              image={book.imageUrl[0]}
              alt={book.name}
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
        <Typography sx={{fontSize:"36px" ,color:"blue" , textAlign:"center", py:6}}>کتاب داستان فانتزی جوان انتشارات ویدا</Typography>

        <Box
          sx={{fontSize:"18px" ,
            justifyContent: "space-between",
            flexDirection: "column",
            display: "flex",
          }}
        >
            <img
              src="https://vidapub.com/wp-content/uploads/2022/01/cost-youth-story-books.jpg"
              alt=""
            />
          <Box>
            <Typography sx={{ fontSize: "18px", color: "gray", textAlign: "justify" ,px:2, pt:2 }}>
              کتاب داستان فانتزی جوان به داستان هایی گفته می شود که اتفاقات یا
              دنیاهایی را به تصویر می کشند که یا حقیقی نیستند و یا تا سال ها به
              حقیقت نخواهند پیوست و در جهان بی انتهای اندیشه و رویای نویسنده
              است. این کتاب ها سبب می شود ساعتی از درد و ناراحتی و یا زندگی
              روزمره خود جدا شده به دنیایی برویم که محدودیت های زیاد دنیای ما را
              ندارد و در آن انواع حیوانات عجیب و غریب، انواع قدرت های خاص و
              ماورایی و جادو و جادوگران وجود دارند. در آن موجودات افسانه ای که
              وجود خارجی ندارند مانند اژدها ها، ققنوس ها، پگاسوس، اسب شاخدار،
              هیپوگریف و هزاران موجود ناموجود دیگر نمایان می شود و ما را به
              جهانی دیگر می برد، جهانی که در آن خیر و شر در جلوی هم صف می کشند و
              قهرمانان در مقابل شخصیت های شرور و منفی به پا می خیزند و تمام
              تلاششان را می کنند تا آن ها را از پای در بیاورند. کتاب داستان
              فانتزی جوان ژانری است که شما را به عالم ذهن نویسنده می برد.
            </Typography>{" "}
            <Typography sx={{ fontWeight: "bold", fontSize: "24px" ,px:2 , py:2}}>
              بهترین کتاب های فانتزی
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "gray" , textAlign: "justify",px:2 , pb:2}}>
              جی آر آر تالکین، این نویسنده قدر و محبوب را می توان پدربزرگ ژانر
              فانتزی مدرن دانست. او کتاب داستان فانتزی جوان خود را به گونه نوشت
              که تبدیل به یک شاهکار شد. او در حالی که داشت برگه‌ی یکی از
              شاگردانش را تصحیح می کرد و به جمله‌ ای برخورد که زندگی او را تغییر
              داد. در ورقه نوشته شده بود هابیتی در زیر زمین زندگی می کرد و همین
              ایده در ذهن جی. آر. آر. تالکین تبدیل به کتاب ارباب حلقه ها شد که
              به محبوبیتی بی سابقه نزد منتقدین و مخاطبین دست یافت. او با این
              کتاب نشان داد که کتاب های فانتزی هم در عرصه‌ی ادبی حرفی برای گفتن
              دارند و کمی از سایر ژانر ها ندارند.
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
            <img
              src="https://vidapub.com/wp-content/uploads/2022/01/price-youth-story-books.jpg"
              alt=""
            />
          </Box>
          <Box>
            {" "}
            <Typography sx={{ fontWeight: "bold", fontSize: "24px" ,px:2 , py:2}}>
              ژانر فانتزی پرورش دهنده تخیلات و خلاقیت
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "gray", textAlign: "justify" ,px:2 , pb:2}}>
              قوانین و منطق این جهان ها با قوانین و منطق جهان ما عموما متفاوت
              است ولی هنوز هم قوانین و محدودیت هایی دارند تا قهرمانان و نقش های
              منفی داستان با هم روبرو شوند و بجنگند. کتاب داستان فانتزی جوان با
              دادن قدرت ها و ماموریت های خاص به شخصیت ها سبب می شود ذهن انسان از
              محدودیت ها رها شود و بعد ها و حالت هایی از دنیا را در خود پرورش
              دهد که تا قبل آن به این افکار نیندیشیده بود. این ژانر فقط منحصر به
              انسان امروز نیست و از قرن ها پیش نیاکان ما افسانه هایی را روایت می
              کردند که در زمره‌ی این ژانر قرار می گرفت. نمی توان گفت اولین بار
              چه کسی در این ژانر کتاب نوشت اما می توان گفت این ژانر تاریخچه‌ی
              طولانی دارد. با خرید کتاب فانتزی می توانید به دنیاهای دیگر سفر
              کنید. یکی از این کتاب ها که با داستانی زیبا خواننده را به دنیای
              رویا میبرد مجموعه ابزار فانی میباشد که از کتاب ابزار فانی 1 بخش
              اول شروع میشود.
            </Typography>{" "}
          </Box>
        </Box>
        <Box
          sx={{
            justifyContent: "space-between",
            flexDirection: "column",
            display: "flex",
          }}
        >
            <img
              src="https://vidapub.com/wp-content/uploads/2022/01/online-shop-youth-story-books.jpg"
              alt=""
            />
          <Box>
            {" "}
            <Typography sx={{ fontWeight: "bold", fontSize: "24px",px:2 , py:2 }}>
              دانلود کتاب فانتزی
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "gray", textAlign: "justify",px:2 , pb:2}}>
              {" "}
              بی شک در دنیای امروزی ژانر فانتزی بسیار پرطرفدار است و فیلم ها،
              سریال ها و کتاب های بسیاری در این ژانر ارائه شده اند. یک کتاب
              داستان فانتزی جوان می تواند شما را کیلومتر ها آن طرف تر ببرد و با
              شخصیت هایی که وجود خارجی ندارند آشنا کند. این کتاب ها مانند راه
              فراری از دنیای روزمره هستند و همین سبب می شود در بین نوجوانان و
              جوانان که تخیل بالایی دارند بسیار محبوب شوند مانند کتاب بن گارستن
              1 . بسیاری از فیلم ها و کتاب های بسیار پرفروش جهان نیز متعلق به
              این ژانر هستند. کتاب های فانتزی فقط برای فرار از روزمرگی نیستند
              بلکه درس های بسیار عمیقی از زندگی را به ما می آموزند. دوستی های
              عمیق در این کتاب ها، شجاعت ستودنی قهرمانان و عزم راسخ شخصیت ها
              برای دست یابی به هدف چیزی است که این کتاب ها در دل خود دارند.
              قهرمانان دلیری که در سخت ترین لحظات تردید به دلشان راه نمی دهند و
              از شکست ها ناامید نمی شوند و فقط به دنبال دستیابی به هدف هستند. یک
              کتاب داستان فانتزی جوان مناسب می تواند مانند یک معلم چیزهای زیادی
              به شما بیاموزد.
            </Typography>{" "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default page;
