import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import NavMenuLink from "./NavMenuLink";
import SocialLink from "./SocialLink";

import fullLogo from "../public/assets/full-logo.svg";
import humberger from "../public/assets/humberger.svg";
import close from "../public/assets/close.svg";

export default function Navbar() {
  const menus = [
    { title: "UI Design", href: "/posts?category=uidesign" },
    { title: "Web Programming", href: "/posts?category=webprogramming" },
    { title: "Android Dev", href: "/posts?category=androiddev" },
    { title: "Framework", href: "/posts?category=framework" },
  ];
  const socials = [
    { title: "GitHub", href: "https://github.com/hamzandev" },
    { title: "Twitter", href: "https://twitter.com/hamzandev" },
  ];

  const [show, setShow] = useState(false);

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
          <ul
            className={`menus lg:flex hidden lg:flex-row flex-col justify-center lg:gap-8 gap-5 lg:pl-5 lg:w-7/12 w-full lg:p-0 p-5`}
          >
            {menus.map((menu) => (
              <NavMenuLink key={menu.title} href={menu.href}>
                {menu.title}
              </NavMenuLink>
            ))}
          </ul>
          <ul
            className={`socials lg:w-2/12 w-full lg:flex hidden lg:justify-center lg:items-center lg:p-0 px-3`}
          >
            {socials.map((social) => (
              <SocialLink key={social.title} href={social.href}>
                {social.title}
              </SocialLink>
            ))}
          </ul>
          <ul
            className={` lg:w-1/12 w-full lg:flex hidden lg:justify-end lg:p-0 px-5`}
          >
            <li>
              <Link href={"/auth/signup"}>
                <button className="px-5 py-2 hover:from-primary/80 hover:to-secondary/80 duration-150 hover:shadow rounded-full bg-gradient-to-r from-primary to-secondary border border-primary text-gray-100">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
          {/* End Non-mobile menu */}

          {/* Menu for mobile */}
          <ul
            className={`${
              show ? "flex" : "hidden"
            } menus flex lg:flex-row flex-col justify-center lg:gap-8 gap-5 lg:pl-5 lg:w-7/12 w-full lg:p-0 p-5`}
          >
            {menus.map((menu) => (
              <NavMenuLink key={menu.title} href={menu.href}>
                {menu.title}
              </NavMenuLink>
            ))}
          </ul>
          <ul
            className={`${
              show ? "flex" : "hidden"
            } socials lg:w-2/12 w-full flex lg:justify-center lg:items-center lg:p-0 px-3`}
          >
            {socials.map((social) => (
              <SocialLink key={social.title} href={social.href}>
                {social.title}
              </SocialLink>
            ))}
          </ul>
          <ul
            className={`${
              show ? "flex" : "hidden"
            } lg:w-1/12 w-full flex lg:justify-end lg:p-0 px-5`}
          >
            <li>
              <Link href={"/auth/signup"}>
                <button className="px-5 py-2 hover:from-primary/80 hover:to-secondary/80 duration-150 hover:shadow rounded-full bg-gradient-to-r from-primary to-secondary border border-primary text-gray-100">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
          {/* End mobile menu */}
        </div>
      </div>
    </nav>
  );
}
