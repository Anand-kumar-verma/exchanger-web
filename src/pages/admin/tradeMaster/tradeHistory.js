import { Button } from '../../../components/button'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
import { FiEdit } from "react-icons/fi";
function TradeHistory() {
    const headers = [
        {
            id: 0,
            label: "S. No."
        },
        {
            id: 2,
            label: "Name"
        },
        {
            id: 2,
            label: "Username"
        },
        {
            id: 3,
            label: "Trade Type"
        },

        {
            id: 4,
            label: "Market Name"
        },
        {
            id: 5,
            label: "Market Price"
        },

        {
            id: 6,
            label: "Coin Name"
        },
        {
            id: 7,
            label: "Coin Purchase"
        },
        {
            id: 8,
            label: "Coin Price"
        },
        {
            id: 9,
            label: "Trading Amount"
        },
        {
            id: 10,
            label: "Date"
        },
        {
            id: 11,
            label: "Status"
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
                            <TableCell align="left">{index + 1}003</TableCell>
                            <TableCell align="left">{index + 1}003</TableCell>


                            <TableCell align="left">
                               histoy
                            </TableCell>
                            <TableCell align="left">
                                <Button variant="pending">Pending</Button>
                            </TableCell>




                        </TableRow>
                    )
                }

            </CustomTable>
        </div>
    )
}

export default TradeHistory
