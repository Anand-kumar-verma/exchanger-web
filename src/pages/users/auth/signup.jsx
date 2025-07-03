// src/components/Register.js
import React from 'react';
import CustomButton from '../../../components/customButton';
import CustomInput from '../../../components/customInput';
import { useNavigate } from 'react-router';
import CustomSelect from '../../../components/customSelect';
import { useFormik } from 'formik';
import { signupSchema } from '../../../schema/authSchema';
import axios from 'axios';
import toast from 'react-hot-toast';
import { endpoint } from '../../../services/ApiContant';

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const initialValues = {
    fullName: '',
    email: '',
    mobileNumber: '',
    country: '',
    state: '',
    district: '',
    address: '',
    pincode: ''
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {

      const reqbody = {
        name: values.fullName,
        email: values.email,
        mobile_no: `${values.mobileNumber}`,
        // country: values.country,
        state: values.state,
        distric : values.district,
        current_location: values.address,
        pincode: `${values.pincode}`
      }
      registrationFn(reqbody)
    },
  })


  const registrationFn = async (reqbody) => {
    setLoading(true);
    try {
      const response = await axios.post(endpoint?.registration_api, reqbody, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      toast(response?.data?.message);
      setLoading(false);
      if (response?.data?.status_code === 201) {
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">

      <div className="w-full md:w-1/2 flex flex-col items-center px-8 py-12">
        <div className="w-full px-16 mb-8">
          <img
            onClick={() => navigate("/")}
            src='https://bscscan.com/assets/bsc/images/svg/logos/logo-light.svg?v=25.4.3.0'
            alt='logo'
            className='h-8 cursor-pointer' />
        </div>
        <h1 className="text-2xl font-semibold mb-5">Registration</h1>

        <form onSubmit={formik.handleSubmit} className="w-full max-w-md space-y-4">
          <div className="grid grid-cols-2  gap-3">
            <CustomInput
              placeholder='Enter full name'
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
              type='number'
              placeholder='Enter mobile number'
              name='mobileNumber'
              id='mobileNumber'
              formik={formik}
            />
            <CustomSelect
              placeholder='Select country'
              id='country'
              formik={formik}
              name='country'
              options={[
                { value: 'India', label: 'India' },
                { value: 'USA', label: 'USA' },
                { value: 'Germany', label: 'Germany' },
                // Add more countries as needed
              ]}

            />
            <CustomSelect placeholder='Select state'

              id='state'
              formik={formik}
              name='state'
              options={[
                { value: 'India', label: 'India' },
                { value: 'USA', label: 'USA' },
                { value: 'Germany', label: 'Germany' },
                // Add more countries as needed
              ]} />
            <CustomSelect placeholder='Select distic'
              id='district'
              formik={formik}
              name='district'
              options={[
                { value: 'India', label: 'India' },
                { value: 'USA', label: 'USA' },
                { value: 'Germany', label: 'Germany' },
                // Add more countries as needed
              ]}
            />
          </div>

          <CustomInput
            type='text'
            placeholder='Enter address'
            name='address'
            id='address'
            formik={formik}
          />
          <CustomInput
            type='number'
            placeholder='Enter pincode'
            name='pincode'
            id='pincode'
            formik={formik}

          />
          <p className="text-xs text-gray-500">
            Make sure that your BscScan password contains at least 8 characters, including a special character and a number.
          </p>
          {/* <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="text-sm">
              Remember me
            </label>
          </div> */}
          <CustomButton disabled={loading} type='submit' title='Sign up' className='!w-full' />

          <div className='text-end text-blue-600 font-serif text-sm mt-4 underline cursor-pointer' onClick={() => navigate("/login")}>Log In</div>
        </form>
      </div>

      {/* Right side - Benefits + Abstract background */}
      <div className="hidden md:flex w-1/2 relative items-center justify-center overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#5a8b30] via-secondary to-[#b1d88f] opacity-80 -z-10"></div>
        <div className="bg-white p-8 rounded shadow-md z-10">
          <h2 className="text-lg font-semibold mb-4">Ihre Vorteile:</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span> 14 Tage kostenlos testen
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span> Sofort loslegen
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span> Messbare Lernerfolge
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span> Online auf jedem Gerät verfügbar
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔️</span> Uneingeschränkt Benutzer importieren
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
