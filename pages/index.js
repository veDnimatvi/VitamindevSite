import Head from "next/head";
import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function MyProfile() {
  return (
    <>
      <Head>
        <title>Vitamindev</title>
        <meta name="Vitamindev" content="Vitamindev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-col justify-between">
        <Header />

        <div className="introduce section mb-auto">
          <div className="mx-auto container py-40 md:py-64 pl-11 md:pl-80">
            <div className="text-4xl md:text-5xl font-extrabold mb-5">
              Hi, I am Thiên
            </div>
            <div className="text-xl md:text-2xl mb-5">
              Junior Software Engineer
            </div>
            <div className="text-lg md:text-xl">
              Read more{" "}
              <Link href="">
                <span className="bg-orange-300 p-1 rounded-tl-2xl rounded-br-2xl cursor-pointer">
                  about me
                </span>
              </Link>{" "}
              or{" "}
              <Link href="/contact">
                <span className="bg-violet-300 p-1 rounded-tr-2xl rounded-bl-2xl cursor-pointer">
                  contact me
                </span>
              </Link>{" "}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
