import Image from "next/image";
import { useRouter } from "next/router";
import DetailPostCard from "./DetailPostCard";

export default function PostCard({ post }) {
  const router = useRouter();

  return (
    <div
      className={`card ${
        router.asPath === "/" ? "lg:w-4/12" : "lg:w-full"
      }  w-full lg:px-3 mb-20`}
    >
      <div className="image rounded-md overflow-clip">
        <Image src={post.thumbnail} alt="dua" className="w-full object-cover" />
      </div>
      <DetailPostCard user={post.user} post={post} />
    </div>
  );
}
