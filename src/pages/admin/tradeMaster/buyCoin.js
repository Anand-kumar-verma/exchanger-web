import { Button } from '../../../components/button'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
import { FiEdit } from "react-icons/fi";
function BuyCoin() {
    const headers = [
        {
            id: 0,
            label: "S. No."
        },
        {
            id: 2,
            label: "Username"
        },
        {
            id: 3,
            label: "Market"
        },

        {
            id: 4,
            label: "Coin"
        },
        {
            id: 5,
            label: "Bid Qty"
        },

        {
            id: 6,
            label: "Open Qty"
        },
        {
            id: 7,
            label: "Bid Rate"
        },
        {
            id: 8,
            label: "Bid Date"
        },
        {
            id: 9,
            label: "Status"
        },
        {
            id: 10,
            label: "Action"
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
                            <TableCell align="left">{index + 1}003</TableCell>


                            <TableCell align="left">
                                <Button variant="success">Open</Button>
                            </TableCell>
                            <TableCell align="left">
                                <Button variant="blue"><FiEdit /></Button>
                            </TableCell>




                        </TableRow>
                    )
                }

            </CustomTable>
        </div>
    )
}

export default BuyCoin
