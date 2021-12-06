import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const Editplanet = ({ planet }) => {
    const [form, setForm] = useState({ name: planet.name, moons: planet.moons, LengthOfDay: planet.LengthOfDay });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                updateplanet();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const updateplanet = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/planet/${router.query.id}`, {
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

        if (!form.name) {
            err.name = 'name is required';
        }
        if (!form.moons) {
            err.moons = 'moons is required';
        }
        if (!form.LengthOfDay) {
            err.LengthOfDay = 'LengthOfDay is required';
        }


        return err;
    }

    return (
        <div className="form-container">
            <h1>Update planet</h1>
            <div>
                {
                    isSubmitting
                        ? <Loader active inline='centered' />
                        : <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                error={errors.name ? { content: 'Please enter a name', pointing: 'below' } : null}
                                label='name'
                                placeholder='name'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                fluid
                                label='moons'
                                placeholder='moons'
                                name='moons'
                                value={form.moons}
                                error={errors.moons ? { content: 'Please enter moons number', pointing: 'below' } : null}
                                onChange={handleChange}
                            />
                                                    <Form.TextArea
                                fluid
                                label='LengthOfDay'
                                placeholder='LengthOfDay'
                                name='LengthOfDay'
                                value={form.LengthOfDay}
                                error={errors.LengthOfDay ? { content: 'Please enter LengthOfDay', pointing: 'below' } : null}
                                onChange={handleChange}
                            />
                            <Button type='submit'>Update</Button>
                        </Form>
                }
            </div>
        </div>
    )
}

Editplanet.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/planet/${id}`);
    const { data } = await res.json();

    return { planet: data }
}

export default Editplanet;