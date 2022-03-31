import Head from "next/head";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import SmallCard from "../components/SmallCard.jsx";

const Home = ({ exploreData }) => {
  return (
    <div className="">
      <Head>
        <title>Minguk Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(res =>
    res.json(),
  );

  return {
    props: {
      exploreData,
    },
  };
}

export default Home;
