import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Home.module.css";
import { useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8080/planet");
  const data = await res.json();
  // console.log(data)
  return {
    props: { planets: data },
  };
};

const planets = ({ planets }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState();
    const [day, setDay] = useState();
    

  const addPlanet = (e) => {
    e.preventDefault();
    const planet = {
        planetName: name,
        numberOfMoon: Number(number),
        lengthOfDay: Number(day),
    }
    // console.log(name);
    // console.log(number);
    // console.log(day);

    // console.log(JSON.stringify(planet))

    fetch('http://localhost:8080/planet', {
        method: 'POST',
        body: JSON.stringify(planet),
    }).then(response => response.json())
  };


  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>All planets</h1>
        {planets.map((planet) => (
          <Link href={"/planets/" + planet.planetName} key={planet.planetName}>
            <a>
              <h3>{planet.planetName}</h3>
            </a>
          </Link>
        ))}
        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1">Planet name</label>
            <input
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="e.g. moon"
            />
            <label for="exampleFormControlInput1">Number of moons</label>
            <input
             type="text" 
             value={number}
             onChange={(e) => setNumber(e.target.value)}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="e.g. 2"
            />
            <label for="exampleFormControlInput1">length of day</label>
            <input
             type="text" 
             value={day}
             onChange={(e) => setDay(e.target.value)}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="e.g. 30"
            />
            <br></br>
            <button className="btn btn-success" onClick={(e) => addPlanet(e)}>
              Add Planet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default planets;
