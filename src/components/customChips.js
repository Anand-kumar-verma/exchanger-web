import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// Import a sample icon from react-icons
import { FaUser } from 'react-icons/fa';
import classNames from 'classnames';

export default function CustomChips({
  label = "Chip",
  variant = "outlined",
  icon = <FaUser />,
  className = ""
}) {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label={label}
        icon={icon}
        className={classNames('!rounded !bg-slate-100', className)}
        variant={variant}
      />
    </Stack>
  );
}
