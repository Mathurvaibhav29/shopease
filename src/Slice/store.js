import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"; // Ensure this path and casing match the actual file

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
