import Head from "next/head";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PlanetWorld | About</title>
        <meta name="keywords"  />
      </Head>
        <div className={styles.main}>
          <h1>About</h1>
          <p>this website lists Planets with details of each</p>
        </div>
    </div>
  );
};

export default About;
