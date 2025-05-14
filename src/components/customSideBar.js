import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { LuMenu } from "react-icons/lu";
import { useNavigate } from "react-router";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { logout } from "../store/slice/authSlice";

export default function CustomSideBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logoutFun = () => {
    dispatch(logout());
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="!mt-9 md:hidden"
    >
      <List className="block sm:hidden">
        {["User Details"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate("/user")}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className="block md:hidden">
        {["HOME", "CLOTHINGS", "ACCESSORIES"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => (text === "HOME" ? navigate("/home") : null)}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <div className="m-5">
        <button
          onClick={logoutFun}
          className="flex flex-row items-center gap-3 mt-10 text-lg text-red-500"
        >
          <BiLogOutCircle size={22} /> Logout
        </button>
      </div>
    </Box>
  );

  return (
    <div className="block md:hidden">
      <Button className="!mx-0 !px-0" onClick={toggleDrawer("right", true)}>
        <LuMenu color="black" />
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
