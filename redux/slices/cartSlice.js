// Slice is made up of three steps
/*
 * 1) Create a slice
 * 2) Create Initial State
 * 3) Create reducers
 * 4) Export the slice reducers
 * 5) Export the slice reducer
 */

const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Functions to be used to manipulate the state
    addToCart: (state, action) => {
      // Your logic for addToCart
    },
    removeFromCart: (state, action) => {
      // Your logic for removeFromCart
    },
    incrementQty: (state, action) => {
      // Your logic for incrementQty
    },
    decrementQty: (state, action) => {
      // Your logic for decrementQty
    },
  },
});
export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
