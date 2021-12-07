import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const Newplanet = () => {
    const [form, setForm] = useState({ name: '', moons: 0, LengthOfDay: 0 });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createplanet();
            }
            else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const createplanet = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/planet', {
                method: 'POST',
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
            <h1>Create planet</h1>
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
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                fluid
                                label='moons'
                                placeholder='moons'
                                name='moons'
                                error={errors.moons ? { content: 'Please enter moons number', pointing: 'below' } : null}
                                onChange={handleChange}
                            />
                            <Form.TextArea
                                fluid
                                label='LengthOfDay'
                                placeholder='LengthOfDay'
                                name='LengthOfDay'
                                error={errors.LengthOfDay ? { content: 'Please enter LengthOfDay', pointing: 'below' } : null}
                                onChange={handleChange}
                            />
                            <Button type='submit'>Create</Button>
                        </Form>
                }
            </div>
        </div>
    )
}

export default Newplanet;