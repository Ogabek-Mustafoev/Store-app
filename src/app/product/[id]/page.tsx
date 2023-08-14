import { CustomImg, GoBack } from "@/components";
import { TProduct } from "@/types";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default async function ProductDetailPage({ params: { id } }: Props) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: TProduct = await res.json();

    return (
      <>
        <GoBack />
        <div className="mx-auto mt-20 flex max-w-5xl flex-col items-center gap-8 px-4 pb-5 md:flex-row">
          <div className="relative w-1/2 min-w-[270px]">
            <CustomImg image={product.image} title={product.title} />
          </div>
          <div className="divide-2">
            <div className="scroll-py-2 pb-8">
              <h1 className="text-2xl font-bold md:text-4xl">
                {product.title}
              </h1>
              <h2 className="mt-2 text-xl font-bold text-gray-500 md:text-3xl">
                ${product.price}
              </h2>
            </div>
            <p className="text-xs md:text-sm">{product.description}</p>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
    notFound();
  }
}
