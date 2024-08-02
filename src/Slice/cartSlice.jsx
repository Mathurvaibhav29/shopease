import { createSlice } from "@reduxjs/toolkit";


const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
        } else {
          state.splice(index, 1);
        }
      }
    },
    resetItem: () => {
      return [];
    }
  },
})

export const { addItem, removeItem, resetItem } = cartSlice.actions;
const cartReducer=cartSlice.reducer
export default cartReducer