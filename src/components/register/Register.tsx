
"use client"
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SignUp from "./sign-up/SignUp";
import SignIn from "./sign-in/SignIn";
import { useSearchParams } from "next/navigation";


function RegisterPage() {
  const searchParams = useSearchParams();
const mode = searchParams.get("mode");

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{   color:`primary.darker`}}
      >
        {mode === "signup" ? <SignUp /> : <SignIn />}
      </Grid>
    </Grid>
  );
}

export default RegisterPage;
