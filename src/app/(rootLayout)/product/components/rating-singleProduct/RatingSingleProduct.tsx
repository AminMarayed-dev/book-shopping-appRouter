import { Box, Rating, Typography } from "@mui/material";

function RatingSingleProduct() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "gray", fontSize: "14px" }}>
          (دیدگاه 0 کاربر)
        </Typography>
      </Box>
    </Box>
  );
}

export default RatingSingleProduct;
