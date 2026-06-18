import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaCaretRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartTab } from "../features/cart";

const CartTab = () => {
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(299);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartTabStatus = useSelector((store) => store.cart.cartTabStatus);

  const handleCartClose = () => {
    dispatch(toggleCartTab());
  };
  // Removed navigate('/checkout'); since this would cause navigation on render

  return quantity > 0 ? (
    <div
      className="flex bg-green-700 p-2 justify-between items-center text-white rounded-lg fixed bottom-4  w-[90vw] shadow-lg md:w-100 left-1/2 -translate-x-1/2 transition-transform duration-300 md:hover:translate-y-2.5 hover:shadow-xl cursor-pointer"
      onClick={handleCartClose}
    >
      <div className="flex items-center gap-3">
        <div className="backdrop-blur-lg bg-white/15 p-2 rounded-lg">
          <BsCart3 size={20} />
        </div>
        <div>
          <p className="text-sm text-green-100">
            {quantity} <span className="text-green-100">items</span>
          </p>
          <h1 className="text-lg font-bold text-green-100">{`₹${totalPrice}`}</h1>
        </div>
      </div>
      <div className="backdrop-blur-lg bg-white/15 p-2 rounded-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer flex items-center gap-0.5 ">
        <button className=" text-[16px] ">View Cart </button>
        <FaCaretRight className="top-30 " size={22} />
      </div>
    </div>
  ) : null;
};

export default CartTab;
