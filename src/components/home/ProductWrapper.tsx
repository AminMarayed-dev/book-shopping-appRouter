"use client";

import { Box } from "@mui/material";
import Product from "./Product";

function ProductWrapper() {
  return (
    <Box sx={{ gap: 2 }}>
      <Product ageGroup="نوجوان" ageGroupEn="teenager" />
      <Product ageGroup="جوان" ageGroupEn="young" />
    </Box>
  );
}

export default ProductWrapper;
