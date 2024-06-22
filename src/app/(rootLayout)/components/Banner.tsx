import { Box } from "@mui/material";
import Image from "next/image";

function Banner() {
  return (
    <Box sx={{ p: 2, textAlign: "center", width: "100%" }}>
      <Image
        src="https://vidapub.com/wp-content/uploads/2022/10/photo_2022-10-31_11-16-34.jpg"
        alt="Landscape picture"
        width={400}
        height={400}
      />
    </Box>
  );
}



export default Banner;


