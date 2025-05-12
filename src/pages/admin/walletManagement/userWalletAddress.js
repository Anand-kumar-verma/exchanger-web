import { Button } from '../../../components/button'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
function UserWalletAddress() {
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
            label: " Email id "
        },

        {
            id: 4,
            label: "Type"
        },
        {
            id: 5,
            label: "Coin Code"
        },

        {
            id: 6,
            label: "Wallet Address"
        },
        {
            id: 7,
            label: "Amount "
        },
        {
            id: 8,
            label: "Generated Date"
        },
        {
            id: 9,
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
                            <TableCell align="left">12/23/2002</TableCell>
                            <TableCell>ram@gmail.com</TableCell>
                            <TableCell>ram</TableCell>


                            <TableCell align="left">237946786</TableCell>
                            <TableCell align="left">2342 $</TableCell>
                            <TableCell align="left">
                                <Button variant="blue">Copy</Button>
                            </TableCell>
                            <TableCell align="left">{index + 1}003</TableCell>
                            <TableCell align="left">
                                <Button variant="success">Active</Button>
                            </TableCell>




                        </TableRow>
                    )
                }

            </CustomTable>
        </div>
    )
}

export default UserWalletAddress
