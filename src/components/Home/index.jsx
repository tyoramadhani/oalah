"use client";
import Image from "next/image";
import Oalah from "/public/assets/Oalah.svg";
import HomePage from "/public/assets/HomePage.svg";
import Link from "next/link";
import { ArrowDown } from "@phosphor-icons/react";

import LogoJavascript from "/public/assets/logo javascript.svg"
import AboutHome from "./AboutHome";
import Article from "./Article";

const Home = () => {
  return (
    <>
    <section className="grid lg:grid-cols-2">
      <div className="flex flex-col text-color-primary pt-14 sm:pt-20 md:pt-28 lg:pt-32 px-4 sm:px-8 md:px-16 lg:px-28">
        <Image src={HomePage} alt="svg" width={600} height={350} />
        <div className="bg-color-secondary w-max my-28 mx-16 py-4 px-4 rounded-md hover:scale-110 duration-300">
          <Link href="" className="flex flex-row items-center text-xl sm:text-2xl md:text-3xl gap-2">
            Learn More <ArrowDown size={28} />
          </Link>
        </div>
      </div>
      <div className="absolute right-0 sm:right-32 lg:right-32 pt-24 hidden lg:block">
        <Image src={Oalah} alt="svg" width={500} height={500} />
      </div>
    </section>

    <section>
      <AboutHome/>
    </section>
    
    <section>
      <Article/>
    </section>
  </>
  );
};
export default Home;
