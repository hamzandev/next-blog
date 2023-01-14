import { useRouter } from "next/router";

import Layout from "./Layout";
import PostCard from "../components/PostCard";

import dua from "../public/img/2.jpg";
import tiga from "../public/img/3.jpg";
import empat from "../public/img/4.jpg";
import lima from "../public/img/5.jpg";

export default function PostsByCategoryPage() {
  const { query } = useRouter();

  const posts = [
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
    <Layout pageTitle="Posts Category">
      <div className="container mx-auto lg:pt-36 pt-36">
        <h1 className="text-center mx-auto text-gray-800 text-3xl font-semibold">
          Posts by Category
        </h1>
        <span className="block mx-auto text-center text-primary underline underline-offset-4 my-2">
          {query.category}
        </span>
        <div className="other-posts flex flex-wrap lg:flex-row flex-col lg:mt-10 mt-20">
          {posts.map((p) => (
            <div key={p.id} className="lg:w-4/12 w-full lg:px-0 px-5">
              <PostCard post={p} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
