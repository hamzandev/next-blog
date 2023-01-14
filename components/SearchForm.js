import Image from "next/image";

import search from "../public/assets/search.svg";

export default function SearchForm({ ...props }) {
  const doSubmit = (e) => {
    e.preventDefault();
    console.log("Submited");
  };

  return (
    <form className="flex items-center lg:w-[40%] my-3 md:w-[60%] w-[90%] mx-auto border-2 border-gray-300 rounded-full px-3">
      <button className="w-8 h-8">
        <Image src={search} alt="search" className="object-cover w-full" />
      </button>
      <input
        {...props}
        type="search"
        name="keyword"
        placeholder="Search article ..."
        className="focus:outline-none bg-transparent focus:ring-0 px-3 w-full py-2"
      />
    </form>
  );
}
