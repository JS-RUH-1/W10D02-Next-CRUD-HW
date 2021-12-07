import Link from 'next/link'
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Home() {
  const [allPlantes, setAllPlantes] = useState([])

  useEffect(() => {
    const getAllAlbums = async () => {
      const res = await axios.get("http://localhost:3000/api/route")
      // console.log(res.data);
      setAllPlantes(res.data.data)
    }

    getAllAlbums()
  },[])


  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:3000/api/route/' + id)
      window.location.reload()
  } catch (err) {
      console.log(err);
  }
  }

  console.log(allPlantes);
  return (
    <div className="albumsContainer">
      <h1>Here All Planets</h1>
      <div className="albums">
      {allPlantes.map((ele, index) => {
        return (
          <div className="ele" key={index}>
            <span>Planet: {ele.planetName}</span>
            <Link href={`http://localhost:3000/api/route/${ele._id}`}>
              <button className="viewBTN">VIEW</button>
              </Link>
              <button className="delete" onClick={() => handleDelete(ele._id)}>Delete</button>
            
          </div>
        )
      })}
      </div>

    </div>
  )
}