import { Button } from '../../../components/button'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
import CustomSelect from '../../../components/customSelect';
import ListIcon from '@mui/icons-material/List';
import { useState } from 'react';
import CustomInput from '../../../components/customInput';
import { FaUser } from 'react-icons/fa';


const sx = {
  '& .MuiInputBase-input': {
    paddingLeft: 1, 
  },
  '& .MuiOutlinedInput-root': {
    padding: 0, 
  },
}
const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];
function CoinRateUpdationSetting() {
     const [fruit, setFruit] = useState("");
    
      const handleSelectChange = (event) => {
        setFruit(event.target.value);
      };
    const headers = [
        {
            id: 0,
            label: "S. No."
        },
        {
            id: 1,
            label: "Purchase Type"
        },
        {
            id: 2,
            label: "Coin Name"
        },
        {
            id: 3,
            label: "Created By"
        },

        {
            id: 4,
            label: "Created Date"
        },
        {
            id: 5,
            label: "Status"
        },

        {
            id: 6,
            label: "Action"
        },
        
       
    ]
    return (
        <div>
            <div className='grid grid-cols-2 my-5'>
                <div className='flex flex-col gap-3  '>
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
                <div className='flex flex-row gap-3'>
                    <Button variant="submit" size="sm">Update</Button>
                    <Button variant="close" size="sm">Clear</Button>
                </div>
            </div>
            </div>
            <CustomTable headers={headers}>

                {
                    [1, 2, 3, 4, 5, 6]?.map((row, index) =>
                        <TableRow className='!bg-[#EBE9FD] !border-l-2 !mb-2 !relative  !border-gray-300'>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>ram</TableCell>

                            <TableCell>ram@gmail.com</TableCell>
                            <TableCell align="left">123</TableCell>



                            <TableCell align="left">23</TableCell>
                            <TableCell align="left">
                                <Button variant="success">success</Button>
                            </TableCell>

                            <TableCell align="left"><Button variant="outline">
                                Deactivate</Button>

                            </TableCell>
                          </TableRow>
                    )
                }

            </CustomTable>

        </div>
    )
}

export default CoinRateUpdationSetting
