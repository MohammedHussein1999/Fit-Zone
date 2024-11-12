import React from "react";
import { AcmeLogo } from "./AcmeLogo";

export default function Footer() {
  return (
    <div className="div-footer">
      <div className="flex w-full  justify-start p-5 items-start">
        <AcmeLogo className="" />
      </div>
      <p className="text-background">
        �� {new Date().getFullYear()} Fit Zone. All rights reserved.
      </p>
    </div>
  );
}
