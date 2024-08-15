import Link from "next/link";

const AuthButton = () => {
  return (
    <div className="lg:flex hidden items-center gap-2">
          <div className="bg-color-secondary px-4 py-2 text-color-primary rounded-md hover:scale-110 duration-300">
            <Link href="">LogIn</Link>
          </div>
          <Link
            href=""
            className="text-color-primary hover:scale-110 duration-300"
          >
            SignIn
          </Link>
        </div>
  );
};
export default AuthButton;
