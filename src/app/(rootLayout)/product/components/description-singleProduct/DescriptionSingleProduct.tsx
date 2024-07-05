import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

function DescriptionSingleProduct() {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };
  return (
    <Box
      sx={{
        display: "flex",
        cursor: "pointer",
        flexDirection: "column",
        mt: "10px",
        mb: "10px",
        borderRadius: "4px",
        padding: "8px",
        gap: "10px",
        backgroundColor: "#f0f0f0",
        mx: "20px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        {isDescriptionOpen ? (
          <ExpandLessIcon sx={{ color: "gray" }} />
        ) : (
          <ExpandMoreIcon sx={{ color: "gray" }} />
        )}

        <Typography
          variant="body1"
          sx={{ fontSize: "16px", color: "secondary.light" }}
          onClick={toggleDescription}
        >
          توضیحات
        </Typography>
      </Box>
      {isDescriptionOpen && (
        <Typography variant="body2">
          کتاب تک جلدی هارلی کویین یکی از بهترین آثار در دنیای دی سی به قلم پاول
          دینی و پت کدیگنروانه بازار شده است.
        </Typography>
      )}
    </Box>
  );
}

export default DescriptionSingleProduct;
