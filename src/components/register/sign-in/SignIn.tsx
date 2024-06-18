
"use client"

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
//   import { useNavigate } from "react-router-dom";
  import { useForm } from "react-hook-form";
//   import { getUserByFilter } from "../../../../api/user.api";
  import { useState } from "react";
  import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchemaSignIN } from "../validation/RegisterSchema";
import { Router } from "next/router";



export async function getUserByFilter({
    name,
    password,
  }: {
    name: string;
    password: string;
  }) {
    const response = await api.get(
      `/users?name=${name}&password=${password}`
    );
    return response.data;
  }

import { useRouter } from 'next/navigation' 
import { api } from "@/api/config.api";
import { setLocalStorage } from "@/utils/localStorage";
  function SignIn() {
    const [open, setOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const router = useRouter()
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
              setLocalStorage("role", res[0].role);
              setTimeout(() => {
                router.push('/')
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
        <Typography component="h1" variant="h3">
          Sign In Page
        </Typography>
        <Box
          component="form"
          sx={{ mt: 1 }}
          onSubmit={handleSubmit(onSumbitSignIN)}
        >
          <TextField
            margin="normal"
            fullWidth
            placeholder="username"
            {...register("username")}
            helperText={errors.username?.message}
            error={!!errors.username}
            autoFocus
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <PersonIcon />
            //     </InputAdornment>
            //   ),
            // }}
          />
          <TextField
            margin="normal"
            fullWidth
            {...register("password")}
            type="password"
            placeholder="password"
            helperText={errors.password?.message}
            error={!!errors.password}
            autoComplete="current-password"
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <LockIcon />
            //     </InputAdornment>
            //   ),
            // }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="secondary"
          >
            Sign IN
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity={isLogin ? "success" : "error"}
              variant="filled"
              sx={{ width: "100%" }}
            >
              {isLogin ? "login is succesfully" : "login is not successfully"}
            </Alert>
          </Snackbar>
          <Grid container>
            <Grid item>
              <Button onClick={() => (location.href = "?mode=signup")} color="secondary">
                sign up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
  
  export default SignIn;
