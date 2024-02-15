"use client";
// Next.js feature for changing setting from SSR to client (because using handleClick pre-rendering page)

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

// Own custom button for any kinda cases (REUSIBLE BUTTON COMPONENT)
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={true}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
