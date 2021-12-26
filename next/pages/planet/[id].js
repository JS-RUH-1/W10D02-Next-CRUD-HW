const Detaiels = ({ planet}) => {
return (
    <div>
      <h2>Planet details</h2>
      <h3>Name: {planet.PlanetName}</h3>
      <h3>NumberOfMoon: {planet.NumberOfMoon}</h3>
      <h3>LengthOfDay :{planet.LengthOfDay}</h3>
 
    </div>
  );
};

// the function name is fixed !
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/");
  const data = await res.json();
  //store the id of all albums
  const paths = data.map((e) => {
    return {
      params: { id: e._id.toString() },
    };
  });

  return {
    paths,
    // switch to 404 page if the id is not exsit
    fallback: false,
  };
};
// the function name is fixed !
export const getStaticProps = async (context) => {
  // Get the id from params (URL) EX:WWW.EXAMPLE/5  ID IS 5
  const id = context.params.id;
  //Fetch data fro single planet
  const res = await fetch(`http://localhost:3000/api/${id}`)
  const data = await res.json();


  return {
    props: { planet: data, },
  };
}
  export default Detaiels