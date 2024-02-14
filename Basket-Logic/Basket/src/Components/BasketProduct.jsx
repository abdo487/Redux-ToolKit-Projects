import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../Store/Basket/Basket.js";


function BasketProduct({ product }) {
    const dispatch = useDispatch(); 
    const incrementItem = () => {
        dispatch(increment({ id: product._id }));
    };
    const decrementItem = () => {
        dispatch(decrement({ id: product._id }));
    }
  return (
    <div key={product.id} className="w-full flex gap-2">
      <img
        src={`http://localhost:3000/assets/${product.image}`}
        className="min-w-[60px] max-w-[60px] h-[60px] object-cover rounded-md"
      />
      <div className="w-full flex flex-col gap-1">
        <div className="w-full flex gap-2 justify-between items-center">
          <h1 className="text-lg font-bold">{product.name}</h1>
          <h1 className="text-start">${product.price}</h1>
        </div>
        <div className="w-full flex gap-3 justify-center items-center">
          <button onClick={decrementItem} className="w-[30px] h-[30px] flex justify-center items-center border border-teal-800 rounded-full hover:bg-teal-800 hover:text-white transition-all transition-300">
            <i className="fas fa-minus"></i>
          </button>
          <h1 className="w-[calc(100%-120px)] h-[30px] flex justify-center items-center border border-teal-800 rounded-full hover:bg-teal-800 hover:text-white transition-all transition-300">{product.quantity}</h1>
          <button onClick={incrementItem} className="w-[30px] h-[30px] flex justify-center items-center border border-teal-800 rounded-full hover:bg-teal-800 hover:text-white transition-all transition-300">
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketProduct;
