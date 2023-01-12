import Image from "next/image";
import Link from "next/link";

import avatar from "../public/assets/shigaraki.png";

export default function DetailPostCard({ post, user }) {
  return (
    <div className="detail-post">
      <div className="tag my-2 flex gap-2">
        {post.category.map((item) => (
          <span
            key={item}
            className="bg-primary px-3 py-1 text-sm text-gray-100 rounded-md"
          >
            {`#` + item}
          </span>
        ))}
      </div>
      <h1 className="lg:text-2xl lg:w-[95%] text-xl mb-2 font-semibold text-gray-800">
        {post.title}
      </h1>
      <p className="slug text-gray-600 leading-relaxed lg:w-[80%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam
        animi tenetur dolor omnis atque nulla. Fugiat nemo quae voluptates
        dignissimos itaque dolores cupiditate?
      </p>
      <div className="user-info flex items-center gap-2 mt-3 mb-6">
        <div className="avatar w-16 h-16 overflow-clip rounded-full">
          <Image src={avatar} alt="avatar" />
        </div>
        <div className="detail-user">
          <h4 className="text-lg font-semibold text-gray-800">{user.name}</h4>
          <span className="text-gray-600">{user.job}</span>
        </div>
      </div>
      <Link
        href={`/posts/${post.id}`}
        className="px-6 py-3 rounded-md bg-gradient-to-r text-white from-primary to-secondary"
      >
        Read More
      </Link>
    </div>
  );
}
