import { routes } from "@/constant/routes";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function Introduction() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 3,
      }}
    >
      <Image
        src="https://vidapub.com/wp-content/uploads/2021/12/vida-publishing-logo.jpg"
        alt="Landscape picture"
        width={200}
        height={200}
      />
      <Typography variant="h4">درباره کتاب ویدا</Typography>
      <Typography variant="h5" sx={{ lineHeight: 2, textAlign: "center" }}>
        کتاب ویدا از سال ۱۳۷۶ فعالیت خود را در زمینه ادبیات کودک و نوجوان آغاز
        کرده است و تا کنون با چاپ بیش از ۳۰۰ اثر سعی داشته تا سهمی هر چند کوچک
        در گسترش فرهنگ کتاب و کتابخوانی در میان کودکان و نوجوانان این مرز و بوم
        داشته باشد. عمده‌ی آثار کتاب ویدا در ژانرهای فانتزی، علمی تخیلی، وحشت،
        معمایی و کارآگاهی تقسیم می‌شود. اکنون با گذشت بیش از ۲۴ سال از فعالیت
        کتاب ویدا امیدواریم توانسته باشیم رضایت مخاطبان عزیز را جلب کرده باشیم.
      </Typography>
      <Link href={routes.home} passHref>
        <Button variant="contained" color="secondary">
          ادامه مطالب
        </Button>
      </Link>
    </Box>
  );
}

export default Introduction;
