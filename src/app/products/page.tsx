"use client";

import { FilterProduct, Product } from "@/components";
import { TProduct } from "@/types";
import { useEffect, useState } from "react";

export default function Products() {
  const [type, setType] = useState<string>("all");
  const [products, setproducts] = useState<TProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((res) => setproducts(res));
  }, []);

  useEffect(() => {
    if (type === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((item) => item.category === type));
    }
  }, [products, type]);

  return (
    <>
      <FilterProduct setType={setType} type={type} />
      <div className="mb-5 mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {filteredProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
