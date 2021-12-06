import axios from "axios"
import {useState} from "react"

export const getStaticProps = async ()=> {
    const res = await axios.get("http://localhost:3000/api");
    return {
        props:{
            data:res.data.data}
              , revalidate:1
        }
};


export default function Homepage({data}){

    const [response, setREs]= useState(data)
    const [PlanetName, setPlanetName]= useState()
    const [NumberOfMoon, setNumberOfMoon]= useState()
    const [LengOfDay, setLengOfDay]= useState()

return (
<div>
{response.map((planet)=>{
        return <h1>{planet.PlanetName}</h1>
    })}


</div>

)
}

