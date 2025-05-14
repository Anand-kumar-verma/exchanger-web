import { Button } from "@mui/material";
import React from "react";

export default function CustomButton({ title = "", type = "button" }) {
  return (
    <Button
      type={type}
      className={`!bg-green-400 !text-white !h-10 !w-full !rounded-full !font-medium !text-sm`}
    >
      {title}
    </Button>
  );
}
