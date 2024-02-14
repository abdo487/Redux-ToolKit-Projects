import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../Store/Basket/Basket.js";
import { motion } from "framer-motion";

function Product({ product, delay }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add({ product }));
  };
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="max-w-xs rounded overflow-hidden shadow-lg p-4 flex flex-col gap-4"
    >
      <img
        src={`http://localhost:3000/assets/${product.image}`}
        alt={product.name}
        className="w-full max-h-[150px] object-cover object-center rounded-md"
      />
      <div className="w-full flex gap-2 justify-between">
        <div className="flex flex-col gap-1 ">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <h1 className="text-start">${product.price}</h1>
        </div>
        <div className="flex flex-col justify-end items-center ml-5">
          {/* add to cart button */}
          <button
            onClick={addToCart}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Product;
