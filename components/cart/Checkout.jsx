import React from "react";
import Link from "next/link";

const Checkout = () => {
  return (
    <>
      <div
        className=" flex justify-start w-screen max-w-sm  border-gray-600 px-4 py-8 sm:px-6 lg:px-8"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
      >
        <div className="space-y-4 text-center">
          <Link
            href="#"
            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Checkout
          </Link>

          <Link
            href="/products/all"
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default Checkout;
