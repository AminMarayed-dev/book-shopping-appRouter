"use client";

import {
  Alert,
  Box,
  Button,
  Grid,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchemaSignUP } from "../validation/RegisterSchema";
import { postUser } from "@/api/user.api";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/navigation";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { setCookie } from "cookies-next";
import { TypeUser } from "@/type";
import { routes } from "@/context/routes";

function SignUp() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchemaSignUP),
  });

  const onSumbitSignUp = (data: TypeUser) => {

    const newUser : TypeUser ={
      ...data, role: "user" , id : Date.now().toString() ,wishlist: []
    }
    postUser(newUser);
    setCookie("role", "user");
    setCookie("id", newUser.id);
    setTimeout(() => router.push(routes.home), 2000);
    setOpen(true);
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AssignmentIndIcon sx={{ width: "45px", height: "45px" }} />
      <Typography component="h1" variant="h4">
        صفحه ثبت نام
      </Typography>
      <Box
        component="form"
        sx={{ mt: 1 }}
        onSubmit={handleSubmit(onSumbitSignUp)}
      >
        <TextField
          {...register("email")}
          margin="normal"
          fullWidth
          placeholder="ایمیل"
          autoFocus
          helperText={errors.email?.message}
          error={!!errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
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
        <TextField
          {...register("username")}
          margin="normal"
          fullWidth
          helperText={errors.username?.message}
          error={!!errors.username}
          placeholder="نام کاربری"
          autoFocus
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
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
        <TextField
          {...register("password")}
          margin="normal"
          fullWidth
          helperText={errors.password?.message}
          error={!!errors.password}
          type="password"
          placeholder="رمز عبور"
          autoComplete="current-password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          color="secondary"
        >
          ثبت نام
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Sign Up is successfully
          </Alert>
        </Snackbar>
        <Grid container>
          <Grid item>
            <Button
              onClick={() => router.push(routes.signIn)}
              color="secondary"
            >
              ورود
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignUp;
