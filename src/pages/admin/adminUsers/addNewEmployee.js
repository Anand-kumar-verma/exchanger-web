import { useState } from 'react'
import CustomSelect from "../../../components/customSelect"
import CustomInput from '../../../components/customInput';
import { FaCity, FaEye, FaFileCode, FaUser } from "react-icons/fa";
import { Button } from '../../../components/button';
import { GiCrownCoin } from "react-icons/gi";
import { RiGalleryFill } from "react-icons/ri";
import { IoTransgender } from 'react-icons/io5';
import { SiAuthy, SiParrotsecurity } from "react-icons/si";
import { IoMdCall } from 'react-icons/io';
import { FaLocationDot } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import InputDiv from '../../../components/inputDiv';
import CustomSwitch from '../../../components/customSwitch';
const sx = {
    '& .MuiInputBase-input': {
        paddingLeft: 1, // removes padding inside input
    },
    '& .MuiOutlinedInput-root': {
        padding: 0, // removes padding inside outlined input wrapper
    },
}
const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" }
];
function AddNewEmployee() {
    const [fruit, setFruit] = useState("");

    const handleSelectChange = (event) => {
        setFruit(event.target.value);
    };
    return (
        <div className='w-full bg-white shadow rounded-md p-3 border border-gray-200 grid grid-cols-1 mt-5'>
            <div className='flex flex-row gap-2'>
                <GiCrownCoin className='text-yellow-400' />
                <span className='text-blue100 text-xs'>Add new employee. Enter following details to create new employee. Select user rights first..</span>
            </div>
            <div class="flex  space-x-4 py-4 bg-white">
                    {
                        ["Super Admin", "Support", "Client Admin", "HOD"].map((row, index) =>
                            <Button variant="yellow100" key={index}>
                                {row}
                            </Button>)
                    }

                    
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                

                <CustomInput
                    placeholder="Employee name"
                    sx={sx}
                    startIcons={<FaUser className="text-blue100" size={20} />}

                />

                <CustomInput
                    placeholder="Browse File"
                    type='file'
                    sx={sx}
                    startIcons={<RiGalleryFill className="text-blue100" size={20} />}
                />

                <CustomSelect
                    id="gender"
                    placeholder="Select Gender"
                    value={fruit}
                    onChange={handleSelectChange}
                    options={options}
                    rightIcons={<IoTransgender className="text-blue100" size={25} />}
                    className='!placeholder-slate-400 !w-full'
                />
                <CustomInput
                    placeholder="Binatic Manager"
                    sx={sx}
                    startIcons={<FaUser className="text-blue100" size={20} />}

                />
                <CustomInput
                    placeholder={"Mobile no. 1"}
                    sx={sx}
                    startIcons={<IoMdCall className="text-blue100" size={20} />}

                />
                <CustomInput
                    placeholder="Mobile no. 2"
                    sx={sx}
                    startIcons={<IoMdCall className="text-blue100" size={20} />}

                />
                <CustomSelect
                    id="gender"
                    placeholder="Select Security"
                    value={fruit}
                    onChange={handleSelectChange}
                    options={options}
                    rightIcons={<SiParrotsecurity className="text-blue100" size={25} />}
                    className='!placeholder-slate-400 !w-full'
                />
                <CustomInput
                    placeholder="Province"
                    sx={sx}
                    startIcons={<FaUser className="text-blue100" size={20} />}

                />





                <CustomInput
                    placeholder="City"
                    sx={sx}
                    startIcons={<FaCity className="text-blue100" size={20} />}


                />



                <CustomInput
                    placeholder="Zip Code "
                    sx={sx}
                    startIcons={<FaFileCode className="text-blue100" size={20} />}


                />
                <CustomInput
                    placeholder="Address"
                    sx={sx}
                    startIcons={<FaLocationDot className="text-blue100" size={20} />}


                />
                <CustomInput
                    placeholder="Username"
                    sx={sx}
                    startIcons={<FaUser className="text-blue100" size={20} />}


                />
                <InputDiv
                    leftIcons={<SiAuthy className="text-blue100" size={20} />}
                >
                    <div className='flex items-center gap-2'>
                        <span className='text-gray-400 pl-2'>Google Authontication</span>
                        <CustomSwitch />
                    </div>
                </InputDiv>

                <CustomInput
                    placeholder="Password"
                    sx={sx}
                    startIcons={<MdLock className="text-blue100" size={20} />}
                    endIcons={<FaEye className="text-blue100 mr-2" size={20} />}

                />













                <div className='flex flex-row gap-3'>
                    <Button variant="submit" size="sm">Submit</Button>
                    <Button variant="close" size="sm">Close</Button>
                </div>
            </div>
        </div>
    )
}

export default AddNewEmployee
