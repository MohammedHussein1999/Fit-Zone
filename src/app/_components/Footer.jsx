"use client"
import React from "react";
import { AcmeLogo } from "./AcmeLogo";
import { useTheme } from "@emotion/react";

export default function Footer() {
const theme = useTheme();
  return (
    <div className={`div-footer bg-[#242424]`}>
      <div className="flex w-full  justify-start p-5 items-start">
        <AcmeLogo className="" />
      </div>
      <p className="text-background">
        ☠️{new Date().getFullYear()} Fit Zone. All rights reserved.☠️
      </p>
    </div>
  );
}
