import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "./comp/Footer";
import NavBar from "./comp/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [plants, setPlante] = useState([]);
  const [PlanetName, setPlanetName] = useState("");
  const [NumberOfMoon, setNumberOfMoon] = useState();
  const [LengthOfDay, setLengthOfDay] = useState();
  useEffect(async () => {
    const getAllplants = async () => {
      const res = await axios.get("http://localhost:3000/api");

      setPlante(res.data.data);
    };
    getAllplants();
  }, []);
  console.log(plants);

  function postPlant(e) {

    const newPlant = {
      PlanetName: PlanetName,
      NumberOfMoon: NumberOfMoon,
      LengthOfDay: LengthOfDay,
    };

    axios.post("http://localhost:3000/api/", newPlant).then((res) => {
      setPlante(res);
    });
  }

  function deletePlant(e) {
    axios.delete(`http://localhost:3000/api/${e._id}`)
    .then((res) => {
      console.log(res.data);
      // نا افضل طريقه للحذف
      setPlante(plants.filter(p => p._id !== e._id))
      //setPlante(res.data);
    });
  }

  return (
    <div className={styles.container}>
      {plants?.map((e) => {
        return (
          <div>
            <h1>PlanetName: {e.PlanetName}</h1>
            <h2>NumberOfMoon: {e.NumberOfMoon}</h2>
            <h3>LengthOfDay: {e.LengthOfDay}</h3>
            <button onClick={() => deletePlant
              (e)}>Delete</button>
          </div>
        );
      })}

      <form>
        <label for="PlanetName"> PlanetName </label>
        <input type="text" onChange={(e) => setPlanetName(e.target.value)} />
        <label for="NumberOfMoon"> NumberOfMoon </label>
        <input
          type="number"
          onChange={(e) => setNumberOfMoon(e.target.value)}
        />
        <label for="LengthOfDay"> LengthOfDay </label>
        <input type="number" onChange={(e) => setLengthOfDay(e.target.value)} />
        <label for="PlanetName"> Submit </label>
        <button
         
          onClick={(e) => {
            postPlant(e);
          }}
        >Submit</button> 
      </form>
    </div>
  );
}
