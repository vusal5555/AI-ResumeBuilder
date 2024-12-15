import { ButtonHTMLAttributes } from "react";
import { Button } from "./ui/button";

export default function PrimaryButton({
  className = "",
  disabled,
  children,
  variant,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      variant={variant}
      {...props}
      className={
        `inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out  focus:outline-none  ${
          disabled && "opacity-25"
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
