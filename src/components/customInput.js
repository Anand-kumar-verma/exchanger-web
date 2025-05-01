import { FormHelperText, TextField } from "@mui/material";
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
        InputProps={InputProps}
        variant={variant}
        value={value}
        onFocus={onFocus}
        defaultValue={defaultValue}
        multiline={multiline}
        rows={rows}
        error={formik?.errors?.[id] && formik?.touched?.[id] ? true : false}
        onBlur={onBlur || formik?.handleBlur}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames(
          "!rounded !outline-none placeholder:!text-gray-100 !capitalize !backdrop-blur-mk !bg-white !bg-opacity-20 !border-opacity-30 !border !border-white",
          className
        )}
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