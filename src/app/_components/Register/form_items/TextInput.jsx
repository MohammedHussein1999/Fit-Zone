import React from "react";
import { Field, ErrorMessage } from "formik";
import { Input } from "@mui/material";

const ariaLabel = { "aria-label": "description" };

const TextInput = React.memo(
  ({ label, name, type = "text", error, ...props }) => (
    <label htmlFor={name} className="register-form block mb-4">
      <span className="block mb-1">{label}</span>
      <Field
        as={Input}
        id={name}
        name={name}
        type={type}
        className={`before:border-white after:border-min w-full ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-main`}
        required
        inputProps={ariaLabel}
        {...props}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="error-message text-red-500 text-sm mt-1"
      />
    </label>
  )
);

TextInput.displayName = "TextInput";

export default TextInput;
