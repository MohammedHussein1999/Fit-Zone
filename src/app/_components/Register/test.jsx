"use client";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const ariaLabel = { "aria-label": "description" };
export default function Inputs() {
  const [showHidden, setShowHidden] = useState();
  function show(e) {
    console.log(e.target.checked);
    setShowHidden(e.target.checked);
  }
  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
     <Box
      className="form-register"
      component="form"
      variant="form"
      sx={{ "& > :not(style)": { m: 1 } }}
      noValidate
      autoComplete="off"
    >
      <label htmlFor="" className="register-form">
        <span>اسم المستخدم</span>
        <Input required type="text" inputProps={ariaLabel} />
      </label>
      <label htmlFor="" className="register-form">
        <span>رقم الهاتف</span>
        <Input required type="tel" inputProps={ariaLabel} />
      </label>
      <label htmlFor="" className="register-form">
        <span>العنوان</span>
        <Input required type="text" inputProps={ariaLabel} />
      </label>
      <label htmlFor="" className="register-form">
        <span>كلمة المرور</span>
        <Input required type="password" inputProps={ariaLabel} />
      </label>
      <label htmlFor="" className="register-form">
        <span>اسم المستخدم</span>
        <Input required type="" inputProps={ariaLabel} />
      </label>
      <div className="option-data">
        <Switch {...label} onClick={show} color="secondary" />
        <dd className="option-data-hint">
          ملاحظة: اضافة بيناتك يساعدنا علي اقتراح افضل الخطط لك فلا تتردد في
          ملاء بيناتك
        </dd>
        {showHidden && (
          <FormControl className="option-data-radio">
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{ color: "white" }}
            >
              اختيارالحالة الاجتماعية
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                required
                className="option-data-radio-option"
                label="سنجولة طالبة"
                value="female"
                control={<Radio />}
              />
              <FormControlLabel
                required
                value="male"
                control={<Radio />}
                label="سنجولة متخرجة"
              />
              <FormControlLabel
                required
                value="other"
                control={<Radio />}
                label="متجوزة جديدة"
              />
              <FormControlLabel
                required
                value="other"
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
      >
        تسجيل
      </Button>
    </Box> 
  );
}
