import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';

const Plant = ({ plant }) => {
    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deletePlant();
        }
    }, [isDeleting])
    const open = () => setConfirm(true);

    const close = () => setConfirm(false);

    const deletePlant = async () => {
        const plantId = router.query.id;
        try {
            const deleted = await fetch(`http://localhost:3000/api/plants/${plantId}`, {
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
                    <h1>{plant.PlantName}</h1>
                    <p>{plant.NumberOfMoons}</p>
                    <p>{plant.LengthOfDay}</p>
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

Plant.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/plants/${id}`);
    const { data } = await res.json();

    return { plant: data }
}

export default Plant;