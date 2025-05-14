import { Button } from '../../../components/button'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
function EmailTemplate() {
   const headers = [
        {
            id: 0,
            label: "S. No."
        },
        {
            id: 2,
            label: "Template"
        },
        {
            id: 3,
            label: "Subject"
        },

        {
            id: 4,
            label: "Display Status"
        },
        {
            id: 5,
            label: "Date"
        },

        {
            id: 6,
            label: "Edit"
        },
        
    ]
    return (
        <div className='!mt-5'>
            <Button variant="blue" size="sm">Add Accounts</Button>
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
                            



                        </TableRow>
                    )
                }

            </CustomTable>
        </div>
    )
}

export default EmailTemplate
