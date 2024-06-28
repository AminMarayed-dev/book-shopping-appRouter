import { Box, TextField, Typography } from "@mui/material"


function InputCheckOut({label, value = "", disabled=false}) {
  return (
    <Box>
    <Typography component="h5" variant="h5" sx={{ mb: 1 }}>
      {label}
    </Typography>
    <TextField
      fullWidth
      autoFocus
      disabled = {disabled}
      value={value}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "gray",
          },
          "&:hover fieldset": {
            borderColor: "darkgray",
          },
          "&.Mui-focused fieldset": {
            borderColor: "black",
          },
        },
      }}
    />
  </Box>
  )
}

export default InputCheckOut