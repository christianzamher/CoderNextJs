"use client";
import { useState } from "react";
import Counter from "../ui/Counter";
import Button from "../ui/Buttons";
import { useCartContext } from "../context/CartContext";
import Link from "next/link";

const QtySelector = ({ item }) => {
  const { addToCart, isInCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addToCart({
      ...item,
      quantity,
    });
  };

  return (
    <div className="flex flex-col gap-5 mt-6">
      {isInCart(item.slug) ? (
        <Link
          href={"/cart"}
          className="rounded-lg py-2 px-4 bg-yellow-700 text-white text-center"
        >
          Add to Cart
        </Link>
      ) : (
        <>
          <Counter
            max={item.inStock}
            counter={quantity}
            setCounter={setQuantity}
          />
          <Button
            className="w-full bg-yellow-700 hover:bg-yellow-800"
            onClick={handleAdd}
          >
            Add to Whislist
          </Button>
        </>
      )}
    </div>
  );
};

export default QtySelector;
