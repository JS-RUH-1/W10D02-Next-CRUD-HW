import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const newPlanet = () => {
  const [newPlanet, setnewPlanet] = useState({});

  const router = useRouter();

  async function hundleAdd(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/planets", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlanet),
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Planets | Home </title>
        <meta name="description" content="HomePage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            hundleAdd(e);
          }}
        >
          <label>Planet Name</label>
          <br />
          <input
            onChange={(e) => {
              newPlanet.PlanetName = e.target.value;
              setnewPlanet({ ...newPlanet });
            }}
            id="name"
            type="text"
          />
          <br />

          <label>Number Of Moon</label>
          <br />

          <input
            onChange={(e) => {
              newPlanet.NumberOfMoon = e.target.value;
              setnewPlanet({ ...newPlanet });
            }}
            id="moons"
            type="number"
          />
          <br />

          <label>Length Of Day</label>
          <br />

          <input
            onChange={(e) => {
              newPlanet.LengthOfDay = e.target.value;
              setnewPlanet({ ...newPlanet });
            }}
            id="day"
            type="text"
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default newPlanet;
