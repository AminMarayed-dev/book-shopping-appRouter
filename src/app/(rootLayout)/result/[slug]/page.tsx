import { Box } from "@mui/material";

function SingleResultPage({ params }:{ params: { slug: string } }) {
  const { slug } = params;
  return <>{slug === "success" ? <Box sx={{textAlign : "center" , pt:"50px" ,color : "green"}}>success</Box > : <Box sx={{textAlign : "center" , pt:"50px" ,color : "red"}} >failed </Box >}</>;
}

export default SingleResultPage;
