import { Button } from "@mui/material";
import React from "react";

export default function CustomCart({
  row = {},
  index = 0,
  onClick = () => null,
}) {
  return (
    <div className="group" key={index}>
      <div className="!w-52 relative mb-5 cursor-pointer group-hover:h-fit  hover:shadow-gray-500 rounded shadow-md shadow-gray-400">
        <div className="!w-48 h-64 p-2 overflow-hidden bg-gray-50 flex flex-row items-center justify-center">
          <img src={row?.image} alt="images" className="object-contain w-full h-full" />
        </div>
        <div className="bottom-0 flex flex-col justify-between transition-all duration-300 transform h-28 group-hover:h-40 group-hover:translate-y-0">
          <div className="flex flex-col gap-0.5 px-2 pt-2">
            <p className="overflow-hidden text-slate-700 text-[15px] line-clamp-2 text-ellipsis">
              {row?.title}
            </p>
            <p className="text-sm text-gray-500">{row?.category}</p>
            <p className="font-mono text-xl font-medium text-green-500">
              Rs {row?.price}
            </p>
          </div>
          <div className="absolute bottom-0 hidden w-full px-2 pb-3 transition-all duration-300 transform translate-y-full bg-white group-hover:block group-hover:translate-y-0">
            <Button onClick={onClick} variant="outlined" className="w-full">
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
