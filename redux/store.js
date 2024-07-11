// store is composed of the entire application's state
// store => multiple slices

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

// 1. Create a store & give it slices
export const store = configureStore({
  // slices goes here
  reducer: { cart: cartSlice },
});

// Connect the store to the entire app through the redux provider
