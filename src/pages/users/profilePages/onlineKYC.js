import React from 'react'
import CustomButton from '../../../components/customButton'
import { RxDashboard } from "react-icons/rx";
import { HiUserGroup } from "react-icons/hi2";
function OnlineKYC() {
    return (
        <div className="pl-6 py-2 w-full min-h-96 md:min-h-screen" >


            <div className='flex items-center gap-2'>
                <HiUserGroup className='text-secondary' size={25} />
                <span className='text-lg font-semibold  gap-2 text-black'>Online KYC</span>
            </div>
            <div className="mt-5">
                <p className='text-xs text-primary font-serif'>You can complete you KYC an Bitalx in less than 1 min, Just verify your Aahar number with OTP from UIDAL and enter low profile details, Bank Details thats it.</p>
                <CustomButton title='Complete your KYC' startIcon={<RxDashboard />} className={"!mt-2"} />
            </div>


        </div>
    )
}

export default OnlineKYC
