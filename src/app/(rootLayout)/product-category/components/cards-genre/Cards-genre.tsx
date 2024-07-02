import { routes } from "@/constant/routes";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

function CardsGenre({
  ageGroupEn,
  ageGroup,
}: {
  ageGroupEn: string;
  ageGroup: string;
}) {
  const router = useRouter();
  const items = [
    {
      genre: "وحشتت",
      genreEn: "horror",
      src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5ro1_jqPLIabWZlGwYA63gv96VdXp6ebuWumd_EZhzJMhb6yH",
    },
    {
      genre: "فانتزی",
      genreEn: "fantasy",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa87oVxNlYLwQganon9WAkLtqY6CqaNlfxFaDO-WK3-oPgpFds",
    },
    {
      genre: "عاشقانه",
      genreEn: "lovely",
      src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmuUM9fntQuPzLKKRAHpk15Lg6hoyJqcpgkVPK60z-PyeyF62C",
    },
  ];
  return (
    <>
      {" "}
      <Typography
        sx={{
          m: "auto",
          textAlign: "center",
          fontWeight: "bold",
          mt: 4,
          mb: 2,
        }}
      >{`کتاب های ${ageGroup} انتشارات ویدا`}</Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: 3, m: 3 }}
      >
        {items.map((item) => {
          return (
            <Card
              sx={{ boxShadow: 4 }}
              onClick={() =>
                router.push(
                  routes.productCategoryGenre
                    .replace(`:slug`, ageGroupEn!)
                    .replace(`:genre`, `${ageGroupEn}-${item.genreEn}`)
                )
              }
            >
              <CardContent>
                {" "}
                <CardMedia
                  component="img"
                  height="80px"
                  width="80px"
                  image={item.src}
                  alt={item.genreEn}
                />
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "16px",
                    py: 2,
                  }}
                >
                  {item.genre}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </>
  );
}

export default CardsGenre;
