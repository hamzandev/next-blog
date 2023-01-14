import { useRouter } from "next/router";

import Layout from "./Layout";
import PostCard from "./PostCard";

import dua from "../public/img/2.jpg";
import tiga from "../public/img/3.jpg";
import empat from "../public/img/4.jpg";
import lima from "../public/img/5.jpg";
import SearchForm from "./SearchForm";

export default function ResultSearchPosts() {
  const { query } = useRouter();

  const resultPosts = [
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
    <Layout pageTitle="Result Search">
      <div className="container mx-auto pt-32 pb-20">
        <h2 className="text-gray-800 text-3xl mx-auto text-center mb-5">
          Result for :{" "}
          <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
            {query.keyword}
          </span>
        </h2>
        <SearchForm />
        <div className="wrapper flex flex-wrap md:flex-row flex-col mt-14">
          {resultPosts.map((post) => (
            <div
              key={post.id}
              className="lg:w-4/12 md:w-6/12 w-full lg:px-0 px-3"
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
