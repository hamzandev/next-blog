import Link from "next/link";

export default function DetailPostCard({ post, postId }) {
  return (
    <div className="detail-post">
      <Link href={"/posts?category=" + post.category.data.attributes.slug}>
        <span className="category-label px-2 bg-blue-400 mt-3 text-gray-100 font-mona rounded block w-max my-2 py-1 text-sm">
          {"# " + post.category.data.attributes.name}
        </span>
      </Link>
      <h1 className="lg:text-2xl font-poppins lg:w-[95%] text-xl font-semibold text-gray-800">
        {post.title}
      </h1>
      <small className="text-gray-400 font-mona">{post.publishedAt}</small>
      <p className="slug text-gray-600 leading-relaxed lg:w-[80%]">
        {post.description}
      </p>
      <Link href={`/posts/${postId}`}>
        <button className="px-6 py-2 mt-2 rounded-md bg-gradient-to-r text-white from-primary to-secondary">
          Read More
        </button>
      </Link>
    </div>
  );
}
