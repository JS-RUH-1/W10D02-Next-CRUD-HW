import styles from '../styles/Home.module.css'
import {useState} from 'react'
import axios from 'axios'

export const getStaticProps = async () =>{
  const res = await fetch('http://localhost:3000/api')
  const data = await res.json()
  console.log(data)

  return{
    props: {planet: data.data}
  }
}
export default function Home({planet}) {
  const [Planet, setPlanet] = useState(planet)
  const [NameOfPlanet, setNameOfPlanet] = useState()
  const [Moon, setMoon] = useState()
  const [LengthOfDay, setLengthOfDay] = useState()

  const deletePlanet = (id) => {
    axios
   .delete(`http://localhost:3000/api/${id}`)
   .then((res)=>{
    console.log(res)
    setPlanet(res.data.data)
   })
  }
  const editPlanet = (id) => {
    axios
   .put(`http://localhost:3000/api/${id}`,{
    PlanetName:NameOfPlanet,
    NumberOfMoon:Moon,
    LengthOfDay:LengthOfDay
   })
   .then((res)=>{
    console.log(res)
    setPlanet(res.data.data)
   })
  }
  const addNewPlanet = () => {
    axios
   .post(`http://localhost:3000/api`,{
    PlanetName:NameOfPlanet,
    NumberOfMoon:Moon,
    LengthOfDay:LengthOfDay
   })
   .then((res)=>{
    console.log(res)
    setPlanet(res.data.data)
   })
  }
  return (
    <div className={styles.container}>
    <div>
      <input placeholder="Name of planet" onChange={(e)=>setNameOfPlanet(e.target.value)}></input>
      <input placeholder="Number of moon" onChange={(e)=>setMoon(e.target.value)}></input>
      <input placeholder="Length of day" onChange={(e)=>setLengthOfDay(e.target.value)}></input>
      <button onClick={()=>addNewPlanet()}>add</button>
    </div>
    {Planet.map(e =>(
      <div>
      <p>Name: {e.PlanetName}</p>
      <p>Name: {e.NumberOfMoon}</p>
      <p>Name: {e.LengthOfDay}</p>

      <button onClick={()=>editPlanet(e._id)}>Edit</button>
      <button onClick={()=>deletePlanet(e._id)}>Delete</button>
      </div>
      
    ))} 
    </div>
  )
}
