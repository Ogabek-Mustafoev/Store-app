"use client";

import { TProduct } from "@/types";
import Image from "next/image";
import { useState } from "react";

type Props = Partial<TProduct> & {
  fill?: boolean;
};

export default function CustomImg({ image, fill, title }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  return fill ? (
    <Image
      className={`object-contain transition duration-700 ease-in-out group-hover:opacity-75 ${
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      src={image!}
      alt={title!}
      onLoadingComplete={() => setIsLoading(false)}
      fill
    />
  ) : (
    <Image
      className={`object-contain transition duration-700 ease-in-out group-hover:opacity-75 ${
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      src={image!}
      alt={title!}
      onLoadingComplete={() => setIsLoading(false)}
      width={350}
      height={500}
    />
  );
}
