import React from 'react'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
import CustomButton from "../../../components/customButton"
import { IoIosCheckmark } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Button } from "../../../components/button"
function KYCList() {
    const headers = [
        {
            id: 0,
            label: "S. No."
        },
        {
            id: 2,
            label: "USER NAME"
        },
        {
            id: 3,
            label: "MOBILE"
        },
        {
            id: 4,
            label: "ACTIVITY DATE & TIME"
        },
        {
            id: 5,
            label: "PHOTOGRAPH"
        },
        {
            id: 6,
            label: "ID CARD"
        },
        {
            id: 7,
            label: " PAN"
        },
        {
            id: 8,
            label: "KYC "
        },
        {
            id: 9,
            label: "DETAILS"
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
                            <TableCell align="left">12/23/2002</TableCell>
                            <TableCell align="left">
                                <IoIosCheckmark />
                            </TableCell>
                            <TableCell align="left">
                                <IoIosCheckmark />
                            </TableCell>
                            <TableCell align="left">
                                <IoIosCheckmark />
                            </TableCell>
                            <TableCell align="left">
                                <IoIosCheckmark />
                            </TableCell>
                            <TableCell align="left">
                                <Button variant="blue">
                                    <IoEye />
                                </Button>
                                
                            </TableCell>
                        </TableRow>
                    )
                }

            </CustomTable>
        </div>
    )
}

export default KYCList
