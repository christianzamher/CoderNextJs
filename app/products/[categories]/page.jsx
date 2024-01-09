import React from "react";

import { Suspense } from "react";
import ProductList from "@/components/products/ProductList";

export const generateMetadata = async ({ params }) => {
  return {
    title: "Home Depotify - " + params.categories,
  };
};

export const revalidate = 3600;

const Products = async ({ params }) => {
  const { categories } = params;

  return (
    <>
      <div className="container m-auto pt-8 ">
        <h2 className=" text-bold block  text-xl font-bold text-gray-200 sm:text-3xl">
          Products
        </h2>
        <hr className="py-1" />

        <section className="flex justify-center items-center gap-10 flex-wrap">
          <Suspense fallback={<div>Loading Products...</div>}>
            <ProductList categories={categories} />
          </Suspense>
        </section>
      </div>
    </>
  );
};

export default Products;

// const items = await fetch(
//   `http://${process.env.NEXT_PUBLIC_URL}/api/products/${categories}`,
//   { cache: "no-store" }
// ).then((r) => r.json());

// key={product.slug} item={product}
