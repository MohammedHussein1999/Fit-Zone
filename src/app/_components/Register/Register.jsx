"use client";
import { useState } from "react";
import {
  Box,
  Input,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Switch,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ariaLabel = { "aria-label": "description" };

// التحقق من صحة البيانات باستخدام Yup
const validationSchema = Yup.object({
  username: Yup.string().required("اسم المستخدم مطلوب"),
  phone: Yup.string()
    .required("رقم الهاتف مطلوب")
    .matches(/^\d{10}$/, "رقم الهاتف غير صحيح"),
  address: Yup.string().required("العنوان مطلوب"),
  password: Yup.string()
    .required("كلمة المرور مطلوبة")
    .min(6, "كلمة المرور يجب أن تكون 6 حروف على الأقل"),
  socialStatus: Yup.string().required("اختيار الحالة الاجتماعية مطلوب"),
});

export default function Register() {
  const [showHidden, setShowHidden] = useState(false);

  function show(e) {
    setShowHidden(e.target.checked);
  }

  return (
    <Formik
      initialValues={{
        username: "",
        phone: "",
        address: "",
        password: "",
        socialStatus: "single",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values); // هنا يمكنك إرسال البيانات إلى الخادم
      }}
    >
      {({ setFieldValue, values, errors, touched, isValid, dirty }) => (
        <Box
          className="form-register"
          component="form"
          sx={{ "& > :not(style)": { m: 1 } }}
          noValidate
          autoComplete="off"
        >
          <label htmlFor="username" className="register-form">
            <span>اسم المستخدم</span>
            <Field
              as={Input}
              name="username"
              required
              inputProps={ariaLabel}
              error={touched.username && !!errors.username}
            />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red" }}
            />
          </label>

          <label htmlFor="phone" className="register-form">
            <span>رقم الهاتف</span>
            <Field
              as={Input}
              name="phone"
              required
              type="tel"
              inputProps={ariaLabel}
              error={touched.phone && !!errors.phone}
            />
            <ErrorMessage
              name="phone"
              component="div"
              style={{ color: "red" }}
            />
          </label>

          <label htmlFor="address" className="register-form">
            <span>العنوان</span>
            <Field
              as={Input}
              name="address"
              required
              inputProps={ariaLabel}
              error={touched.address && !!errors.address}
            />
            <ErrorMessage
              name="address"
              component="div"
              style={{ color: "red" }}
            />
          </label>

          <label htmlFor="password" className="register-form">
            <span>كلمة المرور</span>
            <Field
              as={Input}
              name="password"
              required
              type="password"
              inputProps={ariaLabel}
              error={touched.password && !!errors.password}
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </label>

          <div className="option-data">
            <Switch inputProps={ariaLabel} onChange={show} color="secondary" />
            <dd className="option-data-hint">
              ملاحظة: اضافة بيناتك يساعدنا علي اقتراح افضل الخطط لك فلا تتردد في
              ملاء بيناتك
            </dd>

            {showHidden && (
              <FormControl className="option-data-radio">
                <FormLabel
                  id="socialStatus-group-label"
                  sx={{ color: "white" }}
                >
                  اختيار الحالة الاجتماعية
                </FormLabel>
                <RadioGroup
                  name="socialStatus"
                  value={values.socialStatus}
                  onChange={(e) =>
                    setFieldValue("socialStatus", e.target.value)
                  }
                >
                  <FormControlLabel
                    value="single"
                    control={<Radio />}
                    label="سنجولة طالبة"
                  />
                  <FormControlLabel
                    value="graduate"
                    control={<Radio />}
                    label="سنجولة متخرجة"
                  />
                  <FormControlLabel
                    value="married_new"
                    control={<Radio />}
                    label="متجوزة جديدة"
                  />
                  <FormControlLabel
                    value="married_with_kids"
                    control={<Radio />}
                    label="متجوزة ومعاي اولاد"
                  />
                </RadioGroup>
              </FormControl>
            )}
          </div>

          <Button
            type="submit"
            variant="contained"
            className="button-form button-form-register"
            color="success"
            disabled={!isValid || !dirty} // منع الإرسال إذا كانت البيانات غير صحيحة أو غير مكتملة
          >
            تسجيل
          </Button>
        </Box>
      )}
    </Formik>
  );
}
