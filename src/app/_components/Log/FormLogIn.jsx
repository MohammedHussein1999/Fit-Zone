
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function StateTextFields() {
  // التحقق من صحة المدخلات باستخدام Yup
  const validationSchema = Yup.object({
    phone: Yup.string()
      .required("رقم الهاتف مطلوب")
      .matches(/^\d{10}$/, "رقم الهاتف يجب أن يتكون من 10 أرقام فقط"),
    password: Yup.string()
      .required("كلمة المرور مطلوبة")
      .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
  });

  return (
    <Formik
      initialValues={{
        phone: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values); // إرسال البيانات إلى الخادم أو التعامل معها هنا
      }}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Box
          className="form-log-in"
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          {/* حقل رقم الهاتف */}
          <label htmlFor="phone">
            <span>رقم الهاتف</span>
            <TextField
              id="outlined-controlled"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && !!errors.phone}
              helperText={touched.phone && errors.phone}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { border: "none" },
                },
              }}
              required
            />
          </label>

          {/* حقل كلمة المرور */}
          <label htmlFor="password">
            <span>كلمة المرور</span>
            <TextField
              id="outlined-uncontrolled"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { border: "none" },
                },
              }}
              required
            />
          </label>

          {/* زر تسجيل الدخول */}
          <Button
            type="submit"
            variant="contained"
            className="button-form w-full"
            color="success"
            disabled={
              !values.phone ||
              !values.password ||
              !!errors.phone ||
              !!errors.password
            }
          >
            تسجيل دخول
          </Button>
        </Box>
      )}
    </Formik>
  );
}

