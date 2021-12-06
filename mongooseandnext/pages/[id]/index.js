import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';

const planet = ({ planet }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deleteplanet();
        }
    }, [isDeleting])

    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deleteplanet = async () => {
        const planetId = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/planet/${planetId}`, {
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
        <div className="planet-container">
            {isDeleting
                ? <Loader active />
                :
                <>
                    <h1>{planet.name}</h1>
                    <p>{planet.moons}</p>
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

planet.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/planet/${id}`);
    const { data } = await res.json();

    return { planet: data }
}

export default planet;