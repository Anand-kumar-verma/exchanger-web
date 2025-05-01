import React from 'react'
import CustomButton from '../../../components/customButton'
import { BsBank2 } from "react-icons/bs";
import { useNavigate } from 'react-router';
function ManageBank() {
    const navigate = useNavigate()
    return (
        <div className="pl-6 py-2 w-full  bg-gray-50" >
            <div className='flex items-center gap-2'>
                <BsBank2 className='text-secondary' size={25} />
                <span className='text-lg font-semibold  gap-2 text-black'>Manage Bank</span>
            </div>
            <div className="mt-5">
                <p className='text-xs text-primary font-serif'>You can complete you KYC an Bitalx in less than 1 min, Just verify your Aahar number with OTP from UIDAL and enter low profile details, Bank Details thats it.</p>
                <CustomButton onClick={()=>navigate("verify-bank-details")} title='Manage' startIcon={<BsBank2 />} className={"!mt-2"} />
            </div>
        </div>
    )
}

export default ManageBank
