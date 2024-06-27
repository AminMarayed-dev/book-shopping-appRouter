import { routes } from "@/context/routes";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

function TitlePageGenre({
  ageGroup,
  ageGroupEn,
  genre,
}: {
  ageGroup: string;
  ageGroupEn: string;
  genre: string;
}) {
  const router = useRouter();

  return (
    <Box sx={{ display: "flex", gap: 1, mt: 2, mx: 2 }}>
      <Typography
        sx={{ fontSize: "13.3px", color: "gray" }}
        onClick={() => router.push(routes.home)}
      >
        خانه
      </Typography>
      <Typography sx={{ fontSize: "13.3px", color: "gray" }}>/</Typography>

      <Typography
        sx={{ fontSize: "13.3px", textWrap: "nowrap", color: "gray" }}
        onClick={() =>
          router.push(
            routes.productCategory
            .replace(`:slug`, ageGroupEn)
          )
        }

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
  );
}

export default TitlePageGenre;
