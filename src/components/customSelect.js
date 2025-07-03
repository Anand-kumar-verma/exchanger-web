import {
  FormControl,
  FormHelperText,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Skeleton,
} from "@mui/material";
import classNames from "classnames";

const Placeholder = ({ children }) => {
  return <div className="text-gray-400">{children}</div>;
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
  size = "small",
  label = "",
  color = "secondary",
  rightIcons = null,
  ...rest
}) => {
  const selectedValue = formik?.values[id] || value || "";
  const handleChange = formik?.handleChange || onChange;
  return (
    <FormControl className="!w-full">
      {label && <div
        className="text-gray-400 text-sm font-semibold mb-1"
      >
        {label}
      </div>}
      <Select
        displayEmpty
        color={color}
        value={selectedValue}
        onChange={handleChange}
        id={id}
        input={
          rightIcons && <OutlinedInput
            startAdornment={
              <InputAdornment position="start" className="!bg-gray-100 border-r border-gray-300  !px-2 !py-5">
                {rightIcons}
              </InputAdornment>
            }
          />
        }
        size={size}
        error={formik?.errors[id] && formik?.touched[id]}
        onBlur={(event) => {
          formik?.handleBlur(event);
        }}
        name={id}
        renderValue={
          selectedValue !== ""
            ? undefined
            : () => <Placeholder>{placeholder}</Placeholder>
        }
        className={classNames("!m-0 !overflow-hidden !px-0 placeholder:!text-gray-400 !py-0", className)}
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
        <FormHelperText className="!px-0 !mx-1" sx={{ color: "red" }}>
          {formik?.touched[id] && formik?.errors[id]}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomSelect;