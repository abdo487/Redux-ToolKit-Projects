import { useState } from "react";
import "./App.css";
import Store from "./Store/Store.js";
import { Provider } from "react-redux";
import Products from "./Components/Products.jsx";
import { AnimatePresence, motion } from "framer-motion";
import Basket from "./Components/Basket.jsx";

function App() {
  const [basketOpened, setBasketOpened] = useState(true);
  const openBasket = () => {
    setBasketOpened(true);
  };
  const closeBasket = () => {
    setBasketOpened(false);
  };
  return (
    <Provider store={Store}>
      <div className="w-full flex flex-col gap-3">
        <header className="relative w-full flex gap-2 justify-between items-center text-teal-800">
          <h1 className="text-2xl font-bold">Shopping Basket</h1>
          <AnimatePresence mode="wait">
            {!basketOpened ? (
              <motion.i
                key={"openbasket"}
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0, rotate: -45 }}
                onClick={openBasket}
                className="fas fa-cart-shopping cursor-pointer"
              ></motion.i>
            ) : (
              <motion.i
                key={"closebasket"}
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0, rotate: -45 }}
                onClick={closeBasket}
                className="fas fa-close cursor-pointer"
              ></motion.i>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {basketOpened && (
              <Basket key={"basket"} closeBasket={closeBasket} />
            )}
          </AnimatePresence>
        </header>
        <Products />
      </div>
    </Provider>
  );
}

export default App;
