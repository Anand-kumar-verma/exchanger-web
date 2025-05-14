import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IoSearch } from "react-icons/io5";
import { PiUserCircleFill } from "react-icons/pi";
import CustomSideBar from "./customSideBar";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Header() {
  const navigate = useNavigate();
  const cartList = useSelector((state) => state.cart.cartList);
  const user = useSelector((state) => state.auth.userData);
  const filteredProducts = cartList.filter(
    (item) => item.user.email === user?.email
  );
  return (
    <div className="fixed z-50 bg-white !w-full">
      <div className=" border-b-[2.5px] border-gray-400 !m-0 flex items-center p-3 px-5 sm:px-3  justify-between md:justify-around">
        <div
          className="text-xl font-medium leading-6 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <span className="text-green-400">SHOP</span>LANE
        </div>
        <div className="hidden md:block">
          <div className="flex flex-row items-center gap-5 md:gap-16 ">
            <span
              className="font-medium cursor-pointer text-slate-500"
              onClick={() => navigate("/home")}
            >
              HOME
            </span>
            <span className="font-medium text-slate-500">CLOTHINGS</span>
            <span className="font-medium text-slate-500">ACCESSORIES</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-0 sm:gap-5">
          <div className="flex flex-row items-center gap-3 md:gap-8 ">
            <IoSearch size={20} className="text-slate-800" />
            <IconButton aria-label="cart" onClick={() => navigate("/cart")}>
              <StyledBadge
                badgeContent={filteredProducts.length || "0"}
                color="info"
              >
                <ShoppingCartIcon className="text-slate-800" />
              </StyledBadge>
            </IconButton>
            <PiUserCircleFill
              onClick={() => navigate("/user")}
              size={22}
              className="hidden cursor-pointer text-slate-800 sm:block"
            />
          </div>
          <CustomSideBar />
        </div>
      </div>
    </div>
  );
}
