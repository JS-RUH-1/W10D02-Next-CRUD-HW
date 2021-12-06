import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/Home.module.css";

const Planet = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [planet, setPlanet] = useState({});
  const [btn, setBtn] = useState(false);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Planet/${pid}`)
      .then((res) => {
        setPlanet(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error at fetching using axios:", err);
      });
  }, [trigger]);

  const handleChange = (e) => {
    e.preventDefault();
    setBtn(false);

    axios
      .put(`http://localhost:8080/Planet/${pid}`, {
        PlanetName:
          e.target[0].value == "" ? planet.PlanetName : e.target[0].value,
        NumberOfMoon:
          e.target[1].value == "" ? planet.NumberOfMoon : e.target[1].value,
        LengthOfDay:
          e.target[2].value == "" ? planet.LengthOfDay : e.target[2].value,
      })
      .then((res) => {
        console.log("res.data (update):", res.data);
        setTrigger(!trigger);
      })
      .catch((err) => console.log("error at updating planet in axios", err));
  };

  const deletePlanet = () => {
      axios.delete(`http://localhost:8080/Planet/${pid}`).then((res)=>{
          console.log(res.data)
          router.push('/')
      }).catch((err)=>{console.log('err deleting:',err)})
  }

  return (
    <div>
      <div className={styles.card}>
        <p>Planet name: {planet.PlanetName}</p>
        <p>Number of moons: {planet.NumberOfMoon}</p>
        <p>length of the day: {planet.LengthOfDay}</p>
        <button onClick={() => setBtn(true)}>Edit</button>
      </div>
      <form
        onSubmit={(e) => handleChange(e)}
        className={btn ? styles.card : styles.hidden}
      >
        <div>
          <label>Planet name: </label>
          <input />
        </div>
        <div>
          <label>Number of moons: </label>
          <input type="number" min="0" />
        </div>
        <div>
          <label>length of the day: </label>
          <input type="number" min="0" />
        </div>
        <input type="submit" value="save" />
      </form>
      <button onClick={()=>deletePlanet()}>DELETE</button>
    </div>
  );
};

export default Planet;
