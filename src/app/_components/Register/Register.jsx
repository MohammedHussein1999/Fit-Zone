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
import { Formik, Field, ErrorMessage } from "formik";
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
  target: Yup.string().required("اختيار الحالة الاجتماعية مطلوب"),
  weight: Yup.string().required("اختيار الحالة الاجتماعية مطلوب"),
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
        socialStatus: "",
        target: "",
        weight: "",
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
            <span> الاسم بالكامل</span>
            <Field
              as={Input}
              className=" before:border-white  after:border-min"
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
            <span>رقم الواتساب</span>
            <Field
              className=" before:border-white  after:border-min"
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
              className=" before:border-white  after:border-min"
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
              className=" before:border-white  after:border-min"
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
          <label htmlFor="text" className="register-form">
            <span> كود ااحالة</span>
            <Field
              className=" before:border-white  after:border-min"
              as={Input}
              name="get"
              required
              type="text"
              inputProps={ariaLabel}
            />
          </label>

          <div className="option-data">
            <Switch inputProps={ariaLabel} onChange={show} color="secondary" />
            <dd className="option-data-hint">
              ملاحظة: اضافة بيناتك يساعدنا علي اقتراح افضل الخطط لك فلا تتردد في
              ملاء بيناتك
            </dd>

            {showHidden && (
              <div>
                <div className=" radio-option flex flex-row flex-wrap">
                  <FormControl className="option-data-radio">
                    <FormLabel
                      id="socialStatus-group-label"
                      className="text-white"
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
                        control={<Radio className=" text-purple-400" />}
                        label="سنجولة طالبة"
                      />
                      <FormControlLabel
                        value="graduate"
                        control={<Radio className=" text-purple-400" />}
                        label="سنجولة متخرجة"
                      />
                      <FormControlLabel
                        value="married_new"
                        control={<Radio className=" text-purple-400" />}
                        label="متجوزة جديدة"
                      />
                      <FormControlLabel
                        value="married_with_kids"
                        control={<Radio className=" text-purple-400" />}
                        label="متجوزة ومعاي اولاد"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div>
                  <FormControl className="option-data-radio">
                    <FormLabel
                      id="socialStatus-group-label"
                      className="text-white"
                      sx={{ color: "white" }}
                    >
                      هدفك ايه
                    </FormLabel>
                    <RadioGroup
                      name="target"
                      value={values.target}
                      onChange={(e) => setFieldValue("target", e.target.value)}
                    >
                      <FormControlLabel
                        value="Weight_loss"
                        control={<Radio className=" text-purple-400" />}
                        label="تخسيس وريشيبينج"
                      />
                      <FormControlLabel
                        value="weight_gain"
                        control={<Radio className=" text-purple-400" />}
                        label="زيادة وزن وعلاج نحافة"
                      />
                      <FormControlLabel
                        value="entertainment"
                        control={<Radio className=" text-purple-400" />}
                        label="ترفية ورقص شرقي"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div>
                  <FormControl className="option-data-radio">
                    <FormLabel
                      id="socialStatus-group-label"
                      className="text-white"
                      sx={{ color: "white" }}
                    >
                      هدفك ايه
                    </FormLabel>
                    <RadioGroup
                      name="weight"
                      value={values.weight}
                      onChange={(e) => setFieldValue("weight", e.target.value)}
                    >
                      <FormControlLabel
                        value="Weight_loss"
                        control={<Radio className=" text-purple-400" />}
                        label="تخسيس وريشيبينج"
                      />
                      <FormControlLabel
                        value="weight_gain"
                        control={<Radio className=" text-purple-400" />}
                        label="زيادة وزن وعلاج نحافة"
                      />
                      <FormControlLabel
                        value="entertainment"
                        control={<Radio className=" text-purple-400" />}
                        label="ترفية ورقص شرقي"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
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
