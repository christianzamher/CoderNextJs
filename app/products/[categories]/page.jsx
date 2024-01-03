import React from "react";

import ProductCard from "@/components/products/ProductCard";

export const generateMetadata = async ({ params }) => {
  return {
    title: "Home Depotify - " + params.categories,
  };
};

export const revalidate = 3600;

export async function generateStaticParams() {
  return [
    { categoria: "todos" },
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

  const items = await fetch(
    `https://${process.env.VERCEL_URL}/api/products/${categories}`,
    { cache: "no-store" }
  ).then((r) => r.json());

  return (
    <>
      <div className="container m-auto pt-8">
        <h2 className="text-4xl text-bold">Products</h2>
        <hr className="py-1" />

        <section className="flex justify-center items-center gap-10 flex-wrap">
          {items.map((product) => (
            <ProductCard key={product.slug} item={product} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Products;
