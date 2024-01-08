
import React from "react";

import ProductCard from "@/components/products/ProductCard";
import { Suspense } from "react";
import ProductList from "@/components/products/ProductList";

export const generateMetadata = async ({ params }) => {
  return {
    title: "Home Depotify - " + params.categories,
  };
};

export const revalidate = 3600;

export async function generateStaticParams() {
  return [ 
    { categoria: "all" },
    { categoria: "tvs" },
    { categoria: "heladeras" },
    { categoria: "aires" },
    { categoria: "All Beds" },
    { categoria: "Lounge Chairs" },
    { categoria: "Coffee Tables" },
    { categoria: "Floor Lamps" },
    { categoria: "Cups & Mugs" },
    { categoria: "Barware" },
  ];
}

const Products = async ({ params }) => {
  const { categories } = params;

  return (
    <>
      <div className="container m-auto pt-8">
        <h2 className="text-4xl text-bold">Products</h2>
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
