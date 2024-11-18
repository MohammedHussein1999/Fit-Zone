import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { ErrorMessage } from "formik";

const CustomRadioGroup = React.memo(
  ({ label, name, options, values, setFieldValue }) => (
    <FormControl component="fieldset" className="option-data-radio mb-4">
      <FormLabel
        component="legend"
        className="text-white mb-2"
        sx={{ color: "white" }}
      >
        {label}
      </FormLabel>
      <RadioGroup
        name={name}
        value={values[name]}
        onChange={(e) => setFieldValue(name, e.target.value)}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio className="text-min" />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      <ErrorMessage
        name={name}
        component="div"
        className="error-message text-red-500 text-sm mt-1"
      />
    </FormControl>
  )
);

// Set displayName for debugging purposes
CustomRadioGroup.displayName = "CustomRadioGroup";

export default CustomRadioGroup;
