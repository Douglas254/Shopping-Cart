"use client";

import { useSelector } from "react-redux";

const CartCount = () => {
  const cartItems = useSelector((store) => store.cart);

  return <span>{cartItems.length}</span>;
};

export default CartCount;
