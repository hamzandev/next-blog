import Image from "next/image";
import FeaturedPost from "./FeaturedPost";
import Link from "next/link";
import PostCard from "./PostCard";
import SearchForm from "./SearchForm";

import search from "../public/assets/search.svg";
import dua from "../public/img/2.jpg";
import tiga from "../public/img/3.jpg";
import empat from "../public/img/4.jpg";
import lima from "../public/img/5.jpg";
import logo from "../public/assets/full-logo.svg";

export default function HomePage({ posts }) {
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
      {/* <h2 className="flex justify-center items-center lg:w-[18%] md:w-[24%] w-
      [30%] mx-auto">
        <Image src={logo} alt="Logo" className="w-full" />
      </h2>
      <SearchForm />
      <div className="blog-posts md:px-3 px-5 mx-auto grid my-8 lg:w-full md:w-[65vw]">
        <FeaturedPost />
        <div className="other-posts flex flex-wrap lg:flex-row flex-col lg:mt-10 mt-20">
          {post.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
        <Link href={"/posts"} className="block mx-auto">
          <span className="text-gray-500 hover:text-primary underline underline-offset-4">
            See all Article
          </span>
        </Link>
      </div> */}

      <h2 className="text-transparent text-3xl font-semibold font-mona bg-clip-text bg-gradient-to-r from-indigo-500 text-center to-rose-400">
        Blog
      </h2>
      <SearchForm />
      <div className="lg:px-0 px-5">
        <FeaturedPost />
        <div className="flex lg:flex-row mt-20 lg:mt-0 flex-wrap flex-col">
          {posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
        </div>
      </div>
      <Link href={"/posts"} className="block mx-auto">
        <span className="text-gray-500 text-center block mx-auto mb-20 hover:text-primary underline underline-offset-4">
          View all Article
        </span>
      </Link>
    </div>
  );
}
