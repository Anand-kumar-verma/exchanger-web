import { Button } from '../../../components/button'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
import CustomSelect from '../../../components/customSelect';
import ListIcon from '@mui/icons-material/List';
import { useState } from 'react';


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
function CoinPairSetting() {
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
            label: "Coin Name"
        },
      
        {
            id: 2,
            label: "Status"
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
               
            </div>
            </div>
            <CustomTable headers={headers}>

                {
                    [1, 2, 3, 4, 5, 6]?.map((row, index) =>
                        <TableRow className='!bg-[#EBE9FD] !border-l-2 !mb-2 !relative  !border-gray-300'>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>ram</TableCell>

                            
                            <TableCell align="left">
                                <Button variant="success">success</Button>
                            </TableCell>

                           
                          </TableRow>
                    )
                }

            </CustomTable>

        </div>
    )
}

export default CoinPairSetting
