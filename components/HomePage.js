import Image from "next/image";
import FeaturedPost from "./FeaturedPost";

import search from "../public/assets/search.svg";
import dua from "../public/img/2.jpg";
import tiga from "../public/img/3.jpg";
import empat from "../public/img/4.jpg";
import lima from "../public/img/5.jpg";
import PostCard from "./PostCard";

export default function HomePage() {
  const post = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut?",
      category: ["web programming", "frontend"],
      thumbnail: dua,
      user: {
        id: "aksdusdus",
        name: "Hamzan Wahyudi",
        job: "Frontend Dev",
      },
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor sit.",
      category: ["ui design", "frontend"],
      thumbnail: tiga,
      user: {
        id: "kuduyffh",
        name: "Fikro Najiah",
        job: "UI Desinger",
      },
    },
    {
      id: 3,
      title: "Lorem ipsum amet adipisicing Lorem ipsum dolor sit.",
      category: ["ui design", "frontend"],
      thumbnail: empat,
      user: {
        id: "kuduyffh",
        name: "Muhammad Helmi",
        job: "Backend Dev",
      },
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor sit.",
      category: ["ui design", "frontend"],
      thumbnail: lima,
      user: {
        id: "kuduyffh",
        name: "John Doe",
        job: "Android Dev",
      },
    },
  ];

  return (
    <div className="home container mx-auto lg:pt-36 pt-32">
      <h2 className="lg:text-4xl text-3xl font-semibold text-gray-800 text-center ">
        Blog
      </h2>
      <h4 className="text-lg text-primary text-center">All Posts</h4>
      <form className="flex items-center lg:w-[40%] my-3 md:w-[60%] w-[90%] mx-auto border-2 border-gray-300 rounded-full px-3">
        <button className="w-8 h-8">
          <Image src={search} alt="search" className="object-cover w-full" />
        </button>
        <input
          type="search"
          placeholder="Search article ..."
          className="focus:outline-none bg-transparent focus:ring-0 px-3 w-full py-2"
        />
      </form>
      <div className="blog-posts md:px-3 px-5 mx-auto grid my-8 lg:w-full md:w-[65vw]">
        <FeaturedPost />
        <div className="other-posts flex flex-wrap lg:flex-row flex-col lg:mt-10 mt-20">
          {post.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
