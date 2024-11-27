import React from "react";

function CustmoizedButton({ type, onClick, className, children }) {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${
        className ? className : "bg-white text-seconder"
      } px-3 py-1 rounded-md font-semibold w-full text-center`}
    >
      {children || " "}
    </button>
  );
}

export default CustmoizedButton;
