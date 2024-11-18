"use client";
import React, { useState, useCallback, useMemo } from "react";
import { Box, Button, Switch } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../form_items/TextInput";
import CustomRadioGroup from "../form_items/CustomRadioGroup";


// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("اسم المستخدم مطلوب"),
  phone: Yup.string()
    .required("رقم الهاتف مطلوب")
    .matches(/^\d{10}$/, "رقم الهاتف غير صحيح"),
  address: Yup.string().required("العنوان مطلوب"),
  password: Yup.string()
    .required("كلمة المرور مطلوبة")
    .min(6, "كلمة المرور يجب أن تكون 6 حروف على الأقل"),
  get: Yup.string().required("كود الإحالة مطلوب"),
  socialStatus: Yup.string().when("showHidden", {
    is: true,
    then: Yup.string().required("اختيار الحالة الاجتماعية مطلوب"),
    otherwise: Yup.string(),
  }),
  target: Yup.string().when("showHidden", {
    is: true,
    then: Yup.string().required("اختيار الهدف مطلوب"),
    otherwise: Yup.string(),
  }),
  weight: Yup.string().when("showHidden", {
    is: true,
    then: Yup.string().required("اختيار الوزن مطلوب"),
    otherwise: Yup.string(),
  }),
});

export default function Register() {
  const [showHidden, setShowHidden] = useState(false);

  // Event handler for toggle switch, memoized to prevent re-creation
  const handleToggle = useCallback((e) => {
    setShowHidden(e.target.checked);
  }, []);

  // Memoized radio group options to prevent re-creation on each render
  const socialStatusOptions = useMemo(
    () => [
      { value: "single", label: "سنجولة طالبة" },
      { value: "graduate", label: "سنجولة متخرجة" },
      { value: "married_new", label: "متزوجة جديدة" },
      { value: "married_with_kids", label: "متزوجة ومعاي أولاد" },
    ],
    []
  );

  const targetOptions = useMemo(
    () => [
      { value: "Weight_loss", label: "تخسيس وريشيبينج" },
      { value: "weight_gain", label: "زيادة وزن وعلاج نحافة" },
      { value: "entertainment", label: "ترفيه ورقص شرقي" },
    ],
    []
  );

  const weightOptions = useMemo(
    () => [
      { value: "light", label: "خفيف" },
      { value: "normal", label: "طبيعي" },
      { value: "heavy", label: "ثقيل" },
    ],
    []
  );

  return (
    <Formik
      initialValues={{
        username: "",
        phone: "",
        address: "",
        password: "",
        socialStatus: "",
        target: "",
        weight: "",
        get: "",
        showHidden: false, // Added to tie validation with showHidden
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values); // Here you can send data to the server
      }}
    >
      {({ setFieldValue, values, errors, touched, isValid, dirty }) => (
        <Box
          className="form-register max-w-sm mx-auto p-6 bg-secondary shadow-md rounded-md"
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
          noValidate
          autoComplete="off"
        >
          {/* Username Field */}
          <TextInput
            label="الاسم بالكامل"
            name="username"
            error={touched.username && Boolean(errors.username)}
          />

          {/* Phone Field */}
          <TextInput
            label="رقم الواتساب"
            name="phone"
            type="tel"
            error={touched.phone && Boolean(errors.phone)}
          />

          {/* Address Field */}
          <TextInput
            label="العنوان"
            name="address"
            error={touched.address && Boolean(errors.address)}
          />

          {/* Password Field */}
          <TextInput
            label="كلمة المرور"
            name="password"
            type="password"
            error={touched.password && Boolean(errors.password)}
          />

          {/* Referral Code Field */}
          <TextInput
            label="كود الإحالة"
            name="get"
            error={touched.get && Boolean(errors.get)}
          />

          {/* Toggle Switch for Additional Options */}
          <div className="option-data flex items-center space-x-2 mb-4">
            <Switch
              inputProps={{ "aria-label": "Toggle additional options" }}
              onChange={(e) => {
                handleToggle(e);
                setFieldValue("showHidden", e.target.checked);
              }}
              color="secondary" // Use 'primary' or 'secondary' from the palette
              checked={showHidden}
            />
            <span className="option-data-hint text-gray-600">
              ملاحظة: إضافة بياناتك يساعدنا على اقتراح أفضل الخطط لك فلا تتردد
              في ملء بياناتك
            </span>
          </div>

          {/* Conditionally Render Additional Options */}
          {showHidden && (
            <Box className="additional-options space-y-4 flex flex-col">
              {/* Social Status */}
              <CustomRadioGroup
                label="اختيار الحالة الاجتماعية"
                name="socialStatus"
                options={socialStatusOptions}
                values={values}
                setFieldValue={setFieldValue}
              />

              {/* Target */}
              <CustomRadioGroup
                label="هدفك ايه"
                name="target"
                options={targetOptions}
                values={values}
                setFieldValue={setFieldValue}
              />

              {/* Weight */}
              <CustomRadioGroup
                label="الوزن"
                name="weight"
                options={weightOptions}
                values={values}
                setFieldValue={setFieldValue}
              />
            </Box>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            className="button-form button-form-register mt-4 bg-main disabled:bg-primary"
            color="success"
            disabled={!isValid || !dirty} // Prevent submission if data is invalid or incomplete
          >
            تسجيل
          </Button>
        </Box>
      )}
    </Formik>
  );
}
