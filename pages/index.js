import Head from "next/head";
import Image from "next/image";
import Main from "./components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vitamindev100</title>
        <meta name="Vitamindev" content="Vitamindev ProfileSte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Main />
      </main>
    </div>
  );
}
