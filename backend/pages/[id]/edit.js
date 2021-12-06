import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';


const EditPlant = ({ plant }) => {
    const [form, setForm] = useState({ PlantName: plant.PlantName, NumberOfMoons: plant.NumberOfMoons,LengthOfDay:plant.LengthOfDay });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                updatePlant();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])


    const updatePlant = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/plants/${router.query.id}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let err = {};

        
if(!form.PlantName){
    err.PlantName='PlantName is required';
}

if(!form.NumberOfMoons){
    err.NumberOfMoons='NumberOfMoons is required';
}
if(!form.LengthOfDay){
    err.LengthOfDay='LengthOfDay is required'
}
        return err;
    }

    return (
        <div className="form-container">
            <h1>Update Note</h1>
            <div>

            {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
     
     
     <Form.Input
    fluid
    error={errors.PlantName ? {content: 
        ' enter Plant Name',pointing:
        'below'} : null}
    label='PlantName'
    placeholder='Plant Name'
    name='PlantName'
    onChange={handleChange}
    />

    <Form.Input
    fluid
    error={errors.NumberOfMoons ? {content: 
        ' enter NumberOfMoons',pointing:
        'below'} : null}
    label='Number Of Moons'
    placeholder='Number Of Moons'
    name='NumberOfMoons'
    onChange={handleChange}
    />

    <Form.Input
    fluid
    error={errors.LengthOfDay ? {content: 
        ' enter LengthOfDay',pointing:
        'below'} : null}
    label='Length Of Day'
    placeholder='Length Of Day'
    name='LengthOfDay'
    onChange={handleChange}
    />


    <Button type='submit'>Update</Button>
    </Form>  
                }
  </div>
        </div>
    )
}

EditPlant.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/plants/${id}`);
    const { data } = await res.json();

    return { plant: data }
}

export default EditPlant;