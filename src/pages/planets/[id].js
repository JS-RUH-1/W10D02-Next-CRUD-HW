import Link from "next/link"


function Planet({name, NumberOfMoon, LengthOfDay}){
    return <div className="container">
      <p><b>Planet Name:</b> {name}</p>
      <p><b>Planet moons:</b> {NumberOfMoon}</p>
      <p><b>Planet length of days:</b> {LengthOfDay}</p>

    <Link href="/">Back</Link>
    
    </div>
}
Planet.getInitialProps = async ({query}) => {
    const res = await fetch(`http://localhost:3000/api/planets/${query.id}`)
    const planet = await res.json()
  

    return {
      ...planet // will be passed to the page component as props
    }
}

export default Planet;