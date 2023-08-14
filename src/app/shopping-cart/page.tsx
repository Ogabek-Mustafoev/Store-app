"use client";

import { CartEmpty, CartList } from "@/components";
import { TProduct } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function ShoppingCart() {
  const [total, setTotal] = useState<number>(0);
  const [products, setProducts] = useState<TProduct[]>([]);

  function removeFromCart(id: number, title: string) {
    const newProducts = products.filter((product) => product.id !== id);
    localStorage.setItem("carts", JSON.stringify(newProducts));
    setProducts(newProducts);
    toast.error(`${title.slice(0, 10)}... is removed from cart!`);
  }

  function incrDecrQuantity(id: number, incrDecr: number, title: string) {
    const targetProduct = products.find((product) => product.id === id);

    if (targetProduct?.quantity === 0) {
      removeFromCart(targetProduct.id, title);
    } else {
      const updatedProduct = products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + incrDecr }
          : product,
      );
      localStorage.setItem("carts", JSON.stringify(updatedProduct));
      setProducts(updatedProduct);
    }
    if (incrDecr === 1) {
      toast("Item quantity increased", { icon: "👏" });
    } else if (incrDecr === -1 && targetProduct?.quantity! > 1) {
      toast("Item quantity decreased", { icon: "🤔" });
    }
  }

  function clearCart() {
    const check = confirm("You ara clearing cart!");
    if (check) {
      localStorage.removeItem("carts");
      setProducts([]);
    }
  }

  useEffect(() => {
    const cartProducts = localStorage.getItem("carts");
    if (cartProducts) {
      setProducts(JSON.parse(cartProducts));
    }
  }, []);

  useEffect(() => {
    const total = products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    setTotal(total);
  }, [products]);

  return products.length ? (
    <CartList
      clearCart={clearCart}
      products={products}
      removeFromCart={removeFromCart}
      incrDecrQuantity={incrDecrQuantity}
      total={total}
    />
  ) : (
    <CartEmpty />
  );
}
