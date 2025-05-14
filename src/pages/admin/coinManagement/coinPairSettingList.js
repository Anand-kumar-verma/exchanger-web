import { Button } from '../../../components/button'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
import CustomSelect from '../../../components/customSelect';
import ListIcon from '@mui/icons-material/List';
import { useState } from 'react';

function CoinPairSettingList() {

    const headers = [
        {
            id: 0,
            label: "S. No."
        },

        {
            id: 1,
            label: "Coin Image"
        },

        {
            id: 2,
            label: "Claim Number"
        },
        {
            id: 3,
            label: "Claim Code"
        },
        {
            id: 4,
            label: "Claimed Date"
        },{
            id: 5,
            label: "Status"
        },
        {
            id: 6,
            label: "Payment Status"
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
                            <TableCell>ram</TableCell>
                            <TableCell>ram</TableCell>
                            <TableCell>ram</TableCell>


                            <TableCell align="left">
                                <Button variant="success">success</Button>
                            </TableCell>
                             <TableCell align="left">
                                <Button variant="submit">Excute</Button>
                            </TableCell>


                        </TableRow>
                    )
                }

            </CustomTable>

        </div>
    )
}

export default CoinPairSettingList
