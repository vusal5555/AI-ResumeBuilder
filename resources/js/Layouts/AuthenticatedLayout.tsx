import Header from "@/components/Header";
import { PropsWithChildren, ReactNode } from "react";

export default function Authenticated({
  children,
}: PropsWithChildren<{ header?: ReactNode }>) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>{children}</main>
    </div>
  );
}
