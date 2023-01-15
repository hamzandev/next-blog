import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import NavMenuLink from "./NavMenuLink";
import SocialLink from "./SocialLink";

import fullLogo from "../public/assets/full-logo.svg";
import humberger from "../public/assets/humberger.svg";
import close from "../public/assets/close.svg";
import { BsGithub, BsYoutube, BsTwitter } from "react-icons/bs";
import {
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";

export default function Navbar() {
  const menus = [
    { title: "UI Design", href: "/posts?category=ui-design" },
    { title: "Web Programming", href: "/posts?category=web-programming" },
    { title: "Android Dev", href: "/posts?category=android-dev" },
    { title: "Framework", href: "/posts?category=framework" },
  ];
  const socials = [
    { title: "GitHub", href: "https://github.com/hamzandev", icon: "BsGithub" },
    {
      title: "Twitter",
      href: "https://twitter.com/hamzandev",
      icon: "BsTwitter",
    },
  ];

  const [show, setShow] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  return (
    <nav className="navbar fixed w-full backdrop-blur-md py-4 bg-gradient-to-tr from-cyan-50/80 to-rose-50/80">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="img-logo lg:w-2/12 w-full lg:p-0 pl-2 pr-5 flex justify-between items-center">
            <Link href={"/"}>
              <Image src={fullLogo} alt="logo" />
            </Link>
            <button className="lg:hidden block" onClick={() => setShow(!show)}>
              <Image src={!show ? humberger : close} alt="humberger-menu" />
            </button>
          </div>
          {/* Menu for Non-mobile */}
          <div
            className={`menus lg:flex hidden lg:flex-row flex-col lg:gap-8 gap-5 lg:pl-5 lg:w-5/12 w-full lg:p-0 p-5`}
          >
            <NavMenuLink>Home</NavMenuLink>
            <NavMenuLink>Articles</NavMenuLink>
            <div className="relative">
              <button
                onClick={() => setShowCategory(!showCategory)}
                className="flex justify-between items-center gap-2 text-gray-500"
              >
                <span className="hover:text-primary hover:underline hover:underline-offset-4">
                  Categories
                </span>
                {!showCategory ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </button>
              {showCategory && (
                <div className="absolute flex flex-col w-48 overflow-hidden justify-center z-10 mt-3 rounded-lg bg-gray-200">
                  {menus.map((item) => (
                    <Link
                      className="text-gray-500 px-5 py-2 hover:bg-primary hover:text-white duration-150"
                      href={item.href}
                      key={item.title}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div
            className={`socials lg:w-3/12 w-full lg:flex hidden lg:justify-center lg:items-center lg:p-0 px-3 gap-2`}
          >
            <span className="text-gray-500">Socials</span>
            <a
              href={"https://github.com/hamzandev"}
              target="_blank"
              rel={"noreferrer"}
            >
              <BsYoutube className="text-red-600 w-12 h-12 bg-white p-3 rounded-full" />
            </a>
            <a
              href={"https://github.com/hamzandev"}
              target="_blank"
              rel={"noreferrer"}
            >
              <BsGithub className="text-gray-600 w-12 h-12 bg-white p-3 rounded-full" />
            </a>
            <a
              href={"https://github.com/hamzandev"}
              target="_blank"
              rel={"noreferrer"}
            >
              <BsTwitter className="text-blue-600 w-12 h-12 bg-white p-3 rounded-full" />
            </a>
          </div>
          <div
            className={` lg:w-1/12 w-full lg:flex hidden lg:justify-end lg:p-0 px-5`}
          >
            <div>
              <Link href={"/auth/signup"}>
                <button className="px-5 py-2 hover:from-primary/80 hover:to-secondary/80 duration-150 hover:shadow rounded-full bg-gradient-to-r from-primary to-secondary border border-primary text-gray-100">
                  Donate
                </button>
              </Link>
            </div>
          </div>
          {/* End Non-mobile menu */}

          {/* Menu for mobile */}
          <div
            className={`${
              show ? "flex" : "hidden"
            } menus flex lg:flex-row flex-col z-10 justify-center lg:gap-8 gap-5 lg:pl-5 lg:w-7/12 w-full lg:p-0 p-5`}
          >
            <NavMenuLink href="/">Home</NavMenuLink>
            <NavMenuLink href="/posts">Articles</NavMenuLink>
            <button
              onClick={() => setShowCategory(!showCategory)}
              className="flex justify-between items-center"
            >
              <span className="text-gray-500">Categories</span>
              {!showCategory ? (
                <IoIosArrowForward className="mr-5 text-gray-500" />
              ) : (
                <IoIosArrowUp className="mr-5 text-gray-500" />
              )}
            </button>
            {showCategory && (
              <div className="menus flex flex-col gap-y-5 px-5">
                {menus.map((menu) => (
                  <NavMenuLink key={menu.title} href={menu.href}>
                    {menu.title}
                  </NavMenuLink>
                ))}
              </div>
            )}
          </div>
          <div
            className={`${
              show ? "flex" : "hidden"
            } socials lg:w-2/12 w-full flex gap-3 lg:justify-center lg:items-center lg:p-0 px-3`}
          >
            <a
              href={"https://github.com/hamzandev"}
              target="_blank"
              rel={"noreferrer"}
            >
              <BsYoutube className="text-red-600 w-12 h-12 bg-white p-3 rounded-full" />
            </a>
            <a
              href={"https://github.com/hamzandev"}
              target="_blank"
              rel={"noreferrer"}
            >
              <BsGithub className="text-gray-600 w-12 h-12 bg-white p-3 rounded-full" />
            </a>
            <a
              href={"https://github.com/hamzandev"}
              target="_blank"
              rel={"noreferrer"}
            >
              <BsTwitter className="text-blue-600 w-12 h-12 bg-white p-3 rounded-full" />
            </a>
          </div>
          <div
            className={`${
              show ? "flex" : "hidden"
            } lg:w-1/12 w-full flex lg:justify-end lg:p-0 px-5`}
          >
            <div className="w-full mt-3">
              <Link href={"/auth/signup"} className="w-full">
                <button className="px-5 py-2 hover:from-primary/80 w-full my-3 hover:to-secondary/80 duration-150 hover:shadow rounded-full bg-gradient-to-r from-primary to-secondary border border-primary text-gray-100">
                  Donate
                </button>
              </Link>
            </div>
          </div>
          {/* End mobile menu */}
        </div>
      </div>
    </nav>
  );
}
