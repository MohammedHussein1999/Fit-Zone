// CustomRadioGroup.js
import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@mui/material";

const CustomRadioGroup = ({ label, name, options, value, onChange, error }) => (
  <FormControl component="fieldset" error={Boolean(error)} margin="normal">
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio color="primary" />}
          label={option.label}
        />
      ))}
    </RadioGroup>
    {error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

export default React.memo(CustomRadioGroup);
