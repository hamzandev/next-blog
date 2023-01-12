import Image from "next/image";
import Link from "next/link";

import avatar from "../public/assets/shigaraki.png";
import satu from "../public/img/4.jpg";

export default function FeaturedPost() {
  return (
    <div className="card featured-post lg:px-3 flex lg:flex-row flex-col gap-4">
      <div className="thumbnail lg:w-7/12 w-full">
        <div className="image rounded-md overflow-hidden">
          <Image src={satu} className="object-cover w-full" alt="satu"></Image>
        </div>
      </div>
      <div className="detail-post lg:w-5/12 w-full">
        <div className="tag mb-2 flex">
          <span className="bg-primary px-3 py-1 text-sm text-gray-100 rounded-md">
            #uidesign
          </span>
        </div>
        <h1 className="lg:text-3xl lg:w-[95%] text-2xl mb-2 font-semibold text-gray-800">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
          really right?
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
            <h4 className="text-lg font-semibold text-gray-800">
              Shigaraki Tomura
            </h4>
            <span className="text-gray-600">UI/UX Designer</span>
          </div>
        </div>
        <Link
          href={"/posts/103"}
          className="px-6 py-3 rounded-md bg-gradient-to-r from-primary to-secondary"
        >
          <a>Read More</a>
        </Link>
      </div>
    </div>
  );
}
