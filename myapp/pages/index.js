import Link from "next/link"
import React from "react"
import { useState } from "react"
import axios from "axios"

export const getStaticProps = async () =>{
  const res = await fetch('http://localhost:3000/api/Planets')
  const data = await res.json()
  console.log(data)

  return {props: {planets:data.data}}}

  

  export default function HomePage ({planets}){
  const [planet, setplanets] = useState(planets)
  const [numberPlanet, setnumberPlanet] = useState()
  const [Longth , setLongth] = useState()
  const [Moon, setmoon] = useState()
 

  const deletePlanet = (id) => {
   axios.delete(`http://localhost:3000/api/Planets/${id}`)
   .then((res)=>{
   console.log(res)
   setplanets(res.data.data)
  })
  }

  const PostPlanet = () => {

    axios.post("http://localhost:3000/api/Planets",{
      name:numberPlanet ,
      Longth:Longth,
      Moons:Moon
    }).then((res)=>{
    console.log(res)
    setplanets(res.data.data)
   })
   }

   const PutPlanet = (id) => {

    axios.put(`http://localhost:3000/api/Planets/${id}`,{
      name:numberPlanet ,
      Longth:Longth,
      Moons:Moon
    }).then((res)=>{
    console.log(res)
    setplanets(res.data.data)
   })
   }







    return(
      <div>
      <div>
        <input placeholder = "name " onChange={(e)=>setnumberPlanet(e.target.value)}></input>
        <input placeholder = "Longth " onChange={(e)=>setLongth(e.target.value)}></input>
        <input placeholder = "MOON " onChange={(e)=>setmoon(e.target.value)}></input>
        <button onClick={(e) => PostPlanet() }>creae </button>

      </div>


      
        {planet.map(e => (
<div>
          <p> Name {e.name} </p>
          <p> Longth {e.Longth} </p>
          <p> Moons {e.Moons} </p>

          <button onClick={() => deletePlanet(e._id) }>Delete </button>
          <button onClick={() => PutPlanet(e._id) }>edith </button>
          
</div>

        ))}
      

      </div>
    )
  }

