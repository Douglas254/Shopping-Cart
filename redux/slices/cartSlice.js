// Slice is made up of three steps
/*
 * 1) Create a slice
 * 2) Create Initial State
 * 3) Create reducers
 * 4) Export the slice reducers
 * 5) Export the slice reducer
 */

const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Functions to be used to manipulate the state
    addToCart: (state, action) => {
      // Your logic for addToCart
      const { id, image, title, price } = action.payload;

      //   check if the item already exist in cart
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.push({ id, image, title, price, qty: 1 });
      }

      console.log(action.payload);
    },
    removeFromCart: (state, action) => {
      // Your logic for removeFromCart
      const cartId = action.payload;
      return state.filter((item) => item.id !== cartId);
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
