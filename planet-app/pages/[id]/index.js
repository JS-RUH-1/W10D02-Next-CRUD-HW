import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';

const Planet = ({ planet }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deletePlanet();
        }
    }, [isDeleting])

    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const  deletePlanet = async () => {
        const planetId = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/planets/${planetId}`, {
                method: "Delete"
            });

            router.push("/");
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }

    return (
        <div className="note-container">
            {isDeleting
                ? <Loader active />
                :
                <>
                    <h1>{planet.name}</h1>
                    <p>{planet.NumberOfMoon}</p>
                    <p>{planet.LengthOfDay}</p>

                    <Button color='red' onClick={open}>Delete</Button>
                </>
            }
            <Confirm
                open={confirm}
                onCancel={close}
                onConfirm={handleDelete}
            />
        </div>
    )
}

Planet.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/planets/${id}`);
    const { data } = await res.json();

    return { planet: data }
}

export default Planet;