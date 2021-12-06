import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/planets");
  const data = await res.json();
  // console.log(data.data[0].PlanetName);
  return {
    props: { Planets: data.data },
  };
};

export default function Home({ Planets }) {
  console.log(Planets);
  return (
    <>
      <Head>
        <title>Planets | Home </title>
        <meta name="description" content="HomePage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home Page</h1>
        <Link href="/new">
          <button>Add planet</button>
        </Link>
        <h2> Planets:</h2>
        {Planets.map((Planet) => {
          return (
            <Link href={"/" + Planet._id} key={Planet._id}>
              <a className={styles.single}>
                <h5>{Planet.PlanetName}</h5>
                <h5>{Planet.NumberOfMoon}</h5>
                <h5>{Planet.LengthOfDay}</h5>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}
