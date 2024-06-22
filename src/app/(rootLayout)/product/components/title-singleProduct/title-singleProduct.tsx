import { Box, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import GridViewIcon from "@mui/icons-material/GridView";
import React from "react";
import { BooksEntity } from "@/type";
import { useRouter } from "next/navigation";

function TitleSingleProduct({
  data,
  ageGroupEn,
  genreEn,
}: {
  data: BooksEntity;
  ageGroupEn: string;
  genreEn: string;
}) {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: "10px",
        alignItems: "center",
        mx: "10px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{ fontSize: "13.3px" }}
          onClick={() => router.push(`/`)}
        >
          خانه
        </Typography>
        <Typography sx={{ fontSize: "13.3px" }}>/</Typography>
        <Typography
          sx={{ fontSize: "13.3px", textWrap: "nowrap" }}
          onClick={() => router.push(`/product-category/${ageGroupEn}`)}
        >
          {" "}
          رده سنی {data?.ageGroup}
        </Typography>
        <Typography sx={{ fontSize: "13.3px" }}>/</Typography>
        <Typography
          sx={{ fontSize: "13.3px", textWrap: "nowrap", fontWeight: "bold" }}
          onClick={() =>
            router.push(
              `/product-category/${ageGroupEn}/${ageGroupEn}-${genreEn}`
            )
          }
        >
          {" "}
          ژانر {data?.genre}
        </Typography>
      </Box>

      <Box>
        <KeyboardArrowRightIcon />
        <GridViewIcon />
        <KeyboardArrowLeftIcon />
      </Box>
    </Box>
  );
}

export default TitleSingleProduct;
