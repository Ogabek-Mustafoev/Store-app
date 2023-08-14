import Image from "next/image";

export default function Hero() {
  return (
    <section className="mb-32 mt-32 text-gray-600 lg:px-10" id="home">
      <div className="container mx-auto flex flex-col items-center px-5 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
            Explore Our Virtual Marketplace: Introducing FakeStoreAPI
          </h1>
          <p className="mb-8 leading-relaxed">
            Step into the future of digital commerce with FakeStoreAPI – your
            key to a simulated shopping adventure. Explore a diverse catalog of
            imaginary products, perfect for developers and enthusiasts alike.
            Experience innovation in every click as you navigate through our
            virtual marketplace.
          </p>
          <a href="#shop-deals" className="button solidBtn">
            Let's shop
          </a>
        </div>
        <div className="relative w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <Image
            className="object-cover object-center"
            alt="hero"
            width={1000}
            height={1000}
            src="/hero.png"
          />
        </div>
      </div>
    </section>
  );
}
