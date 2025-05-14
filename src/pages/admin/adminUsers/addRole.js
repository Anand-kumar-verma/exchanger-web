import { Button } from '../../../components/button'
import { CustomTable } from '../../../components/customTable'
import { TableCell, TableRow } from '@mui/material'
import CustomSelect from '../../../components/customSelect';
import ListIcon from '@mui/icons-material/List';
import { useState } from 'react';
import CustomInput from '../../../components/customInput';
import { FaUser } from 'react-icons/fa';
import { BiSolidMessageDots } from 'react-icons/bi';
import { Checkbox } from "@mui/material";


const sx = {
    '& .MuiInputBase-input': {
        paddingLeft: 1, // removes padding inside input
    },
    '& .MuiOutlinedInput-root': {
        padding: 0, // removes padding inside outlined input wrapper
    },
}

function AddRole() {
    const permissions = ["View", "Edit", "Delete"];

    const menuItems = [
        "Create New Ticket",
        "Unresolved Ticket List",
        "Pending Ticket List",
        "Inprocess Ticket List",
    ];


    return (
        <div>
            <div className='grid grid-cols-2 my-5'>
                <div className='flex flex-col gap-3  '>
                    <CustomInput
                        placeholder="Enter Role Name"
                        sx={sx}
                        startIcons={<FaUser className="text-blue100" size={20} />}
                        className=''

                    />
                    <CustomInput
                        placeholder="Descreption"
                        sx={sx}
                        startIcons={<BiSolidMessageDots className="text-blue100" size={20} />}
                        className=''
                        multiline
                        rows={2}
                    />
                    <div className='flex flex-row gap-3'>
                        <Button variant="submit" size="sm">Submit</Button>

                    </div>
                </div>
            </div>
            <div className="">
                <table className="w-full table-fixed border-collapse">
                    <thead>
                        <tr className="bg-gray20 p-2 text-gray-700 text-left text-sm">
                            <th className="w-1/4 ">Main Menu</th>
                            {permissions.map((perm) => (
                                <th key={perm} className="w-1/6 text-center">{perm}</th>
                            ))}
                            <th className="w-1/3">Sub Menu</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-800">
                        {menuItems.map((item, idx) => (
                            <tr key={idx} className=" bg-gray20">
                                <td className="">
                                    {idx === 0 && (
                                        <div className="flex items-center">
                                            <Checkbox size="small" />
                                            <span className="ml-2">Support Center</span>
                                        </div>
                                    )}
                                </td>
                                {permissions.map((perm) => (
                                    <td key={perm} className="text-center">
                                        <Checkbox size="small" />
                                    </td>
                                ))}
                                <td className="">{item}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default AddRole
