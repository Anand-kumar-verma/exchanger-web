import React from 'react'
import { CustomTable } from '../../../components/customTable'
import { Button, TableCell, TableRow } from '@mui/material'

function PendingUserList() {
  const headers = [
    {
      id: 0,
      label: "S. No."
    },
    {
      id: 2,
      label: "USERNAME"
    },
    {
      id: 3,
      label: "Date"
    },
    {
      id: 4,
      label: "Mobile No."
    },
    {
      id: 5,
      label: "Email id"
    },
    {
      id: 6,
      label: "Action"
    }
  ]
  return (
    <div>
      <CustomTable isFilter headers={headers}>
     
          {
          [1, 2, 3, 4, 5, 6]?.map((row, index) =>
            <TableRow  className='!bg-[#EBE9FD] !border-l-2 !mb-2 !relative  !border-gray-300'>
              <TableCell>Frozen yoghurt</TableCell>
              <TableCell align="left">159</TableCell>
              <TableCell align="left">159</TableCell>
              <TableCell align="left">159</TableCell>
              <TableCell align="left">159</TableCell>
              <TableCell align="left">
                <Button variant="outlined" size="small">Edit</Button>
              </TableCell>
            </TableRow>
          )
        }

      </CustomTable>
    </div>
  )
}

export default PendingUserList
