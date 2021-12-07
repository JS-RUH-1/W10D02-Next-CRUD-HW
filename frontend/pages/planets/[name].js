import "bootstrap/dist/css/bootstrap.min.css";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8080/planet");
  const data = await res.json();

  const paths = data.map((planet) => {
    return {
      params: { name: planet.planetName },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.name;
  const res = await fetch("http://localhost:8080/planet/" + name);
  const data = await res.json();
  console.log("data ", data);

  
  return {
    props: { planet: data },
  };
};

const Details = ({ planet }) => {

    const deletePlanet = () => {
        fetch('http://localhost:8080/planet/' + planet[0].planetName, {
        method: 'DELETE'
    }).then(response => response.json())

    }
  return (
    <div className="container content">
        <h1>Planet name: {planet[0].planetName}</h1>
        <h1>number of Moons: {planet[0].numberOfMoon}</h1>
        <h1>day length: {planet[0].lengthOfDay}</h1>
        <button className="btn btn-danger" onClick={() => deletePlanet()}>Delete</button>
        {/* <h3>Name: {user.name}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Website: {user.website}</h3>
        <h3>City: {user.address.city}</h3>
        <h3>Phone: {user.phone}</h3> */}
     
    </div>
    
  );
};

export default Details;
