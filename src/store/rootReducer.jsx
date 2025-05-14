import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import authReducer from "./slice/authSlice";
import cartSlice from "./slice/cartSlice"
import adminSidebarSlice from "./slice/adminSidebarSlice"

const persistConfig = {
  key: "root",
  storage, // Saves data to localStorage
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartSlice,
  adminSidebarList:adminSidebarSlice
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
