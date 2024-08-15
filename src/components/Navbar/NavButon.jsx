import Link from "next/link";

const navButton = () => {
  return (
    <div className="lg:flex hidden flex-row items-center space-x-8 pe-10">
      <Link
        href="/About"
        className="text-color-primary hover:scale-110 duration-300"
      >
        About
      </Link>
      <Link href="" className="text-color-primary hover:scale-110 duration-300">
        Learn
      </Link>
      <Link href="/Blog" className="text-color-primary hover:scale-110 duration-300">
        Blog
      </Link>
      <Link href="" className="text-color-primary hover:scale-110 duration-300">
        Read
      </Link>
    </div>
  );
};
export default navButton
