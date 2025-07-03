import { Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
export default function CustomButton({
  title = "",
  type = "button",
  variant = "contained",
  size = "small",
  onClick = () => null,
  className = "",
  disabled = false,
  startIcon= null,
}) {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant={variant}
      disabled={disabled}
      size={size}
      startIcon={startIcon}
      className={` ${disabled ? " !bg-[#b1d88f]" : "!bg-secondary"} text-white !h-10  w-fit !rounded !font-medium !text-sm ${className}`}
    >
      {disabled ? <CircularProgress size={20} className="!text-white" /> : title}
    </Button>
  );
}
