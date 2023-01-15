import Image from "next/image";
import Link from "next/link";

import logo from "../public/assets/full-logo.svg";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-primary/20 to-rose-500/20 items-center justify-center">
      <div className="image">
        <Image src={logo} alt="logo" />
      </div>
      <h1 className="text-9xl text-transparent bg-gradient-to-tr from-indigo-600 to-primary bg-clip-text font-extrabold">
        404
      </h1>
      <h4 className="text-gray-600 text-lg text-center">
        Tong kosong nyaring bunyinya. <br /> Halaman ini kosong silahkan ke
        beranda
      </h4>
      <Link
        href={"/"}
        className="text-indigo-500 px-6 py-1 rounded-full border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white mt-5 duration-150"
      >
        Kembali ke Beranda 🔄
      </Link>
    </div>
  );
}
