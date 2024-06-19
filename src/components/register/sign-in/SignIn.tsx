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
import { Router } from "next/router";
import { setCookie } from "cookies-next";

// export async function getUserByFilter({
//     name,
//     password,
//   }: {
//     name: string;
//     password: string;
//   }) {
//     const response = await api.get(
//       `/users?name=${name}&password=${password}`
//     );
//     return response.data;
//   }

import { useRouter } from "next/navigation";
import { setLocalStorage } from "@/utils/localStorage";
import { getUserByFilter } from "@/api/user.api";
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

  const onSumbitSignIN = (data) => {
    getUserByFilter({ name: data.name, password: data.password }).then(
      (res) => {
        try {
          if (res.length > 0) {
            setIsLogin(true);
            setLocalStorage("role", res);
            setCookie('role', JSON.stringify({ role: res[0].role, id: res[0].id }));
            setTimeout(() => {
              router.push("/");
            }, 2000);
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
              onClick={() => router.push("?mode=signup")}
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
