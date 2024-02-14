import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import BasketProduct from "./BasketProduct";

function Basket() {
  const basket = useSelector((state) => state.basket);
  return (
    <motion.div
      key={"basket"}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="absolute top-[50px] -right-[20px] w-80 max-h-screen min-h-[350px] bg-white shadow-lg p-4 flex flex-col gap-3 rounded-md"
    >
      <h1 className="text-2xl font-bold text-start">Basket</h1>
        <div className="flex flex-col gap-3">
            <AnimatePresence>
                {basket.map((product) => (
                    <BasketProduct product={product} />
                ))}
            </AnimatePresence>
        </div>
      <div className="flex flex-col gap-3 mt-auto">
        <h1 className="text-normal text-start">Total Items : {basket.length}</h1>
        {/* checkout button */}
        <button disabled={basket.length === 0} onClick={()=>{console.log('clicked')}} className="cursor-pointer bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2 px-4 rounded">
          Checkout
        </button>
      </div>
    </motion.div>
  );
}

export default Basket;
