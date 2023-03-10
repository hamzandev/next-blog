import Link from "next/link";
import Layout from "../components/Layout";

export default function Error() {
  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-primary/20 to-rose-400/20 flex-col">
        <div className="text-9xl mb-3 text-orange-500 -z-10 animate-slow-spin">⚙</div>
        <h1 className="lg:text-7xl text-5xl text-transparent bg-gradient-to-tr from-indigo-600 to-rose-500 bg-clip-text font-mona font-bold">
          Yaaaahhh...
        </h1>
        <p className="lg:text-lg text-base lg:w-full text-center w-[90%] text-gray-500 font-mona">
          Website sedang maintenance. Silahkan coba lagi nanti.
        </p>
        <Link href={""}>
          <button className="px-6 py-1 rounded-full mt-5 hover:bg-indigo-500 hover:text-gray-100 duration-150 border-2 border-indigo-500 text-indigo-500">
            Refresh
          </button>
        </Link>
      </div>
    </Layout>
  );
}
