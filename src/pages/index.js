import { useRouter } from 'next/router'
import Link from 'next/link';
import { useState } from 'react';

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/planets`)
  const planets = await res.json()

  return {
    props: { planets }, // will be passed to the page component as props
  }
}

export default function Home({planets}) {
  const router = useRouter()
  const [toAdd, add] = useState({});
  const submit = () => {
    fetch(`http://localhost:3000/api/planets`,{method: 'POST', body: JSON.stringify(toAdd)})
    .then(res => res.json())
    .then(data => {
      router.push("/");
      add({});
    })
  }
  return <div className="container">
    <h1 className="is-size-3">Planets</h1>

    <table className="table">
  <thead>
    <tr>
      <th>Planet</th>
      <th>Length of day</th>
      <th>Moons</th>
    </tr>
  </thead>

  <tbody>
    {planets.map(planet =>     <tr>
  <td><Link href={`/planets/${planet._id}`}><a href="#">{planet.name}</a></Link></td>
  <td>{planet.LengthOfDay}</td>
  <td>{planet.NumberOfMoon}</td>

   </tr>)}

  
  </tbody>
</table>

<h1 className="is-size-4">Add new planet</h1>
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text"  value={toAdd.name} onChange={(e) => add({...toAdd, name: e.target.value})}  placeholder="e.g Earth"/>
  </div>
</div>

<div class="field">
  <label class="label">Length of day</label>
  <div class="control">
    <input class="input" type="number"  value={toAdd.LengthOfDay} onChange={(e) => add({...toAdd, LengthOfDay: e.target.value})}  placeholder="Length of days"/>
  </div>
</div>

<div class="field">
  <label class="label">Moons</label>
  <div class="control">
    <input class="input" value={toAdd.NumberOfMoon} onChange={(e) => add({...toAdd, NumberOfMoon: e.target.value})} type="number" placeholder="Number of moons"/>
  </div>
</div>

<div class="control">
  <button class="button is-primary" onClick={() => submit()}>Submit</button>
</div>



  </div>
}
