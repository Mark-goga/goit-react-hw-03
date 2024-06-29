import { Formik, Form, Field, ErrorMessage } from "formik";
import css from './ContactForm.module.css'
import { nanoid } from "nanoid";
import * as Yup from 'yup'
import { useId } from 'react';
export default function ContactForm({ submitForm }) {
  const initialValue = {
    name: "",
    number: "",
  };
    const ContactSchema = Yup.object().shape({
      name: Yup.string()
        .min(3, "Too short")
        .max(50, "Too long")
        .required("Required"),
      number: Yup.string()
        .min(3, "Too short")
        .max(50, "Too long")
        .required("Required"),
    });
  const idFrom = useId();
  const handleSubmit = (values, actions) => {
    values.id = nanoid()
    submitForm(values)    
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.box}>
            <label htmlFor={`first-${idFrom}`}>Name</label>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Name"
              id={`first-${idFrom}`}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
        </div>
       <div className={css.box}>
            <label htmlFor={`second-${idFrom}`}>Number</label>
            <Field
              className={css.input}
              type="tel"
              name="number"
              placeholder="Phone number"
              id={`second-${idFrom}`}
            />
            <ErrorMessage className={css.error} name="number" component="span" />
       </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}