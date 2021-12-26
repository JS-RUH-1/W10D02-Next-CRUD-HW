import { useRouter } from "next/router";

function Home({ plant }) {
  const router = useRouter()
  const handelDelete = (id) => {
    fetch(`http://localhost:3000/api/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      router.push("/");
    })
 
  };

  const handelredirect =(id)=>{
    router.push("/planet/"+id);
  }

  return (
    <div>
      {plant?.map((e) => (
        <div>
          <h3>{e.PlanetName}</h3>
          <h3>{e.NumberOfMoon}</h3>
          <h3>{e.LengthOfDay}</h3>
          <button onClick={() => handelredirect(e._id)}> More </button>
          <button onClick={() => handelDelete(e._id)}> Delete </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

// get all
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api");
  const data = await res.json();
  return {
    props: { plant: data },
  };
};

export default Home;
