"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "../ui/Buttons";
import { useCartContext } from "../context/CartContext";
import { db } from "@/firebase/config";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const createOrder = async (values, items) => {
  const order = {
    client: values,
    items: items.map((item) => ({
      title: item.title,
      price: item.price,
      slug: item.slug,
      quantity: item.quantity,
    })),
    date: new Date().toISOString(),
  };

  const docId = Timestamp.fromDate(new Date()).toMillis();
  const orderRef = doc(db, "orders", String(docId));
  await setDoc(orderRef, order);

  return docId;
};

const ClientForm = () => {
  const { cart, emptyCart } = useCartContext();

  const [values, setValues] = useState({
    email: "",
    direccion: "",
    nombre: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createOrder(values, cart);
    console.log(result);

    emailjs
      .sendForm(
        EMAIL_JS_SERVICE = service_1nntz4p,
        EMAIL_JS_TEMPLATE = template_893vr4b,
        EMAIL_JS_USER = MaVK8MhkEQzwLAX1k
      )
      .then(
        ({ status }) => {
          if (status === 200) {
            setFormSubmitted({
              title: "Message has been sent",
              paragraph: "Shopping succesfully.",
            });
          } else {
            setFormSubmitted({
              title:
                "Unexpected status code returned from EmailJS, try again later",
              paragraph:
                "Please contact HomeDepotify either by phone or email.",
            });
          }
        },
        (err) => {
          console.log(err);
          setFormSubmitted({
            title: "Error sending message, try again later",
            paragraph: "Please contact HomeDepotify either by phone or email.",
          });
        }
      );
  };
  return (
    <form onSubmit={handleSubmit} ref={form} className="my-12 text-gray-700">
      <label>Name:</label>
      <input
        type="name"
        required
        placeholder="Name"
        className="p-2 rounded w-1/2 border border-blue-100 block my-4 text-gray-700"
        name="user_name"
        onChange={handleChange}
      />
      <label>Location:</label>
      <input
        type="subject"
        name="user_subject"
        required
        placeholder="subject"
        className="p-2 rounded w-1/2 border border-blue-100 block my-4"
        onChange={handleChange}
      />
      <label>E-Mail</label>
      <input
        type="email"
        required
        placeholder="Email"
        className="p-2 rounded w-1/2 border border-blue-100 block my-4"
        name="user_email"
        onChange={handleChange}
      />
      <Link href={"/checkout"}>
        <Button
          onClick={() => emptyCart()}
          required
          type="submit"
          className="rounded-2xl    text-center block rounded-l bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
        >
          Check Out
        </Button>
      </Link>

      <Link
        href="/products/all"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </Link>
    </form>
  );
};

export default ClientForm;
