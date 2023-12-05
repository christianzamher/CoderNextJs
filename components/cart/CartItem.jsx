
import Button from "../ui/Buttons"
import Image from "next/image"
import { useCartContext } from "../context/CartContext"

const CartItem = ({item}) => {
     
    const {removeFromCart ,cart} = useCartContext()
    

    if (cart.length === 0) {
        return (
          <main className="container m-auto my-5 p-auto w-1/2">
            <div className="m-auto bg-orange-300 text-center rounded-md">
              <h1 className="m-auto py-12 text-2xl font-semibold text-purple-900">
                There are no products in your cart
              </h1>
              <h2 className="m-auto py-12 text-2xl font-semibold text-purple-900">
                Click the button below to check our catalogue
              </h2>
              <Link href="/products/all">
                <Button>Check Catalogue</Button>
              </Link>
            </div>
          </main>
        );
      }
    
    
    return (
        <li className="shadow flex justify-between items-center max-w-xl gap-6 p-4 my-4">
            <Image
                src={`/imgs/products/${item.image}`}
                alt={item.title}
                width={80}                
                height={80}                
            />
            <div>
                <h3>{item.title}</h3>
                <p className="text-sm font-semibold">${item.price * item.quantity}</p>
                <p className="text-sm">Quantity: {item.quantity}</p>
            </div>

            <Button onClick={() => removeFromCart(item.title)} className="bg-red-600">
                <Image
                    src={'/imgs/trash-icon.svg'}
                    alt="Trash icon"
                    width={30}
                    height={30}
                />
            </Button>
        </li>
    )
}

export default CartItem