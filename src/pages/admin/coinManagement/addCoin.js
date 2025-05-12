import { useState } from 'react'
import CustomSelect from "../../../components/customSelect"
import ListIcon from '@mui/icons-material/List';
import CustomInput from '../../../components/customInput';
import { FaAddressCard, FaGgCircle, FaLink, FaUser } from "react-icons/fa";
import { TbCurrencyDollar, TbLanguage } from "react-icons/tb";
import { TbMessageCircleFilled } from "react-icons/tb";
import { Button } from '../../../components/button';
import { GiCrownCoin } from "react-icons/gi";
import { RiGalleryFill } from "react-icons/ri";
const sx = {
    '& .MuiInputBase-input': {
        paddingLeft: 1, // removes padding inside input
    },
    '& .MuiOutlinedInput-root': {
        padding: 0, // removes padding inside outlined input wrapper
    },
}
const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
];
function AddCoin() {
    const [fruit, setFruit] = useState("");

    const handleSelectChange = (event) => {
        setFruit(event.target.value);
    };
    return (
        <div className='w-full bg-white shadow rounded-md p-3 border border-gray-200 grid grid-cols-1 mt-5'>
            <div className='flex flex-row gap-2'>
                <GiCrownCoin className='text-yellow-400' />
                <span className='text-blue100 text-xs'>Your Listed Coin Will Be Available For Sell After Admin Confirmation It Will Take 2-3 Business Days For Approval.</span>
            </div>
            <div className='grid mt-5 grid-cols-1 md:grid-cols-2 gap-3'>

                <CustomSelect
                    id="fruit"
                    placeholder="Select One Listing Type "
                    value={fruit}
                    onChange={handleSelectChange}
                    options={options}
                    rightIcons={<ListIcon className="text-blue100" size={25} />}
                    className='!placeholder-slate-400 !w-full'
                />
                <CustomInput
                    placeholder="Coin Full Name"
                    sx={sx}
                    startIcons={<FaUser className="text-blue100" size={20} />}
                    className=''
                />
                <CustomInput
                    placeholder="Coin Short Name "
                    sx={sx}
                    startIcons={<TbCurrencyDollar className="text-blue100" size={20} />}
                    className=''
                />
                <CustomInput
                    placeholder="Contract Address"
                    sx={sx}
                    startIcons={<FaAddressCard className="text-blue100" size={20} />}
                    className=''

                />



                <CustomInput
                    placeholder="No of Decimal "
                    sx={sx}
                    startIcons={<FaGgCircle  className="text-blue100" size={20} />}
                    className=''

                />
                <CustomInput
                    placeholder="Total Supply"
                    sx={sx}
                    startIcons={<TbCurrencyDollar className="text-blue100" size={20} />}
                    className=''

                />
                <CustomInput
                    placeholder="Circulating Supply"
                    sx={sx}
                    startIcons={<TbCurrencyDollar className="text-blue100" size={20} />}
                    className=''

                />
                <CustomInput
                    placeholder="Browse File"
                    sx={sx}
                    startIcons={<RiGalleryFill className="text-blue100" size={20} />}
                    className=''

                />
                <CustomInput
                    placeholder="Coin Price In USD"
                    sx={sx}
                    startIcons={<TbMessageCircleFilled className="text-blue100" size={20} />}
                    className=''

                /><CustomInput
                    placeholder="Coins Trade Start Date"
                    sx={sx}
                    startIcons={<TbMessageCircleFilled className="text-blue100" size={20} />}
                    className=''

                />
                <CustomInput
                    placeholder="Development Algorithm"
                    sx={sx}
                    startIcons={<TbCurrencyDollar className="text-blue100" size={20} />}
                    className=''

                />
                <CustomInput
                    placeholder="Development Language"
                    sx={sx}
                    startIcons={<TbLanguage  className="text-blue100" size={20} />}
                    className=''

                />
                <CustomSelect
                    id="fruit"
                    placeholder="Select Network"
                    value={fruit}
                    onChange={handleSelectChange}
                    options={options}
                    rightIcons={<ListIcon className="text-blue100" size={25} />}
                    className='!placeholder-slate-400 !w-full'
                />
                <CustomInput
                    placeholder="Source Link (GitHub)"
                    sx={sx}
                    startIcons={<FaLink className="text-blue100" size={20} />}
                    className=''
                />
                <CustomInput
                    placeholder="Explorer Link"
                    sx={sx}
                    startIcons={<FaLink className="text-blue100" size={20} />}
                    className=''
                />
                <CustomInput
                    placeholder="Website URL"
                    sx={sx}
                    startIcons={<FaLink className="text-blue100" size={20} />}
                    className=''
                />
                <CustomInput
                    placeholder="Description of Coin"
                    sx={sx}
                    startIcons={<TbMessageCircleFilled className="text-blue100" size={20} />}
                    className=''
                    multiline
                    rows={3}
                />
                <CustomInput
                    placeholder="Comments/Additional Info"
                    sx={sx}
                    startIcons={<TbMessageCircleFilled className="text-blue100" size={20} />}
                    className=''
                    multiline
                    rows={3}
                />
                









                <div className='flex flex-row gap-3'>
                    <Button variant="submit" size="sm">Submit</Button>
                    <Button variant="close" size="sm">Close</Button>
                </div>
            </div>
        </div>
    )
}

export default AddCoin
