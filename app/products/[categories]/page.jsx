import React from "react";


import ProductCard from "@/components/products/ProductCard";

export const generateMetadata = async ({params}) => {
  return {
      title: 'My App - ' + params.categories
  }
}

export const revalidate = 3600

export async function generateStaticParams() {
  return [
      { categoria: 'todos' },
      { categoria: 'tvs' },
      { categoria: 'heladeras' },
      { categoria: 'aires' },
  ]
}




const Products = async ({params}) => {
const {categories} = params

const items = await fetch (`http://localhost:3000/api/products/${categories}` ,
 {cache:'no-store'}
 ).then(r => r.json())
  
 


  return (
    <>
      <div className="container m-auto pt-8">
        <h2 className="text-4xl text-bold">Products</h2>
        <hr />

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
