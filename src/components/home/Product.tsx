"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Link from "next/link";
import { useGetBooksByGroup } from "@/hooks/useGetBooksByAgeGroup";
import { useState } from "react";



// function Product({ageGroup}:{ageGroup:string}) {
//   const { data, isLoading, isSuccess, isError, error } = useGetBooksByGroup({ageGroup});

//   if (isLoading) {
//     return <div>loading...</div>;
//   }

//   if (isError) {
//     return <Typography color="error">Error: {error.message}</Typography>;
//   }

//   if (isSuccess && data) {
//     return (
//       <Box
//         component="section"
//         sx={{ width: "100%", p: 4, textAlign: "center" }}
//       >
//         <Typography variant="h4" sx={{ mb: 2 }}>
//         مجموعه کتاب های {ageGroup}
//         </Typography>
//         <Swiper
//           navigation
//           autoplay={{ delay: 3000 }}
//           loop={true}
//           modules={[Autoplay, Navigation]}
//           spaceBetween={30}
//           slidesPerView={2}
//         >
//           {data.map((book:any) => (
//             <SwiperSlide key={book.id}>
//               <Card sx={{ maxWidth: 345, mx: "auto" }}>
//                 <CardMedia
//                   component="img"
//                   height="120"
//                   image={book.imageUrl[0]}
//                   alt={book.name}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {book.name}
//                   </Typography>
//                   <Typography variant="body2" color="secondary.light">
//                     {book.price} تومان
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <Box sx={{ mt: 2 }}>
//           <Link href={`/product-category/${data?.slug}`} passHref>
//             <Button variant="contained" color="primary">
//               مشاهده محصولات
//             </Button>
//           </Link>
//         </Box>
//       </Box>
//     );
//   }

//   return null; // Fallback for when no conditions are met
// }

// export default Product;

function Product({ ageGroup, ageGroupEn }: { ageGroup: string , ageGroupEn:string}) {
  const { data, isLoading, isSuccess, isError, error } = useGetBooksByGroup({
    ageGroup,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextBooks = () => {
    if (currentIndex + 2 < data?.length) {
      setCurrentIndex((prevIndex) => prevIndex + 2);
    }
  };

  const prevBooks = () => {
    if (currentIndex - 2 >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - 2);
    }
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <Typography color="error">Error: {error.message}</Typography>;
  }

  if (isSuccess && data) {
    return (
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column", mt:4 }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          مجموعه کتاب های {ageGroup}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={prevBooks} disabled={currentIndex === 0}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <Box sx={{ display: "flex", overflow: "hidden", width: "100%" }}>
            {data?.slice(currentIndex, currentIndex + 2).map((book, index) => (
              <Card key={index} sx={{ flex: "0 0 45%", margin: "10px" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={book?.imageUrl[0]}
                  alt={book.name}
                />
                <CardContent>
                  <Typography variant="h5">{book.name}</Typography>
                  <Typography variant="h6" color="primary">
                    {book?.price} ریال
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <IconButton
            onClick={nextBooks}
            disabled={currentIndex + 2 >= data?.length}
          >
            <KeyboardArrowRightIcon />
          </IconButton>

        </Box>
        <Box sx={{ mt: 2 }}>
            <Link href={`/product-category/${ageGroupEn}`} passHref>
              <Button variant="contained" color="secondary">
                مشاهده محصولات
              </Button>
            </Link>
          </Box>
      </Box>
    );
  }
}

export default Product;
