import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartList: [] },
  reducers: {
    addToCart: (state, action) => {
        state.cartList.push({ ...action.payload, productCount: 1 });
    },
    removeFromCart: (state, action) => {
      state.cartList = state.cartList.filter(item => item.id !== action.payload);
      toast.success("Product remove from cart.")
    },
    increaseQuantity: (state, action) => {
      const product = state.cartList.find(item => item.id === action.payload);
      if (product) {
        product.productCount += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.cartList.find(item => item.id === action.payload);
      if (product && product.productCount > 1) {
        product.productCount -= 1;
      }
    },
  },
});

export const { addToCart,removeFromCart,increaseQuantity,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
