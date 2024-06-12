"use client"

import { Box } from "@mui/material"
import Product from "./Product"




function ProductWrapper() {
  return (
    <Box>
        <Product/>
        <Product/>
        <Product/>
    </Box>
  )
}

export default ProductWrapper