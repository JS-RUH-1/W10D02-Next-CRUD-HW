import Link from "next/link";
import Head from "next/head";

import { useRouter } from "next/router";
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/planets");
  const data = await res.json();
  const paths = data.data.map((planet) => {
    return {
      params: { id: planet._id },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:3000/api/planets/" + id);
  const data = await res.json();

  return {
    props: { planet: data.data },
  };
};

const Details = ({ planet }) => {
  const router = useRouter();
  async function hundleDelete() {
    const planetId = planet._id;
    try {
      const deleted = await fetch(
        "http://localhost:3000/api/planets/" + planetId,
        {
          method: "DELETE",
        }
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }
  console.log(planet);
  return (
    <>
      <Head>
        <title>Planets | {planet.PlanetName} </title>
        <meta name="description" content="HomePage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Details Page</h1>

        <div>
          <h5>{planet.PlanetName}</h5>
          <h5>{planet.NumberOfMoon}</h5>
          <h5>{planet.LengthOfDay}</h5>
          <button onClick={hundleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default Details;
