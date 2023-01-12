import Image from "next/image";
import NavMenuLink from "../components/NavMenuLink";

import logo from "../public/assets/full-logo.svg";

export default function Footer() {
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

  return (
    <footer className="bg-gradient-to-tr flex flex-col from-primary/10 to-rose-500/10 py-3">
      <div className="flex sm:order-2 md:flex-row flex-col container mb-3 mx-auto items-center justify-between">
        <div className="logo">
          <Image src={logo} alt="logo-svg" />
        </div>
        <h4 className="text-gray-500">
          Made with 💖 by{" "}
          <a
            href="https://instagram.com/hamzanwahyu.me"
            className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Hamzan Wahyudi
          </a>
        </h4>
      </div>
      <div className="lg:px-0 px-8 grid container mx-auto lg:grid-cols-3 py-3">
        <div className="menus">
          <h3 className="lg:text-xl text-lg font-semibold">📸 Menus</h3>
          <ul className="grid gap-3 my-5">
            {menus.map((menu) => (
              <li key={menu.title} className="w-max">
                <NavMenuLink href={menu.href}>📌 {menu.title}</NavMenuLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="socials grid">
          <h3 className="lg:text-xl text-lg font-semibold">🌏 Social</h3>
          <ul className="grid gap-3 my-5">
            {socials.map((social) => (
              <li key={social.title} className="w-max">
                <NavMenuLink href={social.href}>💡 {social.title}</NavMenuLink>
              </li>
            ))}
          </ul>
          <span className="text-gray-500">📧 hamzankechil@gmail.com</span>
        </div>
        <div className="address">
          <h3 className="lg:text-xl text-lg font-semibold">📍 Address</h3>
          <p className="text-gray-500 mt-3">
            Jl. Lintas Sumbawa - Bima KM 25 desa Langam, Kecamatan Lopok,
            Kabupaten Sumbawa, NTB, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
