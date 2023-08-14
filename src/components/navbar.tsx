import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-1 py-1 sm:px-4">
        <Link href="/">
          <Image
            width={130}
            height={50}
            alt="logo"
            src="/logo.png"
            className="w-28 rounded object-cover opacity-90 transition duration-200 hover:scale-95 md:w-32"
          />
        </Link>
        <Link
          href="/products"
          className="ml-auto mr-2 hover:text-gray-900 sm:mr-5"
        >
          Products
        </Link>
        <Link href="/shopping-cart">
          <button className="button outlineBtn flex items-center">
            My Cart <i className="text-xl"> 🛒</i>
          </button>
        </Link>
      </div>
    </header>
  );
}
