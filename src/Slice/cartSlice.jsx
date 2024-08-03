import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage
const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
const initialState = savedCart;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state)); // Update localStorage
    },
    removeItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
        } else {
          state.splice(index, 1);
        }
        localStorage.setItem("cartItems", JSON.stringify(state)); // Update localStorage
      }
    },
    resetItem: (state) => {
      localStorage.removeItem("cartItems"); // Clear localStorage
      return [];
    },
  },
});

export const { addItem, removeItem, resetItem } = cartSlice.actions;
export default cartSlice.reducer;
