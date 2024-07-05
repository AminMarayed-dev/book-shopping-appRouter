import { Box } from "@mui/material";

function SingleResultPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <>
      {slug === "success" ? (
        <Box sx={{ textAlign: "center", pt: "50px", color: "green" }}>
          با موفقیت انجام شد
        </Box>
      ) : (
        <Box sx={{ textAlign: "center", pt: "50px", color: "red" }}>
          خرید شما با مواجه گردید{" "}
        </Box>
      )}
    </>
  );
}

export default SingleResultPage;
