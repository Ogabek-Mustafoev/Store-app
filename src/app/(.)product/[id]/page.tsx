"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { TProduct } from "@/types";
import { Dialog } from "@headlessui/react";
import { CustomImg } from "@/components";
import ReactStars from "react-stars";
import { toast } from "react-hot-toast";

export default function ProductDetailPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [product, setProduct] = useState<TProduct>();
  const [cartHasProduct, setCartHasProduct] = useState<boolean>(false);

  const router = useRouter();
  const { id } = useParams();

  function onCloseHandler() {
    setIsOpen(false);
    router.back();
  }

  function addToCart() {
    const addedProducts: TProduct[] =
      JSON.parse(localStorage.getItem("carts") as string) || [];

    if (addedProducts.find((item) => item.id === product?.id)) {
      setCartHasProduct(true);
      const updatedData = addedProducts.map((item) =>
        item.id === product?.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      localStorage.setItem("carts", JSON.stringify(updatedData));
      toast.success(`Item quantity increased!`);
    } else {
      setCartHasProduct(false);
      const carts = [...addedProducts, { ...product, quantity: 1 }];
      localStorage.setItem("carts", JSON.stringify(carts));
      toast.success(`${product?.title.slice(0, 10)}... is added to cart!`);
    }
  }

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await res.json();
      setProduct(product);
      setLoading(false);
    }
    getData();
  }, [id]);

  return (
    <Dialog open={isOpen} onClose={onCloseHandler} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-3xl rounded-lg bg-white p-10">
            {loading ? (
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-dotted border-blue-600" />
            ) : (
              <div className="flex h-96 gap-x-4">
                {product?.image && (
                  <div className="relative hidden h-full w-72 md:inline">
                    <CustomImg
                      image={product.image}
                      title={product.title}
                      fill
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col">
                  <div className="flex-1">
                    <h3 className="line-clamp-2 text-xl font-semibold">
                      {product?.title}
                    </h3>
                    <div className="my-4 flex items-center text-sm">
                      <b className="mr-6 text-sm font-bold">
                        ${product?.price}
                      </b>
                      {product?.rating.rate && (
                        <div className="mr-1 flex items-center">
                          <ReactStars
                            value={product.rating.rate}
                            edit={false}
                            size={25}
                          />
                        </div>
                      )}
                      <p>{product?.rating.rate}</p>
                    </div>
                    <div className="flex cursor-pointer items-center gap-2 text-sm text-blue-600 hover:underline">
                      <i className="text-xl drop-shadow">💬</i>
                      <p>{product?.rating.count} feedbacks</p>
                    </div>
                    <p className="mt-4 line-clamp-5 text-sm">
                      {product?.description}
                    </p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <button
                      onClick={addToCart}
                      className="button solidBtn w-full"
                    >
                      {cartHasProduct ? "Add One More" : "Add To Cart"}
                    </button>
                    <button
                      onClick={() => window.location.reload()}
                      className="button outlineBtn w-full"
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
