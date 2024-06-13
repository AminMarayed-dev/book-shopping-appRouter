"use client"

import { Box } from "@mui/material"
import Product from "./Product"






function ProductWrapper() {
  return (
    <Box>
        <Product ageGroup="نوجوان"/>
        <Product ageGroup="جوان"/>
    </Box>
  )
}

export default ProductWrapper