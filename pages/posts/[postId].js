import Image from "next/image";

import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";

import satu from "../../public/img/1.jpg";
import dua from "../../public/img/2.jpg";
import empat from "../../public/img/4.jpg";
import lima from "../../public/img/5.jpg";
import avatar from "../../public/assets/shigaraki.png";

export default function DetailPost() {
  const post = [
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
    <Layout pageTitle={"Detail Post"}>
      <div className="container mx-auto lg:pt-20 pt-10">
        <div className="flex lg:flex-row flex-col lg:my-10 my-20 gap-5">
          <div className="content lg:w-8/12 lg:px-0 px-5">
            <h2 className="text-xl mb-8 uppercase font-semibold text-gray-800 pb-1 border-b-2 w-max mx-auto text-center border-primary">
              Detail Post
            </h2>
            <h3 className="md:text-4xl text-2xl font-semibold text-gray-800 my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum.
            </h3>
            <div className="tags mb-2 flex gap-2">
              <span className="bg-primary px-3 py-1 text-sm text-gray-100 rounded-md">
                #uidesign
              </span>
              <span className="bg-primary px-3 py-1 text-sm text-gray-100 rounded-md">
                #web programming
              </span>
            </div>
            <div className="user-information flex gap-2 my-3">
              <div className="avatar w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="w-full object-cover"
                />
              </div>
              <div className="user-detail">
                <h4 className="text-xl font-semibold text-gray-700">
                  Hamzan Wahyudi
                </h4>
                <span className="text-gray-500">Web Designer</span>
              </div>
            </div>
            <div className="image w-full rounded-md overflow-clip">
              <Image src={satu} alt="satu" className="w-full object-cover" />
            </div>
            <div className="grid gap-5 text-lg text-gray-600 leading-loose text-justify mt-5">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus mollitia vel error vitae reprehenderit incidunt quo
                veniam possimus. Sequi molestiae tempore ex nulla, deserunt
                sapiente autem est iste, perspiciatis, aliquam officiis. Error
                suscipit ad animi totam cumque fugit quam ullam ut minima?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                neque eaque nisi. Eum quo impedit doloribus maiores architecto
                quibusdam nisi porro reiciendis quod, molestias voluptatibus
                possimus aliquam reprehenderit, velit pariatur iusto amet. Sint
                error, aliquam beatae nihil modi itaque ducimus soluta ipsum id
                in eveniet dolorem, reiciendis dignissimos illo voluptatum quasi
                blanditiis pariatur sapiente! Ea doloribus facere officia,
                tempore nobis perspiciatis eum provident ducimus minima. Fuga
                nobis molestiae mollitia obcaecati repellat delectus doloremque,
                nostrum voluptate, necessitatibus deleniti explicabo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Minima, dicta. Nam optio dignissimos voluptatibus vitae,
                pariatur fugiat aut doloribus quibusdam natus facere, eveniet et
                illum. Soluta quisquam, ad ullam aut nisi praesentium.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                veniam doloremque, eligendi, obcaecati tempore aperiam officia
                cum reprehenderit esse, inventore deserunt totam iure eveniet
                minima? Tempore unde amet necessitatibus ipsum!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus mollitia vel error vitae reprehenderit incidunt quo
                veniam possimus. Sequi molestiae tempore ex nulla, deserunt
                sapiente autem est iste, perspiciatis, aliquam officiis. Error
                suscipit ad animi totam cumque fugit quam ullam ut minima?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                neque eaque nisi. Eum quo impedit doloribus maiores architecto
                quibusdam nisi porro reiciendis quod, molestias voluptatibus
                possimus aliquam reprehenderit, velit pariatur iusto amet. Sint
                error, aliquam beatae nihil modi itaque ducimus soluta ipsum id
                in eveniet dolorem, reiciendis dignissimos illo voluptatum quasi
                blanditiis pariatur sapiente! Ea doloribus facere officia,
                tempore nobis perspiciatis eum provident ducimus minima. Fuga
                nobis molestiae mollitia obcaecati repellat delectus doloremque,
                nostrum voluptate, necessitatibus deleniti explicabo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Minima, dicta. Nam optio dignissimos voluptatibus vitae,
                pariatur fugiat aut doloribus quibusdam natus facere, eveniet et
                illum. Soluta quisquam, ad ullam aut nisi praesentium.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                veniam doloremque, eligendi, obcaecati tempore aperiam officia
                cum reprehenderit esse, inventore deserunt totam iure eveniet
                minima? Tempore unde amet necessitatibus ipsum!
              </p>
            </div>
          </div>
          <div className="other-posts lg:w-4/12 py-10 lg:px-0 px-5">
            <h4 className="text-xl mx-3 my-5 font-semibold text-gray-800 uppercase">
              Posts may you like
            </h4>
            <div className="flex flex-col gap-3">
              {post.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
