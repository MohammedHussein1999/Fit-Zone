"use client";
import React, { useCallback, useMemo } from "react";
import {
  Box,
  Button,
  Switch,
  Typography,
  Paper,
  FormHelperText,
} from "@mui/material";
import Link from "next/link";

import useForm from "@/app/_hook/useForm";
import TextInput from "../form_items/TextInput";
import CustomRadioGroup from "../form_items/CustomRadioGroup";
import Logo from "../../Logo/Logo";
const Register = () => {
  const initialValues = {
    username: "",
    phone: "",
    address: "",
    password: "",
    get: "",
    socialStatus: "",
    target: "",
    weight: "",
    showHidden: false,
  };

  const validate = useCallback((values) => {
    const errors = {};
    if (!values.username) errors.username = "اسم المستخدم مطلوب";
    if (!values.phone) {
      errors.phone = "رقم الهاتف مطلوب";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "رقم الهاتف غير صحيح";
    }
    if (!values.address) errors.address = "العنوان مطلوب";
    if (!values.password) {
      errors.password = "كلمة المرور مطلوبة";
    } else if (values.password.length < 6) {
      errors.password = "كلمة المرور يجب أن تكون 6 حروف على الأقل";
    }
    if (!values.get) errors.get = "كود الإحالة مطلوب";

    if (values.showHidden) {
      if (!values.socialStatus)
        errors.socialStatus = "اختيار الحالة الاجتماعية مطلوب";
      if (!values.target) errors.target = "اختيار الهدف مطلوب";
      if (!values.weight) errors.weight = "اختيار الوزن مطلوب";
    }

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
        console.log(formData);
      }
    },
    [isValid, formData]
  );

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
    <Box
      className="form-register max-w-md mx-auto"
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{ mt: 4, color: "white" }}
    >
      <Paper
        elevation={0}
        sx={{ p: 4, borderRadius: 2, color: "white" }}
        className="bg-secondary text-white"
      >
        <Box
          textAlign="center"
          className="flex items-center justify-center flex-col"
          mb={3}
        >
          <Logo />
          <Typography variant="h5" component="h1" mt={2}>
            انشاء حساب جديد
          </Typography>
        </Box>
        <div className="form-input text-white">
          {/* Username Field */}
          <TextInput
            label="الاسم بالكامل"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
          />

          {/* Phone Field */}
          <TextInput
            label="رقم الواتساب"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />

          {/* Address Field */}
          <TextInput
            label="العنوان"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
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

          {/* Referral Code Field */}
          <TextInput
            label="كود الإحالة"
            name="get"
            value={formData.get}
            onChange={handleChange}
            error={errors.get}
          />

          {/* Toggle Switch for Additional Options */}
          <Box
            display="flex"
            alignItems="center"
            mt={2}
            mb={2}
            sx={{ justifyContent: "space-between" }}
          >
            <Typography variant="body1">
              هل ترغب في إضافة المزيد من البيانات؟
            </Typography>
            <Switch
              inputProps={{ "aria-label": "Toggle additional options" }}
              name="showHidden"
              onChange={handleChange}
              color="primary"
              checked={formData.showHidden}
            />
          </Box>
          {formData.showHidden && (
            <FormHelperText sx={{ mb: 2, color: "#ededed" }}>
              إضافة بياناتك يساعدنا على اقتراح أفضل الخطط لك فلا تتردد في ملء
              بياناتك.
            </FormHelperText>
          )}

          {/* Conditionally Render Additional Options */}
          {formData.showHidden && (
            <Box className="additional-options flex flex-col" mt={2}>
              {/* Social Status */}
              <CustomRadioGroup
                label="اختيار الحالة الاجتماعية"
                name="socialStatus"
                options={socialStatusOptions}
                value={formData.socialStatus}
                onChange={handleChange}
                error={errors.socialStatus}
              />

              {/* Target */}
              <CustomRadioGroup
                label="هدفك ايه"
                name="target"
                options={targetOptions}
                value={formData.target}
                onChange={handleChange}
                error={errors.target}
              />

              {/* Weight */}
              <CustomRadioGroup
                label="الوزن"
                name="weight"
                options={weightOptions}
                value={formData.weight}
                onChange={handleChange}
                error={errors.weight}
              />
            </Box>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="main"
            fullWidth
            sx={{ mt: 3 }}
            disabled={!isValid}
          >
            تسجيل
          </Button>

          <Box textAlign="center" mt={2}>
            <Typography variant="body2">
              لديك حساب بالفعل؟{" "}
              <Link href="/login" passHref legacyBehavior>
                <Button color="main" component="a">
                  تسجيل الدخول
                </Button>
              </Link>
            </Typography>
          </Box>
        </div>
      </Paper>
    </Box>
  );
};

export default React.memo(Register);
