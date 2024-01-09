"use client";

import { useCartContext } from "@/components/context/CartContext";

import CartList from "@/components/cart/CartList";
import ClientForm from "@/components/cart/ClientForm";

const CartPage = () => {
  const { cart, totalPrice } = useCartContext();

  return (
    <main className="container m-auto p-2">
      <h2 className="text-2xl my-10 border-b pb-4 text-bold block   font-bold text-gray-200 sm:text-3xl">Your Goals</h2>

      <CartList />
      <ClientForm />
    </main>
  );
};

export default CartPage;
