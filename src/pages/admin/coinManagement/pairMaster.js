import { Button } from '../../../components/button'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
import { FiEdit } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
function PairMaster() {
    const headers = [
        {
            id: 0,
            label: "S. No."
        },
        {
            id: 1,
            label: "Requested By"
        },
        {
            id: 2,
            label: "Mobile"
        },
        {
            id: 3,
            label: "Listing Type"
        },

        {
            id: 4,
            label: "Coin Name"
        },
        {
            id: 5,
            label: "Coin Code"
        },

        {
            id: 6,
            label: "Coin Rate (USD)"
        },
        {
            id: 7,
            label: "Selling Start Date"
        },
        {
            id: 8,
            label: "Status "
        },
        {
            id: 9,
            label: "Action "
        },
        {
            id: 10,
            label: "Edit "
        },

    ]
    return (
        <div>
            <CustomTable isFilter headers={headers}>

                {
                    [1, 2, 3, 4, 5, 6]?.map((row, index) =>
                        <TableRow className='!bg-[#EBE9FD] !border-l-2 !mb-2 !relative  !border-gray-300'>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>ram</TableCell>

                            <TableCell>ram@gmail.com</TableCell>
                            <TableCell align="left">123</TableCell>



                            <TableCell align="left">23</TableCell>
                            <TableCell align="left">2342 </TableCell>
                            <TableCell align="left">Hello sir</TableCell>
                            <TableCell align="left">
                                <Button variant="success">success</Button>
                            </TableCell>
                            
                            <TableCell align="left"><GiReceiveMoney className='text-black' /></TableCell>
                            <TableCell align="left"><Button variant="blue">
                                confirm</Button>

                            </TableCell>
                            <TableCell align="left"><Button variant="blue"><FiEdit /></Button></TableCell>
                        </TableRow>
                    )
                }

            </CustomTable>
        </div>
    )
}

export default PairMaster
