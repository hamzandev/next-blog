import Image from "next/image";

import logo from "../public/assets/full-logo.svg";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="image">
        <Image src={logo} alt="logo" />
      </div>
      <h1 className="text-9xl text-transparent bg-gradient-to-tr from-indigo-600 to-primary bg-clip-text font-bold">
        404
      </h1>
      <h4 className="text-gray-700 text-xl">Cuma ada jangkrik disini 😴</h4>
      <a href={"/"} className="text-primary mt-3 hover:underline">
        Kembali ke Beranda 🔄
      </a>
    </div>
  );
}
