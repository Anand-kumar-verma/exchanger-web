import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
} from "@mui/material";
import classNames from "classnames";

const Placeholder = ({ children }) => {
  return <div className="text-gray-700">{children}</div>;
};

const CustomSelect = ({
  value,
  id = "",
  onChange,
  children,
  className = "",
  formik,
  isLoading = false,
  disabled = false,
  placeholder = "",
  defaultValue = "",
  multiple = false,
  options,
  size = "large",
  label = "",
  color = "secondary",
  ...rest
}) => {
  // const [isFocused, setIsFocused] = useState(false);
  const selectedValue = formik?.values[id] || value || "";
  const handleChange = formik?.handleChange || onChange;

  return (
    <FormControl>
      <InputLabel className="!bg-white" size={size} color={color} id={id}>
        {label}
      </InputLabel>
      <Select
        labelId={id}
        displayEmpty
        color={color}
        // onFocus={() => setIsFocused(true)}
        value={selectedValue}
        onChange={handleChange}
        id={id}
        size={size}
        label={label}
        error={formik?.errors[id] && formik?.touched[id]}
        onBlur={(event) => {
          formik?.handleBlur(event);
          // setIsFocused(false);
        }}
        name={id}
        sx={{ minWidth: "240px" }}
        renderValue={
          selectedValue !== ""
            ? undefined
            : () => <Placeholder>{placeholder}</Placeholder>
        }
        className={classNames("", className)}
        {...rest}
      >
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <MenuItem key={index} disabled>
                <Skeleton style={{ width: "100%" }} />
              </MenuItem>
            ))
          : options
          ? options.map((select) => (
              <MenuItem key={select?.value} value={select?.value}>
                {select?.label}
              </MenuItem>
            ))
          : children}
      </Select>
      {formik?.errors && (
        <FormHelperText sx={{ color: "red" }}>
          {formik?.touched[id] && formik?.errors[id]}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomSelect;