import CartItem from "./CartItem"
import { useCartContext } from "@/components/context/CartContext"


const CartList = () => {
    const { cart, totalPrice } = useCartContext()

    return (
        <div>
            <ul>
                {
                    cart.map((item) => <CartItem item={item} key={item.slug}/>)
                }
            </ul>

            <p className="text-2xl my-4 border-b pb-4 text-bold block   font-bold text-gray-200 sm:text-3xl">Total: ${totalPrice()}</p>
        </div>
    )
}

export default CartList