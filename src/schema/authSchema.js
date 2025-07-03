// validationSchema.js

import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('Full name is required')
        .matches(/^[A-Za-z ]+$/, 'Only letters are allowed'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    mobileNumber: Yup.string()
        .required('Mobile number is required')
        .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
    country: Yup.string()
        .required('Country is required'),
    state: Yup.string()
        .required('State is required'),
    district: Yup.string()
        .required('District is required'),
    address: Yup.string()
        .required('Address is required')
        .min(10, 'Address must be at least 10 characters'),
    pincode: Yup.string()
        .required('Pincode is required')
        .matches(/^[0-9]{6}$/, 'Pincode must be 6 digits'),
});

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required'),
})




export { signupSchema, loginSchema }