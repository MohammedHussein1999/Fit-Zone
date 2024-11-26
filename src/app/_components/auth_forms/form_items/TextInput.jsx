import React from "react";
import { TextField } from "@mui/material";

const TextInput = React.memo(
  ({ label, name, type = "text", value, onChange, error }) => (
    <TextField
      label={label}
      className=" text-white border-red-600"
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      error={Boolean(error)}
      helperText={error}
      variant="outlined"
      fullWidth
      // color="main"
      margin="normal"
      // slotProps={{
      //   inputLabel: {
      //     shrink: true,
      //     style: {
      //       color: "white",
      //       textAlign: "right",
      //       width: "100%",
      //       left: "auto",
      //       right: 28,
      //       transformOrigin: "top right",
      //     },
      //   },
      //   htmlInput: {
      //     style: { color: "white" },
      //     placeholder: "أدخل هنا",
      //   },
      //   formHelperText: {
      //     sx: { color: "#ffaaaa" },
      //   },
      // }}
      // sx={{
      //   "& .MuiOutlinedInput-notchedOutline": {
      //     borderColor: "white",
      //   },
      //   "&:hover .MuiOutlinedInput-notchedOutline": {
      //     borderColor: "white",
      //   },
      //   "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      //     borderColor: "white",
      //   },
      //   "& .MuiInputBase-input::placeholder": {
      //     color: "rgba(255, 255, 255, 0.7)",
      //     direction: "rtl",
      //   },
      //   "& .MuiInputLabel-root": {
      //     textAlign: "right",
      //     width: "100%",
      //     left: "auto",
      //     right: 0,
      //     top: -5
      //   }

      // }}
    />
  )
);

TextInput.displayName = "TextInput";

export default TextInput;
