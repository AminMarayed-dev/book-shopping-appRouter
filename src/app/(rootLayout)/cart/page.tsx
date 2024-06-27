import Box from "@mui/material/Box";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import Image from "next/image";
import { formatNumber } from "@/utils/formatNumber";
import ghayoumi from "../../../../public/ghayoumi.jpg";

function Cart() {
  return (
    <>
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <Card
          sx={{
            display: "flex",
            "&:hover": { bgcolor: "primary.dark" },
            borderBottom: "2px solid #EFEFEF85",
          }}
        >
          <CardMedia
            sx={{
              display: "grid",
              alignItems: "start",
              paddingX: 1,
              paddingTop: 3,
            }}
          >
            <Image alt="test" src={ghayoumi} width={140} height={200} />
          </CardMedia>
          <CardContent>
            <Typography>کتاب هارلی کویین - شیدایی دیوانه وار</Typography>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                height: "30px",
                textAlign: "center",
              }}
            ></Box>
            <Typography
              sx={{ display: "flex", flexWrap: "nowrap", fontSize: 15, mb: 1 }}
            >
              قیمت: {formatNumber(240000)} تومان
            </Typography>
            <Divider
              sx={{
                borderStyle: "dashed",
                borderWidth: "1px",
              }}
            />
            <Typography
              sx={{ display: "flex", flexWrap: "nowrap", fontSize: 15, my: 1 }}
            >
              تعداد: 3
            </Typography>
            <Divider
              sx={{
                borderStyle: "dashed",
                borderWidth: "1px",
              }}
            />
            <Typography
              sx={{ display: "flex", flexWrap: "nowrap", fontSize: 15, mt: 1 }}
            >
              جمع جز: {formatNumber(240000)} تومان
            </Typography>
          </CardContent>
          <IconButton sx={{ display: "grid", alignItems: "start" }}>
            <Close />
          </IconButton>
        </Card>
      </Box>
    </>
  );
}

export default Cart;
