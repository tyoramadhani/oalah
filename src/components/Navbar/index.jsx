"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "/public/assets/Logo.svg";
import NavButtonRes from "./NavButtonRes";
import AuthButton from "./AuthButton";
import NavButton from "./NavButon";

const Navbar = () => {
  return (
    <header className="bg-color-accent p-4">
      <div className="container mx-auto flex">
        <Link href="/" className="text-color-primary font-bold text-2xl">
          <Image src={Logo} alt="logo" width={100} height={50} />
        </Link>
        <div className="flex flex-row items-center absolute right-4 mr-6">
          <NavButton />
          <AuthButton />
        </div>
        <NavButtonRes />
      </div>
    </header>
  );
};

export default Navbar;
