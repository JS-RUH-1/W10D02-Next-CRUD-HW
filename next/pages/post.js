import { useRouter } from "next/router";
import { useState } from "react";

const Post = () => {
  const [name, setName] = useState("");
  const [numberOfMoon, setNumberOfMoon] = useState("");
  const [lengthOfDay, setLengthOfDay] = useState("");

  const router = useRouter();

  const handelClick = () => {
    fetch("/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        PlanetName: name,
        NumberOfMoon: numberOfMoon,
        LengthOfDay: lengthOfDay,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        router.push("/");
      });
  };

  return (
    <div>
      <h3>PlanetName</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h3>Number of moon</h3>
      <input
        value={numberOfMoon}
        onChange={(e) => setNumberOfMoon(e.target.value)}
      />
      <h3>length of day</h3>
      <input
        value={lengthOfDay}
        onChange={(e) => setLengthOfDay(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => handelClick()}>Add </button>
    </div>
  );
};

export default Post;
