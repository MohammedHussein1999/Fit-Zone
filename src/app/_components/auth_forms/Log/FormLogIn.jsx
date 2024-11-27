"use client";
import React, { useCallback } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import TextInput from "../../shared/TextInput";
import useForm from "@/app/_hook/useForm";
import Logo from "../../Logo/Logo";
import { useRouter } from "next/navigation";
import CustmoizedButton from "../../shared/CustmoizedButton";

const Login = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const validate = useCallback((values) => {
    const errors = {};
    if (!values.email) errors.email = "البريد الالكتروني مطلـوب";
    if (!values.password) errors.password = "كلمة المرور مطلوبة";
    return errors;
  }, []);

  const { formData, errors, isValid, handleChange } = useForm(
    initialValues,
    validate
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (isValid) {
        router.replace("/home");
      }
    },
    [isValid, router]
  );

  return (
    <Box
      className="form-logi w-96"
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{ mt: 4 }}
    >
      <Paper
        elevation={0}
        sx={{ p: 4, borderRadius: 2 }}
        className="bg-secondary text-white "
      >
        <Box
          textAlign="center"
          className="flex items-center justify-center flex-col"
          mb={5}
        >
          <Logo />
          <Typography variant="h5" component="h1" mt={2}>
            تسجيل دخول
          </Typography>
        </Box>
        <TextInput
          label="البريد الالكتروني "
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          error={errors.email}
        />
        <TextInput
          label="الباسـورد"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="*********01"
          error={errors.password}
        />
        <CustmoizedButton
          type={"submit"}
          className={
            "bg-min mt-4 py-[7px]  transition-colors duration-300 antialiased hover:bg-seconder"
          }
        >
          تسجيل دخول
        </CustmoizedButton>
      </Paper>
    </Box>
  );
};

export default React.memo(Login);
