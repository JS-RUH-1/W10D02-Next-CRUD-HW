import axios from "axios"
import {useState} from "react"
import styles from '../styles/Navbar.module.css'


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

    function AddPlanet (e){
        e.preventDefault()
        axios.post("http://localhost:3000/api",{PlanetName , NumberOfMoon,LengOfDay}).then((res)=>{
            console.log(res)
            setREs(res.data.data)
        })
        
    }

    function DeleteByID (e,id){
        e.preventDefault()
        axios.delete(`http://localhost:3000/api/${id}`).then((res)=>{
            console.log(res)
            setREs(res.data.data)
        })
        
    }

return (
<div className="flex">
{response.map((planet)=>{
        return <div
        ><h1>{planet.PlanetName}</h1>
        <h2>{planet.NumberOfMoon}</h2>
        <h2>{planet.LengOfDay}</h2>
        <button onClick={(e)=>{DeleteByID(e,planet._id)}} >Delete</button>
        </div>
    })}

<form>
<input placeholder="Planet Name" type="text" name="name" onChange={(e)=>{setPlanetName(e.target.value)}} /><br></br>
<input placeholder="Number Of Moon" type="number" name="number"  onChange={(e)=>{setNumberOfMoon(e.target.value)}} /><br></br>
<input placeholder="Length Of Day" type="number" name="number"  onChange={(e)=>{setLengOfDay(e.target.value)}} /><br></br>
<button onClick={(e)=>{AddPlanet(e)}} type="submit" value="Submit">ADD PLANET</button><br></br>
</form>

</div>

)
}

