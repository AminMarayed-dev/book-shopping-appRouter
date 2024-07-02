import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { cssClass } from "@/constant/cssClass";

function ChangeQuantity({item,subtractFromNumber,addToNumber , quantity , disabled} : {item : string ,subtractFromNumber : (item : string)=>void ; addToNumber : (item : string)=>void ; quantity : number ; disabled : boolean}) {
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      border: "1px solid gray",
      borderRadius: "4px",
      backgroundColor: "white",
    }}
  >
    <Button
      onClick={() => subtractFromNumber(item)}
      sx={{
        borderRight: "1px solid gray",
        width: "40px",
        minWidth: 0,
        borderRadius: "0",
        ...cssClass.center,
        fontSize: "13px",
        color: "gray",
        "&:hover": {
          color: "white",
          backgroundColor: "secondary.light",
        },
      }}
    >
      -
    </Button>

    <Typography
      sx={{
        px: "5px",
        width: "20px",
        fontSize: "14px",
        color: "gray",
        textAlign: "center",
        m: "auto",
      }}
    >
      {quantity}
    </Typography>

    <Button
      disabled={disabled}
      onClick={()=>addToNumber(item)}
      sx={{
        fontSize: "13px",
        color: "gray",
        minWidth: 0,

        borderRadius: "0",
        borderRight: "none",
        width: "40px",
        borderLeft: "1px solid gray",
        ...cssClass.center,
        "&:hover": {
          color: "white",
          backgroundColor: "secondary.light",
        },
      }}
    >
      +
    </Button>
  </Box>
  )
}

export default ChangeQuantity