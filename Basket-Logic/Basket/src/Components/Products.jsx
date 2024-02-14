import React, { useEffect, useState } from "react";
import Product from "./Product";
import { AnimatePresence, motion } from "framer-motion";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.data));
  }, []);
  return (
    <div className="w-full flex flex-wrap gap-3 justify-center">
      <AnimatePresence mode="wait">
        {products.map((product, index) => (
            <Product product={product} delay={index*0.5} />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Products;
