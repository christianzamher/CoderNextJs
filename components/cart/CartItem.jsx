import Button from "../ui/Buttons";
import Image from "next/image";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart , totalPrice} = useCartContext();

  return (
    <>
      <li className="shadow flex justify-between items-center max-w-xl gap-6 p-4 my-4 bg-slate-400 hover:bg-gray-300">
        <Image
          src={`/imgs/products/${item.image}`}
          alt={item.title}
          width={80}
          height={80}
        />
        <div>
          <h3>{item.title}</h3>
          <p className="text-sm font-semibold">${totalPrice()}</p>
          <p className="text-sm">Quantity: {item.quantity}</p>
        </div>

        <Button
          onClick={() => removeFromCart(item.title)}
          className="bg-red-600"
        >
          <Image
            src={"/imgs/trash-icon.svg"}
            alt="Trash icon"
            width={30}
            height={30}
          />
        </Button>
      </li>
    </>
  );
};

export default CartItem;
