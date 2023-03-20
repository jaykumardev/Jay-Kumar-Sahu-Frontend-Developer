import Head from "next/head";
import Hero from "@/components/home/Hero";
import Header from "@/components/home/Header";
import Missions from "@/components/home/Missions";
import ComboBox from "@/components/common/ComboBox";
import QuickView from "@/components/common/QuickView";
import CapsulesList from "@/components/common/CapsulesList";

export default function Home({ capsules }) {
  return (
    <>
      <Head>
        <title>SpaceX</title>
        <meta
          name="description"
          content="SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Header />
        <Hero />
        <Missions />
        <ComboBox />
        <QuickView />
        <CapsulesList capsules={capsules} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://api.spacexdata.com/v3/capsules");
  const capsules = await res.json();
  return {
    props: {
      capsules,
    },
  };
};
