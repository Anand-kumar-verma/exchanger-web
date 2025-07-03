// src/components/Register.js
import React, { useState } from 'react';
import CustomButton from '../../../components/customButton';
import CustomInput from '../../../components/customInput';
import { useNavigate } from 'react-router';
import CustomSelect from '../../../components/customSelect';
import { useFormik } from 'formik';
import { loginSchema, signupSchema } from '../../../schema/authSchema';
import axios from 'axios';
import { endpoint } from '../../../services/ApiContant';
import toast from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const reqbody = {
        email: values.email,
        password: values.password,
        user_type: 'user',
      }
      loginFn(reqbody)
    },
  })

  const loginFn = async (reqbody) => {
    setLoading(true);
    try {
      const response = await axios.post(endpoint?.login_api, reqbody, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      toast(response?.data?.message);
      // setLoading(false);
      if (response?.data?.status_code === 200) {
        localStorage.setItem("token", response?.data?.token);
        localStorage.setItem("userData", response?.data.data);
        navigate("/");
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen">

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-8 py-12">
        <div className="w-full px-16 mb-8">
          <img
            onClick={() => navigate("/")}
            src='https://bscscan.com/assets/bsc/images/svg/logos/logo-light.svg?v=25.4.3.0'
            alt='logo'
            className='h-8 cursor-pointer' />
        </div>
        <h1 className="text-2xl font-semibold mb-5">Log in</h1>

        <form onSubmit={formik.handleSubmit} className="w-full max-w-md space-y-4">

          <CustomInput
            placeholder='Enter username'
            name='email'
            id='email'
            formik={formik}

          />
          <CustomInput
            placeholder='Enter password'
            name='password'
            id='password'
            formik={formik}

          />


          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="text-sm">
              Remember me
            </label>
          </div>
          <CustomButton disabled={loading} type='submit' title='Login' className='!w-full' />
          <div className='text-end text-blue-600 font-serif text-sm mt-4 underline cursor-pointer' onClick={() => navigate("/signup")}>Sign up</div>
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
