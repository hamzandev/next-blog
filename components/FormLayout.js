import Image from "next/image";
import Link from "next/link";

import logo from "../public/assets/full-logo.svg";

export default function FormLayout({ children, ...props }) {
  return (
    <div className="flex flex-col lg:p-0 px-5 bg-gray-200 justify-center items-center min-h-screen">
      <div className="grid lg:grid-cols-2 lg:w-[80vw] md:w-[50vw] w-full lg:h-[80vh] shadow-lg rounded-lg overflow-hidden">
        <div className="left lg:flex flex-col items-center justify-center hidden bg-gradient-to-tr from-indigo-500 to-primary text-gray-100">
          <h4 className="text-xl">Hello there,</h4>
          <h2 className="text-5xl font-bold uppercase">{props.title} Now!</h2>
          <span className="uppercase text-sm my-2">or</span>
          <button className="w-[50%] py-3 my-3 rounded-md bg-white text-gray-800">
            🔑 {props.title} with Google
          </button>
          {props.title === "Sign Up" ? (
            <p className="text-gray-100 mt-10">
              I have already have an account.{" "}
              <Link className="hover:text-secondary underline" href={"/auth"}>
                Sign In
              </Link>
            </p>
          ) : (
            <p className="text-gray-100 mt-10">
              I am not have any account.{" "}
              <Link
                className="hover:text-secondary underline"
                href={"/auth/signup"}
              >
                Sign Up
              </Link>
            </p>
          )}
        </div>
        <div className="right bg-white py-10 lg:py-0 flex items-center flex-col justify-center">
          <Link href={"/"} className="image">
            <Image src={logo} alt="logo" />
          </Link>
          <h2 className="text-xl font-semibold uppercase text-gray-800">
            {props?.title}
          </h2>
          <form className="grid lg:w-[70%] w-full lg:px-0 px-8">
            {children}
          </form>
        </div>
      </div>
      {props.title === "Sign Up" ? (
        <p className="lg:hidden block text-gray-500 mt-10">
          I have already have an account.{" "}
          <Link className="text-primary" href={"/auth"}>
            Sign In
          </Link>
        </p>
      ) : (
        <p className="lg:hidden block text-gray-500 mt-10">
          I am not have any account.{" "}
          <Link className="text-primary" href={"/auth/signup"}>
            Sign Up
          </Link>
        </p>
      )}
    </div>
  );
}
