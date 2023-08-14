import { TProduct } from "@/types";
import { CartItem } from "./";

type Props = {
  clearCart: () => void;
  products: TProduct[];
  removeFromCart: (id: number, title: string) => void;
  incrDecrQuantity: (id: number, incrDecr: number, title: string) => void;
  total: number;
};

export default function CartList({
  clearCart,
  products,
  removeFromCart,
  incrDecrQuantity,
  total,
}: Props) {
  return (
    <div className="mb-5">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {products.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              incrDecrQuantity={incrDecrQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">
              {total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">
              {(total * 0.05).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                {(total + total * 0.05).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button
            onClick={clearCart}
            className="button mt-6 w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
