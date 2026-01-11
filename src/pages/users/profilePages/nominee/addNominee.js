import React from 'react'
import CustomInput from '../../../../components/customInput'
import { useFormik } from 'formik'
import { nomineeSchema } from '../../../../schema'
import CustomButton from '../../../../components/customButton'
import CustomSelect from '../../../../components/customSelect'

export default function AddNominee() {


    const initialValues = {
        fullName: "",
        relationship: "",
        dob: "",
        gender: "",
        mobile: "",
        email: "",
        address: "",
        idProofType: "",
        idProofNumber: ""
    }
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: nomineeSchema,
        onSubmit: (values) => {
            console.log(values,"values");
            

        }
    })
    return (
        <div className=''>
            <form onSubmit={formik.handleSubmit}>
                <div className='grid grid-cols-1 gap-5 mb-3 sm:grid-cols-2'>
                    <CustomInput
                        placeholder='Enter name'
                        name='fullName'
                        id='fullName'
                        formik={formik}

                    />
                    <CustomInput
                        placeholder='Enter email'
                        name='email'
                        id='email'
                        formik={formik}

                    />
                    <CustomInput
                        placeholder='Enter mobile'
                        name='mobile'
                        id='mobile'
                        formik={formik}

                    />
                    <CustomInput
                        placeholder='Enter relationship'
                        name='relationship'
                        id='relationship'
                        formik={formik}

                    />
                    <CustomInput
                        placeholder='Enter dob'
                        name='dob'
                        id='dob'
                        type='date'
                        formik={formik}

                    />
                    <CustomSelect
                        id='gender'
                        placeholder='Select Gender'
                        name='gender'
                        formik={formik}
                        options={[
                            { label: "Select", value: "" },
                            { label: "Male", value: "Male" },
                            { label: "Female", value: "Female" },
                            { label: "Other", value: "Other" }]}
                    />
                    <CustomInput
                        placeholder='Enter address'
                        name='address'
                        id='address'
                        formik={formik}

                    />
                    <CustomInput
                        placeholder='Enter idProofType'
                        name='idProofType'
                        id='idProofType'
                        formik={formik}

                    />
                    <CustomInput
                        placeholder='Enter idProofNumber'
                        name='idProofNumber'
                        id='idProofNumber'
                        formik={formik}

                    />


                </div>
                <CustomButton title='Submit' type='submit' />
            </form>

        </div>
    )
}
