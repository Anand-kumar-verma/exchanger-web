import React from 'react'
import CustomButton from '../../../components/customButton'
import { FaUsersRectangle } from "react-icons/fa6";
import { FaTree } from "react-icons/fa6";
function NomineeDetails() {
    return (
        <div className="pl-6 py-2 w-full  bg-gray-50" >


            <div className='flex items-center gap-2'>
                <FaTree className='text-secondary' size={25} />
                <span className='text-lg font-semibold  gap-2 text-black'>Nominee Details</span>
            </div>
            <div className="mt-5">
                <p className='mb-1 font-normal text-primary'>Update Your Nominee Details</p>
                <p className='text-xs text-primary font-serif'>This will ensure that in case of any unfortunate event, their investments can be seamlessly transferred to their nominee without any hassle or delay. However, we understand if they do not want to nominate anyone at the moment. In that case, you will be required to opt out of nomination.</p>
                <CustomButton title='Update Your Nominee' startIcon={<FaUsersRectangle />} className={"!mt-2"} />
            </div>


        </div>
    )
}

export default NomineeDetails
