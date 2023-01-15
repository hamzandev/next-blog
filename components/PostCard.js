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
      <div className="image rounded-md lg:h-56 md:h-80 h-48 overflow-clip">
        <Image
          src={
            "http://localhost:1337" +
            post.attributes.image.data.attributes.formats.small.url
          }
          alt="dua"
          width={500}
          height={100}
          className="w-full object-cover object-center"
        />
      </div>
      <DetailPostCard post={post.attributes} postId={post.id} />
    </div>
  );
}
