import { InputHTMLAttributes } from "react";
import { CheckboxComponent } from "./ui/checkbox";

export default function Checkbox({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <CheckboxComponent
      className={
        "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " +
        className
      }
    />
  );
}
