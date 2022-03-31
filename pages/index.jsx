import Head from "next/head";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
// import SmallCard from "../components/SmallCard.jsx";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Minguk Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
    </div>
  );
};

export default Home;
