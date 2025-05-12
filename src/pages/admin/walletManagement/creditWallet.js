import React, { useState } from 'react'
import CustomSelect from "../../../components/customSelect"
import { IoSearch } from 'react-icons/io5';
import ListIcon from '@mui/icons-material/List';
import CustomInput from '../../../components/customInput';
import { FaUser } from "react-icons/fa";
import { TbCurrencyDollar } from "react-icons/tb";
import { TbMessageCircleFilled } from "react-icons/tb";
import { Button } from '../../../components/button';
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
function CreditWallet() {
  const [fruit, setFruit] = useState("");

  const handleSelectChange = (event) => {
    setFruit(event.target.value);
  };
  return (
    <div className='w-full bg-white shadow rounded-md p-3 border border-gray-200 grid grid-cols-2 mt-5'>
      <div className='flex flex-col gap-3'>
        <CustomSelect
          id="fruit"
          placeholder="-- Select Coin --"
          value={fruit}
          onChange={handleSelectChange}
          options={options}
          rightIcons={<ListIcon className="text-blue100" size={25} />}
          className='!placeholder-slate-400 !w-full'
        />
        <CustomInput
          placeholder="Email Id"
          sx={sx}
          startIcons={<FaUser className="text-blue100" size={20} />}
          className=''
        />
        <CustomInput
          placeholder="Amount "
          sx={sx}
          startIcons={<TbCurrencyDollar  className="text-blue100" size={20} />}
          className=''
        />
        <CustomInput
          placeholder="Remarks"
          sx={sx}
          startIcons={<TbMessageCircleFilled className="text-blue100" size={20} />}
          className=''
          multiline
          rows={4}
        />
        <div className='flex flex-row gap-3'>
          <Button variant="submit" size="sm">Submit</Button>
          <Button variant="close" size="sm">Close</Button>
        </div>
      </div>
    </div>
  )
}

export default CreditWallet
