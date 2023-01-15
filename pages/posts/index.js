import Error from "../../components/Error";
import Link from "next/link";
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

export default function Posts({ posts }) {
  const router = useRouter();

  if (!posts) return <Error />;

  if (router.query.category) {
    return <Error />;
    // return <PostsByCategoryPage />;
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

export async function getServerSideProps() {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/posts?fields=title,publishedAt,description&populate=image,category`
    );
    const { data } = await res.json();
    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: null,
      },
    };
  }
}
