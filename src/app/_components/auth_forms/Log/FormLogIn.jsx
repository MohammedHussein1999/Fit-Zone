"use client"
import React, { useCallback } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import TextInput from "../form_items/TextInput";
import useForm from "@/app/_hook/useForm";
import Logo from "../../Logo/Logo";
import { useRouter } from "next/navigation";



const Login = () => {
  const router = useRouter()
  const initialValues = {
    username: "",
    password: "",
  };

  const validate = useCallback((values) => {
    const errors = {};
    if (!values.username) errors.username = "اسم المستخدم مطلوب";
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
        router.replace('/home')
      }
    },
    [isValid,formData, router]
  );

  return (
    <Box
      className="form-login max-w-md mx-auto "
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{ mt: 4 }}
    >
      <Paper
        elevation={0}
        sx={{ p: 4, borderRadius: 2 }}
        className="bg-secondary text-white"
      >
        <Box
          textAlign="center"
          className="flex items-center justify-center flex-col"
          mb={5}
        >
          <Logo/>
          <Typography variant="h5" component="h1" mt={2}>
            تسجيل دخول
          </Typography>
        </Box>
        <div className="form-input">
          {/* Username Field */}
          <TextInput
            label="اسم المستخدم"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
          />

          {/* Password Field */}
          <TextInput
            label="كلمة المرور"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color={"main"}
            fullWidth
            sx={{
              mt: 3,
              "&:disabled": {
                color: "#52525b",
              },
            }}
            disabled={!isValid}
          >
            دخول
          </Button>
        </div>
      </Paper>
    </Box>
  );
};

export default React.memo(Login);
