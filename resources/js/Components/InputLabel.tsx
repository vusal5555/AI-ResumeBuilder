import { LabelHTMLAttributes } from "react";
import { Label } from "./ui/label";

export default function InputLabel({
  value,
  className = "",
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
  return (
    <Label
      {...props}
      className={`block text-sm font-medium text-gray-700 ` + className}
    >
      {value ? value : children}
    </Label>
  );
}
