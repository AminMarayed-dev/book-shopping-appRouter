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
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchemaSignIN } from "../validation/RegisterSchema";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { getUserByFilter } from "@/api/user.api";
import { TypeUser } from "@/type";
import { routes } from "@/constant/routes";

function SignIn() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterSchemaSignIN) });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSumbitSignIN = (data: TypeUser) => {
    console.log(data);
    getUserByFilter({ name: data.username, password: data.password }).then(
      (res) => {
        try {
          if (res.length > 0) {
            setIsLogin(true);
            setCookie("role", res[0].role);
            setCookie("id", res[0].id);

            if (res[0].role === "admin") {
              setTimeout(() => {
                router.push(routes.dashboard);
              }, 2000);
            } else if (res[0].role === "user") {
              setTimeout(() => {
                router.push(routes.home);
              }, 2000);
            }
          } else {
            setIsLogin(false);
          }
        } catch (error) {
          console.log(error);
        }
        setOpen(true);
      }
    );
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
      <VpnKeyIcon sx={{ width: "45px", height: "45px" }} />
      <Typography component="h1" variant="h4">
        صفحه ورود
      </Typography>
      <Box
        component="form"
        sx={{ mt: 1 }}
        onSubmit={handleSubmit(onSumbitSignIN)}
      >
        <TextField
          margin="normal"
          fullWidth
          placeholder="نام کاربری"
          {...register("username")}
          helperText={errors.username?.message}
          error={!!errors.username}
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
          margin="normal"
          fullWidth
          {...register("password")}
          type="password"
          placeholder="رمز عبور"
          helperText={errors.password?.message}
          error={!!errors.password}
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
          ورود
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={isLogin ? "success" : "error"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {isLogin ? "ورود موفقیت آمیز" : "ورود ناموفق"}
          </Alert>
        </Snackbar>
        <Grid container>
          <Grid item>
            <Button
              onClick={() => router.push(routes.signUp)}
              color="secondary"
            >
              ثبت نام
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignIn;
