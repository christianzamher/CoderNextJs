"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/firebase/config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const ProductsTable = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const products = querySnapshot.docs.map((doc) => doc.data());
      setItems(products);
    };

    fetchProducts();
  }, []);

  const deleteItem = async (slug) => {
    try {
      // Obtener la referencia al documento que se desea eliminar
      const docRef = doc(db, "products", slug);

      // Eliminar el documento de Firestore
      await deleteDoc(docRef);

      // Actualizar el estado de los items eliminando el elemento correspondiente
      setItems((prevItems) => prevItems.filter((item) => item.slug !== slug));
    } catch (error) {
      console.error("Error to delete document:", error);
    }
  };

  return (
    <div className="container m-auto">
      <Link
        href={"/admin/create"}
        className="rounded bg-blue-600 p-2 text-white transition transform hover:-translate-y-0.5"
      >
        Add Product
      </Link>
      <div className="flex flex-col align-middle justify-center">
        {items?.map((item, i) => (
          <div
            key={i}
            className="flex flex-col align-top justify-start p-4 border-2 border-yellow-200 rounded-md my-2 hover:bg-gray-600"
          >
            <p>
              <strong>Image:</strong>
              <Image
                src={`/imgs/products/${item?.image}`}
                alt={item?.title}
                width={80}
                height={80}
              />
            </p>
            <p>
              <strong>Title:</strong> {item?.title}
            </p>
            <p>
              {" "}
              <strong>Description:</strong> {item?.description}
            </p>
            <p>
              {" "}
              <strong>Stock:</strong> {item?.inStock}
            </p>
            <p>
              {" "}
              <strong>Price:</strong> {item?.price}
            </p>
            <p>
              {" "}
              <strong>Slug:</strong> {item?.slug}
            </p>

            <p>
              {" "}
              <strong>Type:</strong> {item?.type}
            </p>
            <div className="flex align-middle justify-start my-4">
              <Link
                href={`/admin/edit/${item?.slug}`}
                className=" bg-green-400 rounded p-2 text-white mr-2 transition transform hover:-translate-y-0.5"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteItem(item?.slug)}
                className=" bg-red-600 rounded p-2 text-white mr-2 transition transform hover:-translate-y-0.5"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsTable;
