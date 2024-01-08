"use client"
import Image from "next/image";
import { useState , useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import QtySelector from "./QuantitySelector";
import React from "react";
import {  getDoc , doc } from "firebase/firestore"
import { db } from "@/firebase/config";
import path from 'path';




const ProductDetail = ({ slug }) => {
  const pathname = usePathname();
  const currentFolder = path.basename(pathname);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    inStock: null,
    price: null,
    slug: "",
    type:""
  });

  const getProductDetails = async () => {
    try {
      const productRef = doc(db, 'products', currentFolder);
      const docSnapshot = await getDoc(productRef);
      const productData = docSnapshot.data();
      if (productData) {
        setProduct({
          title: productData.title,
          description: productData.description,
          image: productData.image,
          inStock: productData.inStock,
          price: productData.price,
          slug: productData.slug,
          type: productData.type
        });
      }
    } catch (error) {
      console.error('Error al obtener los detalles del producto:', error);
      toast.error('Error al obtener los detalles del producto');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getProductDetails();
    };
    fetchData();
  }, [currentFolder]);

  return (
    <>
      <div className="bg-gray-400 dark:bg-gray-800 py-8 rounded-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <Image
                  src={`/imgs/products/${product.image}`}
                  alt={product.title}
                  width={500}
                  height={300}
                  layout="responsive"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <Link
                    className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                    href={`${product.type}`}
                  >
                    More {product.type}
                  </Link>
                </div>
                <div className="w-1/2 px-2">
                  <Link
                    href={"/products/all"}
                    className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    Catalogue
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.title}
              </h2>

              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:{" "}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    $ {product.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Stock:
                  </span>
                  <span className="text-gray-800 dark:text-gray-300 bg-yellow-700 rounded">
                    {" "}
                    {product.inStock}
                  </span>
                </div>
              </div>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {product.description}
                </p>
              </div>
               <QtySelector item={product} /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;


//http://${process.env.NEXT_PUBLIC_URL}
  //http://localhost:3000

  // const product = await fetch(
  //   `http://${process.env.NEXT_PUBLIC_URL}/api/productos/${slug}`,
  //   {
  //     cache: "no-store",
  //   }
  // ).then((res) => res.json()); 