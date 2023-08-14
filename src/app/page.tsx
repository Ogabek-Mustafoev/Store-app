import { Hero, Product } from "@/components";
import { TProduct } from "@/types";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: TProduct[] = await res.json();

  return (
    <>
      <Hero />
      <section className="mb-5 flex flex-col space-y-12" id="shop-deals">
        <h1 className="text-center text-5xl font-bold">SHOP DEALS</h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
    </>
  );
}
