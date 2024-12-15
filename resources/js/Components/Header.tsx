import React from "react";
import ApplicationLogo from "./ApplicationLogo";
import PrimaryButton from "./PrimaryButton";
import { Link } from "@inertiajs/react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex items-center justify-between p-3 px-5 bg-white border-b border-gray-200 shadow-md">
      <ApplicationLogo></ApplicationLogo>

      <Link href={route("login")}>
        <PrimaryButton className="bg-primary">Get Started</PrimaryButton>
      </Link>
    </div>
  );
};

export default Header;
