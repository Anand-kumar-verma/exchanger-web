import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const authSlice = createSlice({
  name: 'auth',
  initialState: { users: [],userData:[],isAuth:false,isLeft:"right"},
  reducers: {
     register: (state, action) => {
      state.users.push(action.payload); 
      state.isLeft = "left";
    },
    login: (state,action) => {
      const { email, password } = action.payload;
      const user = state.users.find(user => user.email === email && user.password === password);
      if (user) {
        state.isAuth = true;
        state.userData = user;
      } else {
        state.isAuth = false;
        state.userData = null;
      }
    },
    logout: (state) => {
       state.isAuth = false;
      state.userData = null;
      toast.success("User Logout Successfully.")
    },
    loginUserData: (state, action) => {
      state.userData.push(action.payload); // Add new user to the array
    },
    leftRightTab: (state,action) => {
       state.isLeft = action.payload;
    },
   
  },
});

export const { register,login,logout,loginUserData,leftRightTab } = authSlice.actions;
export default authSlice.reducer;
