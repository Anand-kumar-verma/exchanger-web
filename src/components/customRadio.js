import * as React from 'react';
import Radio from '@mui/material/Radio';

export default function CustomRadio({ value, selectedValue, handleChange }) {
  return (
    <Radio
      checked={selectedValue === value}
      onChange={handleChange}
      value={value}
      name="radio-buttons"
      size="small"
      className="!px-0 !mx-0"
    />
  );
}