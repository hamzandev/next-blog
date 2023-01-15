import { useRouter } from "next/router";

import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import ResultSearchPosts from "../components/ResultSearchPosts";
import Error from "../components/Error";

export default function Home({ posts }) {
  const { query } = useRouter();

  if (!posts) return <Error />;

  if (query.keyword) {
    return <ResultSearchPosts />;
  }

  return (
    <Layout pageTitle={"Home"}>
      <HomePage posts={posts} />
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
