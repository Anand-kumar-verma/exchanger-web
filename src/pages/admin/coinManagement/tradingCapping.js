import { useState } from 'react'
import CustomSelect from "../../../components/customSelect"
import ListIcon from '@mui/icons-material/List';
import CustomInput from '../../../components/customInput';
import { TbCurrencyDollar } from "react-icons/tb";
import { Button } from '../../../components/button';
import { RiExchangeDollarLine } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
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
function TradingCapping() {
    const [fruit, setFruit] = useState("");

    const handleSelectChange = (event) => {
        setFruit(event.target.value);
    };
    return (
        <div className='w-full bg-white shadow rounded-md p-3 border border-gray-200 grid grid-cols-1 mt-5'>
          
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>

                <CustomSelect
                    id="fruit"
                    placeholder="Select Coin"
                    value={fruit}
                    onChange={handleSelectChange}
                    options={options}
                    rightIcons={<ListIcon className="text-blue100" size={25} />}
                    className='!placeholder-slate-400 !w-full'
                />
                <CustomSelect
                    id="fruit"
                    placeholder="Select Trading Status"
                    value={fruit}
                    onChange={handleSelectChange}
                    options={options}
                    rightIcons={<ListIcon className="text-blue100" size={25} />}
                    className='!placeholder-slate-400 !w-full'
                />
                <CustomInput
                    placeholder="Min Trade Price for Sell"
                    label={"Min Trade Price for Sell"}
                    sx={sx}
                    startIcons={<TbCurrencyDollar className="text-blue100" size={20} />}
                    className=''
                />
                <CustomInput
                    placeholder="Max Trade Price for Sell"
                    label={"Max Trade Price for Sell"}
                    sx={sx}
                    startIcons={<TbCurrencyDollar className="text-blue100" size={20} />}
                    className=''
                />
                <CustomInput
                    placeholder="Min Trade Volume for Sell"
                    sx={sx}
                    label={"Min Trade Volume for Sell"}
                    startIcons={<RiExchangeDollarLine  className="text-blue100" size={20} />}
                    className=''

                />



                <CustomInput
                    placeholder="Max Trade Volume for Sell"
                    label={"Max Trade Volume for Sell"}
                    sx={sx}
                    startIcons={<RiExchangeDollarLine   className="text-blue100" size={20} />}
                    className=''

                />
                <CustomInput
                    placeholder="Min Trade Price for Buy"
                    label={"Min Trade Price for Buy"}
                    sx={sx}
                    startIcons={<TbCurrencyDollar className="text-blue100" size={20} />}
                    className=''

                />
                <CustomInput
                    placeholder="Max Trade Price for Buy"
                    label={"Max Trade Price for Buy"}
                    sx={sx}
                    startIcons={<TbCurrencyDollar className="text-blue100" size={20} />}
                    className=''

                />
                <CustomInput
                    placeholder="Min Trade Volume for Buy"
                    label={"Min Trade Volume for Buy"}
                    sx={sx}
                    startIcons={<RiExchangeDollarLine  className="text-blue100" size={20} />}
                    className=''

                />
                <CustomInput
                    placeholder="Max Trade Volume for Buy"
                    label={"Max Trade Volume for Buy"}
                    sx={sx}
                    startIcons={<RiExchangeDollarLine  className="text-blue100" size={20} />}
                    className=''

                /><CustomInput
                    placeholder="No of Max Trade for Sell"
                    label={"No of Max Trade for Sell"}
                    sx={sx}
                    startIcons={<AiFillLike  className="text-blue100" size={20} />}
                    className=''

                />
                <CustomInput
                    placeholder="No of Max Trade for Buy"
                    label={"No of Max Trade for Buy"}
                    sx={sx}
                    startIcons={<AiFillLike  className="text-blue100" size={20} />}
                    className=''

                />
                <div className='flex flex-row gap-3'>
                    <Button variant="submit" size="sm">Submit</Button>
                    <Button variant="close" size="sm">Close</Button>
                </div>
            </div>
        </div>
    )
}

export default TradingCapping
