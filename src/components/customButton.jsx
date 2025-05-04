import { Button } from '@mui/material'
import React from 'react'

function CustomButton({
  title = "name",
  variant = "contained",
  className,
  startIcon,
  size='small',
  onClick = () => { },
}) {
  return (
    <Button onClick={onClick} startIcon={startIcon && startIcon} variant={variant} size={size} className={` ${className}  !bg-secondary !px-5 !font-medium  !capitalize`}>
      {title}
    </Button>
  )
}

export default CustomButton
