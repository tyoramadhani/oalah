"use client";
import { Copyright, GithubLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 w-full bg-gray-200">
      <div className="justify-center">
        <div className="text-color-primary">
          <div className="flex flex-row justify-center items-center gap-4 py-2">
            <Link href="">
              <InstagramLogo size={25} />
            </Link>
            <Link href="">
              <GithubLogo size={25} />
            </Link>
            <Link href="">
              <WhatsappLogo size={25} />
            </Link>
          </div>
          <h3 className="flex justify-center items-center gap-2">
            <Copyright className="font-bold" size={18} />2023 Oalah. All rights
            reserved.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
