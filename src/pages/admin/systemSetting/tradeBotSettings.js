import { Button } from '../../../components/button'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
import { useState } from 'react';
import CustomInput from '../../../components/customInput';
import { TbCurrencyDollar } from 'react-icons/tb';
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
function TradeBotSettings() {
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
            label: "Caption"
        },
        {
            id: 2,
            label: "Limits"
        },
        {
            id: 3,
            label: "Created By"
        },

        {
            id: 4,
            label: "Created By"
        },
        {
            id: 5,
            label: "Status"
        },




    ]
    return (
        <div>
            <div className='grid grid-cols-2 my-5'>
                <div className='flex flex-col gap-3  '>
                    <CustomInput
                        placeholder="Enter"
                        label="Trade Match UP % For Buy"
                        sx={sx}
                        startIcons={<TbCurrencyDollar className="text-blue100" size={20} />}
                        className=''
                    />
                    <CustomInput
                        placeholder="Enter"
                        label="Trade Match DOWN % For Sell"
                        sx={sx}
                        startIcons={<TbCurrencyDollar className="text-blue100" size={20} />}
                        className=''
                    />
                    <div className='flex flex-row gap-3'>
                        <Button variant="submit" size="sm">Edit</Button>
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


                            <TableCell align="left">{row}

                            </TableCell>
                        </TableRow>
                    )
                }

            </CustomTable>

        </div>
    )
}

export default TradeBotSettings
