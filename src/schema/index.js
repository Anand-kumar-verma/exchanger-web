import * as Yup from 'yup';

export const nomineeSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('Full name is required')
        .matches(/^[A-Za-z ]+$/, 'Only letters are allowed'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    mobile: Yup.string()
        .required('Mobile number is required')
        .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
    relationship: Yup.string()
        .required('Relationship is required'),
    dob: Yup.string()
        .required('DOB is required'),
    gender: Yup.string()
        .required('Gender is required'),
    address: Yup.string().optional(),
    pincode: Yup.string().optional()
});

