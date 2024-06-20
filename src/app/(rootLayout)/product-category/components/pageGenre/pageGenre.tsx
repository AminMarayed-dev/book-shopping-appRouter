"use client";

import { Box, Divider, Typography } from "@mui/material";
import { useGetBooksByGenre } from "@/app/(rootLayout)/product-category/hook/index";
import AboutPublisher from "../about-publisher/about-publisher";
import DesYoungFantasy from "../des-young-fantasy/des-young-fantasy";
import DesTeenagerFantasy from "../des-teenager-fantasy/des-teenager-fantasy";
import TitlePageGenre from "../title-pageGenre/Title-pageGenre";
import OneCard from "@/components/one-card/OneCard";

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
      {/* title */}
      <TitlePageGenre
        ageGroup={ageGroup}
        ageGroupEn={ageGroupEn}
        genre={genre}
      />

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
          <AboutPublisher />
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
        <DesTeenagerFantasy />
      ) : genre === "فانتزی" && ageGroup === "جوان" ? (
        <DesYoungFantasy />
      ) : genre === "وحشت" && ageGroup === "جوان" ? (
        <Box sx={{ px: 2 }}>
          <Typography
            sx={{ fontSize: "36px", color: "blue", textAlign: "center", py: 6 }}
          >
            کتاب داستان وحشت جوان انتشارات ویدا
          </Typography>
          <AboutPublisher />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default PageGenre;
