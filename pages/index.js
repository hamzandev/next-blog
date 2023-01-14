import { useRouter } from "next/router";

import Layout from "../components/Layout";
import HomePage from "../components/HomePage";
import ResultSearchPosts from "../components/ResultSearchPosts";

export default function Home() {
  const { query } = useRouter();
  if (query.keyword) {
    return <ResultSearchPosts />;
  }

  return (
    <Layout pageTitle={"Home"}>
      <HomePage />
    </Layout>
  );
}
