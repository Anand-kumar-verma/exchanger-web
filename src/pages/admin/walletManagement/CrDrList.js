import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
function CrDrList() {
    const headers = [
        {
            id: 0,
            label: "S. No."
        },
        {
            id: 2,
            label: "Date"
        },
        {
            id: 3,
            label: " Email id "
        },

        {
            id: 4,
            label: "Transaction Type"
        },
        {
            id: 5,
            label: "Coin"
        },

        {
            id: 6,
            label: "Amount"
        },
        {
            id: 7,
            label: "Remark"
        },
        {
            id: 8,
            label: "TransferBy"
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
                            <TableCell align="left">Hello sir</TableCell>
                            <TableCell align="left">{index + 1}003</TableCell>




                        </TableRow>
                    )
                }

            </CustomTable>
        </div>
    )
}

export default CrDrList
