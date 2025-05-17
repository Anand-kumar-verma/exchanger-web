import { Button } from "@mui/material";

export default function CustomButton({
  title = "",
  type = "button",
  variant = "contained",
  size = "small",
  onClick = () => null,
}) {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant={variant}
      size={size}
      className={`!bg-secondary !text-white !h-10 !w-full !rounded !font-medium !text-sm`}
    >
      {title}
    </Button>
  );
}
