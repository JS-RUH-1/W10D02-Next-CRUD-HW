import fetch from "isomorphic-unfetch";
import { useEffect, useState } from "react";
import { Button, Confirm, Loader } from "isomorphic-ui-react";
import { useRouter } from "next/router";
import planet from "../../models/planet";

const Planet = () => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDeleting) {
      deletePlanet();
    }
  }, [isDeleting]);
  const open = () => setConfirm(true);
  const close = () => setConfirm(false);

  const deletePlanet = async () => {
    const planetId = router.query.id;
    try {
      const deleted = await fetch(
        `http://localhost:3000/api/planet/${planetId}`,
        {
          method: "Delete",
        }
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };
  return (
    <div>
      {isDeleting ? (
        <Loader active />
      ) : (
        <div>
          <h1>{planet.name}</h1>
          <h2>{planet.NumberOfMoon}</h2>
          <h3>{planet.LengthOfDay}</h3>
          <Button color="red" onClick={open}>
            Delete
          </Button>
        </div>
      )}
      <Confirm open={confirm} onCancel={close} onConfirm={handleDelete} />
    </div>
  );

  Planet.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/planet/${id}`);
    const { data } = await res.json();

    return { planet: data };
  };
};

export default Planet;
