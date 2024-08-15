import Link from "next/link";
import { useState } from "react";
import AuthButton from "./AuthButton";
import { List, X } from "@phosphor-icons/react";

const navButtonRes = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:hidden flex items-center absolute right-4 mr-6">
        <button
          className="text-color-primary focus:outline-none"
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <div>
              <X size={32} />
            </div>
          ) : (
            <div>
              <List size={32} />
            </div>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-color-secondary rounded-md
         space-y-4 px-2 h-max mt-8 absolute right-4 mr-6 py-2">
          <Link href="/About" className="text-color-primary">
            About
          </Link>
          <Link href="" className="text-color-primary">
            Learn
          </Link>
          <Link href="/Blog" className="text-color-primary">
            Blog
          </Link>
          <Link href="" className="text-color-primary">
            Read
          </Link>
          <AuthButton />
        </div>
      )}
    </>
  );
};

export default navButtonRes;
