import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(5);
  
  useEffect(() => {
    setInterval (()=>{
        setCounter(counter--);
    },1000)
    setTimeout(() => {
      router.push("/");
    }, 5500);
  }, []);


  return (
    <div className="not-found">
      <h1>Ooopsei...</h1>
      <h2>ERROR 404: That page cannot be found :(</h2>
      <p>
        Going back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
        is {counter} seconds...
      </p>
    </div>
  );
};

export default NotFound;
