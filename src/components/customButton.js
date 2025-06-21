import { Button } from "@mui/material";

export default function CustomButton({
  title = "",
  type = "button",
  variant = "contained",
  size = "small",
  onClick = () => null,
  className = "",
}) {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant={variant}
      size={size}
      className={`!bg-secondary text-white !h-10  w-fit !rounded !font-medium !text-sm ${className}`}
    >
      {title}
    </Button>
  );
}
