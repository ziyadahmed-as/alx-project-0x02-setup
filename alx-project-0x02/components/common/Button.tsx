// components/common/Button.tsx
import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses: Record<ButtonProps["size"], string> = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ label, size, shape, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white font-medium ${sizeClasses[size]} ${shape} hover:bg-blue-600`}
    >
      {label}
    </button>
  );
};

export default Button;
