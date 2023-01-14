import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";
import PostsByCategoryPage from "../../components/PostsByCategory.page";
import ResultSearchPosts from "../../components/ResultSearchPosts";
import SearchForm from "../../components/SearchForm";

import dua from "../../public/img/2.jpg";
import tiga from "../../public/img/3.jpg";
import empat from "../../public/img/4.jpg";
import lima from "../../public/img/5.jpg";

export default function Posts() {
  const router = useRouter();

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
  ];

  if (router.query.category) {
    return <PostsByCategoryPage />;
  }
  if (router.query.keyword) {
    return <ResultSearchPosts />;
  }
  return (
    <Layout pageTitle="All Posts">
      <div className="container mx-auto lg:pt-36 pt-20 pb-20">
        <h1 className="text-3xl underline underline-offset-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mt-10 mx-auto text-center font-semibold mb-3">
          All Posts
        </h1>
        <SearchForm />
        <div className="wrapper mt-14 flex md:flex-row flex-wrap flex-col">
          {posts.map((p) => (
            <div key={p.id} className="lg:w-4/12 md:w-6/12 w-full lg:px-0 px-5">
              <PostCard post={p} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
