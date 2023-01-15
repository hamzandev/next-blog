import Image from "next/image";
import Link from "next/link";

export default function TestStrapi({ posts }) {
  // if (!posts) {
  //   return (
  //     <div className="flex min-h-screen bg-gray-200 absolute inset-0 items-center justify-center">
  //       <h3 className="text-2xl font-bold font-mona">Loading...</h3>
  //     </div>
  //   );
  // }
  return (
    <div className="relative">
      {!posts && (
        <div className="flex max-h-screen bg-gray-200/70 absolute inset-0 items-center justify-center">
          <h3 className="text-2xl font-bold font-mona">Loading...</h3>
        </div>
      )}
      <h3 className="text-2xl font-semibold font-mona">
        Test consume API from Strapi
      </h3>
      <div className="flex mt-20 min-h-screen bg-gray-100 items-center justify-center">
        <div className="px-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 ">
          {posts.map((post) => (
            <div key={post.id} className="wrapper my-5 p-5">
              <Image
                style={{ width: "100%" }}
                width={300}
                height={200}
                src={
                  "http://localhost:1337" +
                  post.attributes.image.data.attributes.formats.medium.url
                }
                alt="POst Image"
              />
              <small className="text-white w-max px-3 py-1 rounded mt-2 bg-primary block">
                {"#" + post.attributes.category.data.attributes.name}
              </small>
              <h1 className="text-2xl">{post.attributes.title}</h1>
              <small className="text-gray-400">
                {post.attributes.publishedAt}
              </small>
              <p className="text-gray-500 mb-3">
                {post.attributes.description}
              </p>
              <Link href={"/"}>
                <button className="text-gray-800 bg-gradient-to-r from-primary to-secondary px-5 py-2 rounded-md shadow">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.API_BASE_URL}/posts?fields=title,publishedAt,description&populate=image,category`
  );
  const posts = await res.json();

  return {
    props: {
      posts: posts.data,
    },
  };
}
