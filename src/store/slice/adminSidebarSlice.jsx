import { createSlice } from "@reduxjs/toolkit";
import { sidebarList } from "../../utils/MockData";

const adminSidebarSlice = createSlice({
  name: "side",
  initialState: { adminSidebar: sidebarList },
  reducers: {
    currentSidebar: (state, action) => {
      const selectedRoute = action.payload;
      state.adminSidebar = state.adminSidebar.map(item => {
        let updatedItem = { ...item };

        if (item.children && item.children.length > 0) {
          const updatedChildren = item.children.map(child => {
            const isChildActive = child.route === selectedRoute;
            return { ...child, isActive: isChildActive };
          });

          const hasActiveChild = updatedChildren.some(child => child.isActive);
          updatedItem = {
            ...updatedItem,
            isActive: hasActiveChild,
            children: updatedChildren,
          };
        }
        if (updatedItem.route === selectedRoute) {
          updatedItem.isActive = true;
        } else if (!updatedItem.children) {
          updatedItem.isActive = false;
        }

        return updatedItem;
      });
    }


  },
});

export const { currentSidebar } = adminSidebarSlice.actions;
export default adminSidebarSlice.reducer;
