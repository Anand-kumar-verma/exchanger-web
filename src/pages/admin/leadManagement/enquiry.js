import { FaEye } from 'react-icons/fa';
import { Button } from '../../../components/button'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
import { FiEdit } from "react-icons/fi";
function Enquiry() {
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
            label: "Date"
        },

        {
            id: 4,
            label: "E-mail"
        },
        {
            id: 5,
            label: "Mobile"
        },

        {
            id: 6,
            label: "Skype ID"
        },
        {
            id: 7,
            label: "Organization"
        },
        {
            id: 8,
            label: "Message"
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
                                <Button variant="blue"><FaEye  /></Button>
                            </TableCell>




                        </TableRow>
                    )
                }

            </CustomTable>
        </div>
    )
}

export default Enquiry
