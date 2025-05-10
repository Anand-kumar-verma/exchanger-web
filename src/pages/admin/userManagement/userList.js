import React from 'react'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
import CustomButton from "../../../components/customButton"
import { Button } from '../../../components/button'
import { IoEye } from 'react-icons/io5'
function UserList() {
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
      label: "Email Id"
    },
    {
      id: 4,
      label: "Date"
    },
    {
      id: 5,
      label: "Contact No."
    },
    {
      id: 6,
      label: "GA-Authentication"
    },
    {
      id: 7,
      label: "KYC-Status"
    },
    {
      id: 8,
      label: "Status"
    },
    {
      id: 9,
      label: "View"
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
              <TableCell align="left">237946786</TableCell>
              <TableCell align="left">
                <Button variant="destructive">
                  Disable
                </Button>
              </TableCell>
              <TableCell align="left">
                <Button variant="pending">
                  Pending
                </Button>
              </TableCell>
              <TableCell align="left">
                <Button variant="success">
                  Acitve
                </Button>
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

export default UserList
