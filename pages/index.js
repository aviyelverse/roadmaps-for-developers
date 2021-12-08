import Head from "next/head";
import MainHero from "../components/MainHero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frontend Roadmap</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Frontend Roadmap" />
      </Head>
      <div className="font-Poppins">
        <header>
          <Navbar />
        </header>
        <MainHero />
      </div>
    </>
  );
}
