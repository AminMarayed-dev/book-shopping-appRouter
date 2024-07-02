import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BooksEntity } from "@/type";

function ImageSingleProduct({ data }: { data: BooksEntity }) {
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (data?.imageUrl && data?.imageUrl.length! > 0) {
      setMainImage(data.imageUrl[0]);
    }
  }, [data]);

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <>
      <Box sx={{ mb: "20px", width: "100%", textAlign: "center" }}>
        <img
          src={mainImage}
          alt="main product"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      {/* Thumbnail images */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {data?.imageUrl!.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`thumbnail ${index}`}
            style={{ width: "100px", height: "100px", cursor: "pointer" }}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </Box>
    </>
  );
}

export default ImageSingleProduct;
