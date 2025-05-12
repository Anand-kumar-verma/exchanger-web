import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
function AllConnectedAddress() {
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
            id: 3,
            label: "Email ID"
        },

        {
            id: 4,
            label: "Coin"
        },
        {
            id: 5,
            label: "Wallet Address"
        },

        {
            id: 6,
            label: "Received Coin"
        },
        {
            id: 7,
            label: "Transferred Coin"
        },
        {
            id: 8,
            label: "Available Coin"
        },
        {
            id: 9,
            label: "Generated Date"
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


                            




                        </TableRow>
                    )
                }

            </CustomTable>
        </div>
    )
}

export default AllConnectedAddress
