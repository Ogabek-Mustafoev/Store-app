import { TProduct } from "@/types";
import Link from "next/link";
import { CustomImg } from "./";

export default function Product({
  id,
  title,
  price,
  description,
  category,
  image,
}: TProduct) {
  return (
    <Link
      href={`/product/${id}`}
      className="group flex h-96 flex-col rounded-lg border p-6 shadow-md transition-transform duration-300 ease-out hover:scale-105"
    >
      <div className="relative mb-4 max-h-80 flex-1">
        <CustomImg image={image} title={title} fill />
      </div>
      <h3 className="text-xs font-medium tracking-widest text-indigo-500">
        {category}
      </h3>
      <div className="my-2 flex items-center justify-between font-semibold">
        <p className="w-44 truncate">{title}</p>
        <p className="text-gray-500">${price}</p>
      </div>
      <p className="line-clamp-2 text-base leading-relaxed">{description}</p>
    </Link>
  );
}
