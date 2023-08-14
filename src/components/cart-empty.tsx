import Link from "next/link";

export default function CartEmpty() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mt-10 text-center">
        <div className="inline-flex rounded-full bg-yellow-100 p-4">
          <div className="rounded-full bg-yellow-200 stroke-yellow-600 p-4">
            <svg
              className="h-16 w-16"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0002 9.33337V14M14.0002 18.6667H14.0118M25.6668 14C25.6668 20.4434 20.4435 25.6667 14.0002 25.6667C7.55684 25.6667 2.3335 20.4434 2.3335 14C2.3335 7.55672 7.55684 2.33337 14.0002 2.33337C20.4435 2.33337 25.6668 7.55672 25.6668 14Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </div>
        <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">
          Shopping cart is empty
        </h1>
        <p className="mb-7 mt-5 text-slate-600 lg:text-lg">
          The page you are looking for doesn't exist or <br />
          has been removed.
        </p>
        <Link href="/products" className="button outlineBtn">
          Go To Products ↗️
        </Link>
      </div>
    </div>
  );
}
