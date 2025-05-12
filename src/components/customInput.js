import { FormHelperText, InputAdornment, TextField } from "@mui/material";
import classNames from "classnames";
import React from "react";

const CustomInput = ({
  type = "",
  value,
  onChange,
  placeholder = "",
  label,
  className = "",
  name = "",
  id = "",
  disabled,
  hidden,
  formik,
  multiline = false,
  variant = "outlined",
  rows = 1,
  defaultValue = "",
  InputProps,
  onFocus,
  onBlur,
  color = "primary",
  endIcons = null,
  startIcons = null,
  sx={},
}) => {
  return (
    <div className="flex flex-col justify-center">
      {label && <p className="m-1 whitespace-nowrap font-semibold">{label}</p>}
      <TextField
        color={color}
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        hidden={hidden}
        size="small"
        variant={variant}
        value={value}
        onFocus={onFocus}
        defaultValue={defaultValue}
        multiline={multiline}
        sx={sx}
    
        rows={rows}
        error={formik?.errors?.[id] && formik?.touched?.[id] ? true : false}
        onBlur={onBlur || formik?.handleBlur}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames(
          "!rounded !outline-none placeholder:!text-gray-100 overflow-hidden   !capitalize !backdrop-blur-mk h-full w-full !bg-white !bg-opacity-20 !border-opacity-30 !border !border-white",
          className
        )}
        slotProps={{
          input: {
            endAdornment: endIcons,
            startAdornment: startIcons && (
              <div
                className=" border-r border-gray-300 bg-gray-100 !mx-0 w-12  flex items-center justify-center !h-full"
              >
                {startIcons}
              </div>
            )
          }
        }}
      />
      {formik && (
        <FormHelperText className="!text-red-500 !mx-1">
          {formik?.touched?.[id] && formik?.errors?.[id]}
        </FormHelperText>
      )}
    </div>
  );
};

export default CustomInput;