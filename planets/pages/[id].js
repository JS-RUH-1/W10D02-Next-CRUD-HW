import { useEffect, useState } from "react";
import Router from "next/router";
function Details() {
  const id = Router.query.id;
  const [Data, setData] = useState({});
  useEffect(async () => {
    const res = await fetch("http://localhost:3000/api/planets/justOne", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    const data = await res.json();
    setData(data.data);
  }, []);
  return (
    <div>
      <p>
        <b>Planet Name:</b>
        {Data.PlanetName}
      </p>
      <p>
        <b>Number Of Moon:</b>
        {Data.NumberOfMoon}
      </p>
      <p>
        <b>Length Of Day:</b>
        {Data.LengthOfDay}
      </p>
    </div>
  );
}

export default Details;
