import Image from "next/image";
import Link from "next/link";
import { mockData } from "@/data/product";
import QtySelector from "./QuantitySelector";
import React from "react";





const ProductDetail = async ({ slug }) => {
  //const item = mockData.find( (prod)=> prod.slug ===  slug )

  const item = await fetch(`http://localhost:3000/api/productos/${slug}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <>
      <section className="flex gap-6 my-5  bg-bg-color-5 rounded-md">
        <div className=" p-5 items-center align-middle">
          <Image
            src={`/imgs/products/${item.image}`}
            alt={item.title}
            width={560}
            height={560}
            className="rounded-lg py-14"
          />
        </div>
        <div className="basis-1/2 m-auto text-center p-5">
          <h2 className="text-2xl font-semibold  pb-4 mb-4  text-gray-50">
            {item.title}
          </h2>
          <p className="text-2xl text-gray-50">Price: $ {item.price}</p>

          <h3 className="text-2xl font-semibold   pb-4 my-7 text-gray-50 text-left">
            Description
          </h3>
          <p className="font-semibold text-gray-50 text-left">
            {item.description}
          </p>

          <div className="my-5 text-center">
            <div className="my-8">
              <QtySelector item={item} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
