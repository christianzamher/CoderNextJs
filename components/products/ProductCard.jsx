"use client";
import Image from "next/image";
import Link from "next/link";
import { React } from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-3xl w-96 transition transform hover:-translate-y-0.5">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
        <Image
          alt={item.title}
          src={`/imgs/products/${item.image}`}
          width={300}
          height={300}
          className=" w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex-col items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-center">
            {item.title}
          </p>
          <hr className="py-3" />
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-center">
            ${item.price}
          </p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <Link href={`/products/detail/${item.slug}`} prefetch={true}>
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:text-yellow-500 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            type="button"
          >
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
