import Image from "next/image";

import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";

import satu from "../../public/img/1.jpg";
import dua from "../../public/img/2.jpg";
import empat from "../../public/img/4.jpg";
import lima from "../../public/img/5.jpg";
import avatar from "../../public/assets/shigaraki.png";
import Link from "next/link";

export default function DetailPost({ singlePost, otherPost }) {
  const pdost = [
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
    <Layout pageTitle={"Detail"}>
      <div className="container mx-auto lg:pt-20 pt-10">
        <div className="flex lg:flex-row flex-col lg:my-10 my-20 gap-5">
          <div className="content lg:w-8/12 lg:px-0 px-5">
            <h2 className="text-xl mb-8 uppercase font-semibold text-gray-800 pb-1 border-b-2 w-max mx-auto text-center border-primary">
              Detail Post
            </h2>
            <div className="image w-full rounded-md overflow-clip">
              <Image src={satu} alt="satu" className="w-full object-cover" />
            </div>
            <Link
              href={
                "/posts?category=" +
                singlePost.attributes.category.data.attributes.slug
              }
              className="tags mt-3 flex gap-2"
            >
              <span className="bg-primary px-3 py-1 text-sm text-gray-100 rounded-md">
                # {singlePost.attributes.category.data.attributes.name}
              </span>
            </Link>
            <h3 className="md:text-4xl text-2xl font-semibold text-gray-800 my-3">
              {singlePost.attributes.title}
            </h3>
            <small className="text-gray-500">
              {singlePost.attributes.publishedAt}
            </small>
            <div className="grid gap-5 text-lg text-gray-600 leading-loose text-justify mt-5">
              {singlePost.attributes.body}
            </div>
          </div>
          <div className="other-posts lg:w-4/12 py-10 lg:px-0 px-5">
            <h4 className="text-xl mx-3 my-5 font-semibold text-gray-800 uppercase">
              Posts may you like
            </h4>
            <div className="flex flex-col gap-3">
              {otherPost.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const { postId } = params;
    console.log(postId);
    // fetch single post
    const singleRes = await fetch(
      `${process.env.API_BASE_URL}/posts/${postId}?fields=title,publishedAt,description,body&populate=image,category`
    );
    //  fetch other posts
    const otherRes = await fetch(
      `${process.env.API_BASE_URL}/posts/?fields=title,publishedAt,description&populate=image,category`
    );
    const singlePost = await singleRes.json();
    const otherPost = await otherRes.json();
    return {
      props: {
        singlePost: singlePost.data,
        otherPost: otherPost.data,
      },
    };
  } catch (error) {
    return {
      props: {
        post: null,
      },
    };
  }
}
