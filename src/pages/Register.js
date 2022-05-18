import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const url = "http://localhost:4000"

export default function FormField() {
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'First name is too short!')
            .max(50, 'First name is too long!')
            .required('First name is required!'),
        lastName: Yup.string()
            .min(2, 'Last name is too Short!')
            .max(50, 'Last name is too Long!')
            .required('Last name is required!'),
        email: Yup.string().email('Email is invalid!').required('Email is required!!'),
        gender: Yup.string()
            .required('Gender is required!'),
        title: Yup.string()
            .required('Title is required!'),
        phone: Yup.string()
            .required(' Your phone number is required!'),
        dob: Yup.string()
            .required('Date of Birth is required!'),
        street: Yup.string()
            .required('Street address is required!'),
        city: Yup.string()
            .required('City is required!'),
        state: Yup.string()
            .required('State is required!'),
        country: Yup.string()
            .required('Country is required!')
    });
    let className = "text-sm text-red-600"
    return (
        <div>
            <h1>Signup!</h1>
            <Formik
                initialValues={{
                    title: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    gender: '',
                    phone: '',
                    dob: '',
                    street: '',
                    city: '',
                    state: '',
                    country: '',
                    image: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values); 
                    console.log(url) 
                    axios.post(`${url}/signup`, {...values})
                    .then(data =>{
                        console.log(data)
                    })
                    .catch(err =>{
                        console.log(err)
                    })
                }}
            >
                {({ errors, touched }) => (
                    <Form className='form_wrapper' action='POST'>
                        <Field name="title" placeholder="Your title: Miss/Mr/Mrs" />
                        {errors.title && touched.title ? (
                            <div className={className}>{errors.title}</div>
                        ) : null}
                        <Field name="firstName" placeholder="First name" />
                        {errors.firstName && touched.firstName ? (
                            <div className={className}>{errors.firstName}</div>
                        ) : null}
                        <Field name="lastName" placeholder="Last Name" />
                        {errors.lastName && touched.lastName ? (
                            <div className={className}>{errors.lastName}</div>
                        ) : null}
                        <Field name="email" type="email" placeholder="Enter email" />
                        {errors.email && touched.email ? <div className={className}>{errors.email}</div> : null}
                        <Field name="gender" placeholder="Gender" />
                        {errors.gender && touched.gender ? (
                            <div className={className}>{errors.gender}</div>
                        ) : null}
                        <Field name="phone" placeholder="Your phone number (with country code)" />
                        {errors.phone && touched.phone ? (
                            <div className={className}>{errors.phone}</div>
                        ) : null}
                        <Field name="dob" placeholder="Date of birth" type="date" />
                        {errors.dob && touched.dob ? (
                            <div className={className}>{errors.dob}</div>
                        ) : null}
                        <Field name="street" placeholder="Your street" />
                        {errors.street && touched.street ? (
                            <div className={className}>{errors.street}</div>
                        ) : null}
                        <Field name="city" placeholder="The city you live in" />
                        {errors.city && touched.city ? (
                            <div className={className}>{errors.city}</div>
                        ) : null}
                        <Field name="state" placeholder="The state you live in" />
                        {errors.state && touched.state ? (
                            <div className={className}>{errors.state}</div>
                        ) : null}
                        <Field name="country" placeholder="The country you live in" />
                        {errors.country && touched.country ? (
                            <div className={className}>{errors.country}</div>
                        ) : null}
                        <Field name="image" type="file" />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

// ${port}