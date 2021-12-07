import axios from "axios"
import { useState } from "react"
import {useRouter} from 'next/router'


export default function AddPlanet() {


    const [planetName, setPlanetName] = useState('')
    const [numberOfMoon, setNumberOfMoon] = useState()
    const [lengthOfDay, setLengthOfDay] = useState()
    const router = useRouter()

    const addPlanet = async () => {
        const newPlanet = {
            planetName,
            numberOfMoon,
            lengthOfDay
        }

        const res = await axios.post('http://localhost:3000/api/route', newPlanet)
        router.push('/')
    }

    return (
        <div className="albumsContainer addPage">
            <input type="text" placeholder="Planet Name" onChange={e => setPlanetName(e.target.value)} /><br />
            <input type="text" placeholder="Number of moon" onChange={e => setNumberOfMoon(e.target.value)} /><br />
            <input type="text" placeholder="Length Of Day" onChange={e => setLengthOfDay(e.target.value)} /><br />
            <button className="addBTN" onClick={addPlanet}>Add Planet</button>
        </div>
    )
}