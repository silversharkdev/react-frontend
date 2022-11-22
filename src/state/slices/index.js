import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseItemCount: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? item.count++ : item,
      );
    },
    decreaseItemCount: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? item.count-- : item,
      );
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseItemCount,
  decreaseItemCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;