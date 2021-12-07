import Link from "next/link";
import { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Form, Loader } from "isomorphic-ui-react";
import { useRouter } from "next/router";
import { create } from "../models/planet";
import planet from "../../models/planet";

const EditPlanet = ({ planet }) => {
  const [form, setForm] = useState({
    name: planet.name,
    NumberOfMoon: planet.NumberOfMoon,
    LengthOfDay: planet.LengthOfDay,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Opject.Keys(errors).length === 0) {
        updatePlanet();
        // alert("submit success");
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const updatePlanet = () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/planet/${router.query.id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      router.push("/");
    } catch {
      console.log(error);
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};

    if (!form.name) {
      err.name = "planet name is required";
    }

    if (!form.NumberOfMoon) {
      err.NumberOfMoon = "NumberOfMoon  is required";
    }

    if (!form.LengthOfDay) {
      err.LengthOfDay = "LengthOfDay  is required";
    }

    return err;
  };
  return (
    <div>
      <h1> update planet</h1>

      <div>
        {isSubmitting ? (
          <Loader activ inline="centered" />
        ) : (
          <Form onSubmit={handelSubmit}>
            <Form.Input
              fluid
              error={
                errors.planetName
                  ? { content: "please enter planetName", pointing: "below" }
                  : null
              }
              label="planetName"
              placeholder="0"
              name="0"
              value={form.name}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              error={
                errors.NumberOfMoon
                  ? { content: "please enter NumberOfMoon", pointing: "below" }
                  : null
              }
              label="NumberOfMoon"
              placeholder="NumberOfMoon"
              name="NumberOfMoon"
              value={form.NumberOfMoon}
              onChange={handleChange}
            />

            <Form.Input
              fluid
              error={
                errors.LengthOfDay
                  ? { content: "please enter LengthOfDay", pointing: "below" }
                  : null
              }
              label="LengthOfDay"
              placeholder="LengthOfDay"
              name="LengthOfDay"
              value={form.LengthOfDay}
              onChange={handleChange}
            />
            <Button type="submit">Update</Button>
          </Form>
        )}
      </div>
    </div>
  );
};

EditPlanet.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/planet/${id}`);
  const { data } = await res.json();

  return { planet: data };
};

export default EditPlanet;
