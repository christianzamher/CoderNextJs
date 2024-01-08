"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "../ui/Buttons";
import { db, storage } from "@/firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const updateProduct = async (slug, values, file) => {
  let fileURL = values.image;

  if (file) {
    const storageRef = ref(storage, values.slug);
    const fileSnapshot = await uploadBytes(storageRef, file);
    fileURL = await getDownloadURL(fileSnapshot.ref);
  }

  const docRef = doc(db, "productos", slug);
  const updatedValues = {
    title: values.title,
    description: values.description,
    type: values.type,
    image: fileURL,
  };

  if (!isNaN(values.inStock)) {
    updatedValues.inStock = Number(values.inStock);
  }

  if (!isNaN(values.price)) {
    updatedValues.price = Number(values.price);
  }

  return updateDoc(docRef, updatedValues)
    .then(() => {
      console.log("Producto actualizado correctamente");
      return { success: true };
    })
    .catch((error) => {
      console.error("Error al actualizar el producto:", error);
      return { success: false, error };
    });
};

const EditForm = ({ item }) => {
  const { title, description, inStock, price, type, image } = item;
  const [values, setValues] = useState({
    title,
    description,
    inStock,
    price,
    type,
    image,
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProduct(item.slug, values, file);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="container m-auto mt-6 max-w-lg">
      <form onSubmit={handleSubmit} className="my-12">
        <label>Nombre: </label>
        <input
          type="text"
          value={values.title}
          required
          className="text-gray-900 p-2 rounded w-full border border-blue-100 block my-4"
          name="title"
          onChange={handleChange}
        />

        <label>Imagen: </label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="text-gray-500 p-2 rounded w-full border border-blue-100 block my-4"
        />

        <label>Precio: </label>
        <input
          type="number"
          value={values.price}
          required
          className="text-gray-900 p-2 rounded w-full border border-blue-100 block my-4"
          name="price"
          onChange={handleChange}
        />

        <label>Stock: </label>
        <input
          type="number"
          value={values.inStock}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4 text-gray-900"
          name="inStock"
          onChange={handleChange}
        />

        <label>Categoria: </label>
        <input
          type="text"
          value={values.type}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4 text-gray-900"
          name="type"
          onChange={handleChange}
        />

        <label>Descripción: </label>
        <textarea
          value={values.description}
          className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4 text-gray-900"
          name="description"
          onChange={handleChange}
        />
        <Link 
          href={"/admin"}
        >
        
        <Button className="w-full block bg-gray-500 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300" type="submit">Send</Button>
        </Link>
      </form>
    </div>
  );
};

export default EditForm;
