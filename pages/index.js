import Head from "next/head";
import MainHero from "../components/MainHero";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Landing Page Template</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A Next.js company landing page template"
        />
      </Head>
      <div className="font-Poppins">
        <MainHero />
      </div>
    </>
  );
}
