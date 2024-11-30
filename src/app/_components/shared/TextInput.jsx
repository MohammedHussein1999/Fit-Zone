import React from "react";

const TextInput = React.memo(
  ({ label, type = "text", name, value, onChange, error, placeholder }) => {
    return (
      <div className="flex flex-col gap-1 w-full mb-4">
        {label && (
          <label htmlFor={name} className="text-sm font-medium text-white">
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 text-seconder focus:ring-min ${
            error ? "border-red-500 focus:ring-red-500" : "border-gray-300"
          }`}
        />
        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
