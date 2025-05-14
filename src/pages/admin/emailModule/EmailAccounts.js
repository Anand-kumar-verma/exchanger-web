import { Button } from '../../../components/button'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
function EmailAccounts() {
    

        const headers = [
        {
            id: 0,
            label: "S. No."
        },
        {
            id: 2,
            label: "E-Mail ID"
        },
        {
            id: 3,
            label: "E-Mail ID"
        },

        {
            id: 4,
            label: "Password"
        },
        {
            id: 5,
            label: "SMTP Port"
        },

        {
            id: 6,
            label: "Status"
        },
        {
            id: 7,
            label: "Action"
        },
        
    ]
    return (
        <div>
            <Button variant="blue" size="sm">Add Template</Button>
            <CustomTable headers={headers}>

                {
                    [1]?.map((row, index) =>
                        <TableRow className='!bg-[#EBE9FD] !border-l-2 !mb-2 !relative  !border-gray-300'>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell align="left">12/23/2002</TableCell>
                            <TableCell>ram@gmail.com</TableCell>
                            <TableCell>ram</TableCell>


                            <TableCell align="left">237946786</TableCell>
                            <TableCell align="left">2342 $</TableCell>
                            <TableCell align="left">
                                <Button variant="blue">Edit</Button>
                            </TableCell>
                            



                        </TableRow>
                    )
                }

            </CustomTable>
        </div>
    )
}

export default EmailAccounts
