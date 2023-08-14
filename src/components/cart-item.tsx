"use client";

import { TProduct } from "@/types";
import CustomImg from "./custom-img";
import ReactStars from "react-stars";

type Props = TProduct & {
  removeFromCart: (id: number, title: string) => void;
  incrDecrQuantity: (id: number, incrDecr: number, title: string) => void;
};

export default function CartItem({
  id,
  title,
  description,
  price,
  image,
  rating,
  quantity,
  removeFromCart,
  incrDecrQuantity,
}: Props) {
  return (
    <div className="mb-6 justify-between rounded-lg bg-white p-6 shadow sm:flex sm:justify-start">
      <div className="relative flex h-28 w-full sm:w-44">
        <CustomImg title={title} image={image} fill />
      </div>
      <div className="gap-2 sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="line-clamp-1 text-lg font-bold text-gray-900">
            {title}
          </h2>
          <p className="mt-1 line-clamp-3 text-xs text-gray-700">
            {description}
          </p>
          <div className="mt-1 flex items-center gap-2">
            <ReactStars value={rating.rate} edit={false} size={22} />
            <p className="text-sm">{rating.rate}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between sm:flex-col">
          <div className="flex items-center border-gray-100">
            <span
              onClick={() => incrDecrQuantity(id, -1, title)}
              className="cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              -
            </span>
            <span className="flex h-8 w-8 items-center justify-center border bg-white text-center text-xs">
              {quantity}
            </span>
            <span
              onClick={() => incrDecrQuantity(id, 1, title)}
              className="cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              +
            </span>
          </div>
          <div className="flex justify-end space-x-4">
            <p className="text-sm">
              {(price * quantity).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              onClick={() => removeFromCart(id, title)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
