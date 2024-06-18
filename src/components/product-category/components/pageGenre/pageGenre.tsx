"use client";

import { Box, Divider, Typography } from "@mui/material";
import OneCard from "../../../oneCard/oneCard";
import { useGetBooksByGenre } from "../../hook";

function PageGenre({
  genre,
  ageGroup,
  ageGroupEn,
}: {
  genre: string;
  ageGroup: string;
  ageGroupEn: string;
}) {
  const { data } = useGetBooksByGenre({ genre, ageGroup });

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
          sx={{ fontSize: "13.3px", textWrap: "nowrap", color: "gray" }}
          onClick={() => (location.href = `/product-category/${ageGroupEn}`)}
        >
          {` رده سنی ${ageGroup}`}{" "}
        </Typography>
        <Typography sx={{ fontSize: "13.3px", color: "gray" }}>/</Typography>
        <Typography
          sx={{ fontSize: "13.3px", textWrap: "nowrap", fontWeight: "bold" }}
        >
          {" "}
          {` ژانر ${genre}`}{" "}
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
          <OneCard index={index} book={book} key={index} />
        ))}
      </Box>

      {/* Description */}
      {genre === "وحشت" && ageGroup === "نوجوان" ? (
        <Box sx={{ px: 2 }}>
          <Typography
            sx={{ fontSize: "36px", color: "blue", textAlign: "center", py: 6 }}
          >
            کتاب داستان وحشت نوجوان انتشارات ویدا
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
                نوجوان آغاز کرده است و تا کنون با چاپ بیش از 300 اثر سعی داشته
                تا سهمی هر چند کوچک در گسترش فرهنگ کتاب و کتابخوانی در میان
                کودکان و نوجوانان این مرز و بوم داشته باشد. عمده‌ی آثار نشر ویدا
                در ژانرهای فانتزی، علمی تخیلی، وحشت، معمایی و کارآگاهی تقسیم
                می‌شود. اکنون با گذشت بیش از 24 سال از فعالیت انتشارات ویدا
                امیدواریم توانسته باشیم رضایت مخاطبان عزیز را جلب کرده باشیم.
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
      ) : genre === "فانتزی" && ageGroup === "نوجوان" ? (
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
                زیادی پیدا کرده، چرا که ژانر فانتزی ژانر بسیار محبوبی بین
                نوجوانان است و تقریباً بیشتر نوجوانان به این ژانر علاقه دارند.
                حال، سوال پیش می‌آید که به چه ژانری فانتزی می گویند؟ کتاب های
                فانتزی معمولاً با ویژگی های گوناگون و متفاوتی تعریف می شوند.
                فانتزی به ژانری می گویند که معمولاً تخیلی است و در دنیایی مشخص و
                خارج از دنیای واقعی جریان دارند و عموماً از جادو و پدیده های
                ماورای طبیعی استفاده می شود مثل مجموعه کتاب های تاریخ اعماق زمین
                . این کتاب ها به منظور دور کردن افکار از دنیای واقعی و فاصله
                گرفتن از روزمرگی و دنیای عادی است. البته بسیاری از کتاب های
                فانتزی بدون هیچ کدام از این ویژگی ها بسیار موفق بوده‌اند. همین
                ویژگی تخیلی بودن و متفاوت بودن از ژانر‌های دیگر باعث شده محبوبیت
                این کتاب های داستان فانتزی نوجوانان بسیار زیاد باشد.
              </Typography>{" "}
              <Box sx={{ mt: 3 }}>
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
                همان طور که گفته شد، فانتزی ژانری ادبی است که در ایران تقریباً
                از سال ۱۳۰۰ شمسی تحت تأثیر ترجمه های کتاب های غربی شکل گرفت و در
                دهه های اخیر با استقبال بیشتری نیز از سمت کودکان و نوجوانان قرار
                گرفته است. ژانر فانتزی همیشه جذاب بوده، چه در فیلم ها و چه در
                کتاب های گوناگون. در ادبیات بسیاری از کتاب های داستان فانتزی
                نوجوانان یکی از بهترین کتاب های فانتزی شناخته شده و بعد ها با
                الهام از این کتاب ها فیلم های سینمایی و سریال های بسیاری ساخته
                شده که یکی از معروف ترین آن ها مجموعه «ارباب حلقه ها» یا «هری
                پاتر» است. این کتاب ها مجموعه های بسیار معروفی در ژانر فانتزی
                هستند که کمتر کسی تاکنون اسم آن ها را نشنیده است. اگر شما هم از
                آن دسته افرادی هستید که به داستان های فانتزی نوجوانان علاقه مند
                هستید، توصیه می شود حتماً کتاب هایی در ژانر تخیلی نیز امتحان
                کنید، مانند مجموعه کتاب های مدرسه عهد بوق چرا که ژانر این کتاب
                ها به ژانر فانتزی بسیار نزدیک است.{" "}
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
                اگر از دوست داران کتاب داستان فانتزی نوجوانان باشید، احتمالاً می
                دانید کتاب های بسیاری در این زمینه نوشته شده که بسیاری از آن ها
                بسیار محبوب تر است و تقریباً همه آن ها را می شناسند. اگر به
                دنبال راهی برای خرید کتاب فانتزی هستید، اما وقت کافی برای انتخاب
                بهترین کتاب از میان انبوه کتاب های فانتزی را ندارید، نگران
                نباشید، چرا که بسیاری از سایت ها بخشی از کتاب را به صورت خلاصه
                می نویسند و شما می توانید به راحتی پس از خواندن خلاصه داستان
                تصمیم بگیرید این کتاب را می پسندید یا خیر. بسیاری از سایت ها نیز
                امکان دانلود پی دی اف کتاب فانتزی را دارند. در پایان، بهتر است
                اگر به کتاب داستان فانتزی نوجوانان علاقه دارید، از سایتی آن را
                خریداری کنید که به آن اعتماد دارید. پیشنهاد ما به شما سایت
                انتشارات ویدا است، چرا که این انتشارات در زمینه ادبیات کودک و
                نوجوان فعالیت های بسیاری داشته و در زمینه ژانر فانتزی نیز آثار
                عمده ای دارد.
              </Typography>{" "}
            </Box>
          </Box>
        </Box>
      ) : genre === "فانتزی" && ageGroup === "جوان" ? (
        <Box sx={{ px: 2 }}>
          <Typography
            sx={{ fontSize: "36px", color: "blue", textAlign: "center", py: 6 }}
          >
            کتاب داستان فانتزی جوان انتشارات ویدا
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
              src="https://vidapub.com/wp-content/uploads/2022/01/cost-youth-story-books.jpg"
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
                کتاب داستان فانتزی جوان به داستان هایی گفته می شود که اتفاقات یا
                دنیاهایی را به تصویر می کشند که یا حقیقی نیستند و یا تا سال ها
                به حقیقت نخواهند پیوست و در جهان بی انتهای اندیشه و رویای
                نویسنده است. این کتاب ها سبب می شود ساعتی از درد و ناراحتی و یا
                زندگی روزمره خود جدا شده به دنیایی برویم که محدودیت های زیاد
                دنیای ما را ندارد و در آن انواع حیوانات عجیب و غریب، انواع قدرت
                های خاص و ماورایی و جادو و جادوگران وجود دارند. در آن موجودات
                افسانه ای که وجود خارجی ندارند مانند اژدها ها، ققنوس ها، پگاسوس،
                اسب شاخدار، هیپوگریف و هزاران موجود ناموجود دیگر نمایان می شود و
                ما را به جهانی دیگر می برد، جهانی که در آن خیر و شر در جلوی هم
                صف می کشند و قهرمانان در مقابل شخصیت های شرور و منفی به پا می
                خیزند و تمام تلاششان را می کنند تا آن ها را از پای در بیاورند.
                کتاب داستان فانتزی جوان ژانری است که شما را به عالم ذهن نویسنده
                می برد.
              </Typography>{" "}
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
                جی آر آر تالکین، این نویسنده قدر و محبوب را می توان پدربزرگ ژانر
                فانتزی مدرن دانست. او کتاب داستان فانتزی جوان خود را به گونه
                نوشت که تبدیل به یک شاهکار شد. او در حالی که داشت برگه‌ی یکی از
                شاگردانش را تصحیح می کرد و به جمله‌ ای برخورد که زندگی او را
                تغییر داد. در ورقه نوشته شده بود هابیتی در زیر زمین زندگی می کرد
                و همین ایده در ذهن جی. آر. آر. تالکین تبدیل به کتاب ارباب حلقه
                ها شد که به محبوبیتی بی سابقه نزد منتقدین و مخاطبین دست یافت. او
                با این کتاب نشان داد که کتاب های فانتزی هم در عرصه‌ی ادبی حرفی
                برای گفتن دارند و کمی از سایر ژانر ها ندارند.
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
              <Typography
                sx={{ fontWeight: "bold", fontSize: "24px", px: 2, py: 2 }}
              >
                ژانر فانتزی پرورش دهنده تخیلات و خلاقیت
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
                قوانین و منطق این جهان ها با قوانین و منطق جهان ما عموما متفاوت
                است ولی هنوز هم قوانین و محدودیت هایی دارند تا قهرمانان و نقش
                های منفی داستان با هم روبرو شوند و بجنگند. کتاب داستان فانتزی
                جوان با دادن قدرت ها و ماموریت های خاص به شخصیت ها سبب می شود
                ذهن انسان از محدودیت ها رها شود و بعد ها و حالت هایی از دنیا را
                در خود پرورش دهد که تا قبل آن به این افکار نیندیشیده بود. این
                ژانر فقط منحصر به انسان امروز نیست و از قرن ها پیش نیاکان ما
                افسانه هایی را روایت می کردند که در زمره‌ی این ژانر قرار می
                گرفت. نمی توان گفت اولین بار چه کسی در این ژانر کتاب نوشت اما می
                توان گفت این ژانر تاریخچه‌ی طولانی دارد. با خرید کتاب فانتزی می
                توانید به دنیاهای دیگر سفر کنید. یکی از این کتاب ها که با
                داستانی زیبا خواننده را به دنیای رویا میبرد مجموعه ابزار فانی
                میباشد که از کتاب ابزار فانی 1 بخش اول شروع میشود.
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
              <Typography
                sx={{ fontWeight: "bold", fontSize: "24px", px: 2, py: 2 }}
              >
                دانلود کتاب فانتزی
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
                {" "}
                بی شک در دنیای امروزی ژانر فانتزی بسیار پرطرفدار است و فیلم ها،
                سریال ها و کتاب های بسیاری در این ژانر ارائه شده اند. یک کتاب
                داستان فانتزی جوان می تواند شما را کیلومتر ها آن طرف تر ببرد و
                با شخصیت هایی که وجود خارجی ندارند آشنا کند. این کتاب ها مانند
                راه فراری از دنیای روزمره هستند و همین سبب می شود در بین
                نوجوانان و جوانان که تخیل بالایی دارند بسیار محبوب شوند مانند
                کتاب بن گارستن 1 . بسیاری از فیلم ها و کتاب های بسیار پرفروش
                جهان نیز متعلق به این ژانر هستند. کتاب های فانتزی فقط برای فرار
                از روزمرگی نیستند بلکه درس های بسیار عمیقی از زندگی را به ما می
                آموزند. دوستی های عمیق در این کتاب ها، شجاعت ستودنی قهرمانان و
                عزم راسخ شخصیت ها برای دست یابی به هدف چیزی است که این کتاب ها
                در دل خود دارند. قهرمانان دلیری که در سخت ترین لحظات تردید به
                دلشان راه نمی دهند و از شکست ها ناامید نمی شوند و فقط به دنبال
                دستیابی به هدف هستند. یک کتاب داستان فانتزی جوان مناسب می تواند
                مانند یک معلم چیزهای زیادی به شما بیاموزد.
              </Typography>{" "}
            </Box>
          </Box>
        </Box>
      ) : genre === "وحشت" && ageGroup === "جوان" ? (
        <Box sx={{ px: 2 }}>
          <Typography
            sx={{ fontSize: "36px", color: "blue", textAlign: "center", py: 6 }}
          >
            کتاب داستان وحشت جوان انتشارات ویدا
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
                نوجوان آغاز کرده است و تا کنون با چاپ بیش از 300 اثر سعی داشته
                تا سهمی هر چند کوچک در گسترش فرهنگ کتاب و کتابخوانی در میان
                کودکان و نوجوانان این مرز و بوم داشته باشد. عمده‌ی آثار نشر ویدا
                در ژانرهای فانتزی، علمی تخیلی، وحشت، معمایی و کارآگاهی تقسیم
                می‌شود. اکنون با گذشت بیش از 24 سال از فعالیت انتشارات ویدا
                امیدواریم توانسته باشیم رضایت مخاطبان عزیز را جلب کرده باشیم.
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
      ) : (
        ""
      )}
    </Box>
  );
}

export default PageGenre;
