"use client";

import { useCartContext } from "@/components/context/CartContext";

import CartList from "@/components/cart/CartList";
import ClientForm from "@/components/cart/ClientForm";

const CartPage = () => {
  const { cart, totalPrice } = useCartContext();

  return (
    <main className="container m-auto">
      <h2 className="text-2xl my-10 border-b pb-4">Your Goals</h2>

      <CartList />
      <ClientForm />
    </main>
  );
};

export default CartPage;
