// components/CustomTable.js
import * as React from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Button,
} from '@mui/material';
import { FaFilter } from "react-icons/fa";
export function CustomTable({ headers, children, isFilter = false }) {
  return (
    <TableContainer component={Paper}>
      {isFilter && <Button variant='contained' size='small' startIcon={<FaFilter size={15} />} className='!capitalize !bg-blue-800 !m-2'>Filter</Button>}
      <Table size="small">
        <TableHead>
          <TableRow className='!bg-[#EBE9FD] !border-l-2 !border-gray-300'>
            {headers.map((header, idx) => (
              <TableCell key={idx} align={header.align || 'left'} className='!font-semibold '>
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className='!relative'>
          {children}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
