import { Button } from '../../../components/button'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
function TransferReport() {
    const headers = [
        {
            id: 0,
            label: "S. No."
        },
        {
            id: 2,
            label: "From User"
        },
        {
            id: 3,
            label: "Coin"
        },

        {
            id: 4,
            label: "To User"
        },
        {
            id: 5,
            label: "Amount"
        },

        {
            id: 6,
            label: "Net"
        },
        {
            id: 7,
            label: "Activity Date "
        },
        {
            id: 8,
            label: "Email Status"
        },
        {
            id: 9,
            label: "Transfer Status"
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
                            <TableCell align="left">
                                <Button variant="success">Confirm</Button>
                            </TableCell>

                            <TableCell align="left">
                                <Button variant="success">Success</Button>
                            </TableCell>
                        </TableRow>
                    )
                }

            </CustomTable>
        </div>
    )
}

export default TransferReport
