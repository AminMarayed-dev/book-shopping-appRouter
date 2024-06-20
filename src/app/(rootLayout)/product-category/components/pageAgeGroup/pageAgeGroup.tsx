"use client";

import { Box, Divider } from "@mui/material";
import OneCard from "../../../oneCard/oneCard";
import { useGetBooksByAgeGroup } from "../../hook";
import CardsGenre from "../cards-genre/Cards-genre";
import AboutPublisher from "../about-publisher/about-publisher";
import { useRouter } from "next/navigation";
import TitlePageAgeGroup from "../title-pageAgeGroup/Title-pageAgeGroup";

function PageAgeGroup({
  ageGroup,
  ageGroupEn,
}: {
  ageGroup: string;
  ageGroupEn: string;
}) {
  const { data } = useGetBooksByAgeGroup(ageGroup);
  const router = useRouter();
  return (
    <Box>

      {/* title */}
      <TitlePageAgeGroup ageGroup={ageGroup} ageGroupEn={ageGroupEn} />

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
      <AboutPublisher />

      <CardsGenre ageGroupEn={ageGroupEn} ageGroup={ageGroup} />
    </Box>
  );
}

export default PageAgeGroup;
