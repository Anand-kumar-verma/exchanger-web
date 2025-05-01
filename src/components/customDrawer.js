import React from 'react';
import { Drawer, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames';
import { IoClose } from "react-icons/io5";

const CustomDrawer = ({ open, onClose, anchor = 'right', width = 300, title = "", children, className = "", boxClassName = "",size=15 }) => {
    return (
        <Drawer
            ModalProps={{
                BackdropProps: {
                    style: { backgroundColor: 'transparent' } // Make backdrop transparent
                }
            }}
            className={classNames('!pt-10', className)} anchor={anchor} open={open} onClose={onClose}>
            <Box
                sx={{
                    width: width,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    p: 2,

                }}
                className={classNames('', boxClassName)}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <IconButton onClick={onClose}>
                        <IoClose className='text-secondary' size={size} />
                    </IconButton>
                </Box>

                <Box  sx={{ flexGrow: 1, overflowY: 'auto' }}>
                    {children}
                </Box>
            </Box>
        </Drawer>
    );
};

export default CustomDrawer;
