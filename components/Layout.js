import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="blog artikel programming-article article"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta
          name="keywords"
          content="article artikel blog programming web design ui design frontend backend sandika galih reactjs nextjs"
        />
        <title>BLOGREAT | {pageTitle}</title>
      </Head>
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
}
