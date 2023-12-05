"use client"
import { useState } from "react"
import Counter from "../ui/Counter"
import Button from "../ui/Buttons"
import { useCartContext } from "../context/CartContext"
import Link from "next/link"

const QtySelector = ({ item }) => {
    const { addToCart, isInCart } = useCartContext()
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        addToCart({
            ...item,
            quantity
        })
    }

   

    return (
        <div className="flex flex-col gap-5 mt-6">
            {
                isInCart(item.slug)
                    ?   <Link
                            href={"/cart"}
                            className="rounded-lg py-2 px-4 bg-yellow-700 text-white text-center">
                            Buy now!
                        </Link>
                    :   <>
                            <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
                            <Button className="w-full bg-yellow-700 hover:bg-yellow-800" onClick={handleAdd}>Shop!</Button>
                            <Link href="/products/all" className="text-xs text-left flex items-center text-white my-5 p-5 ">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
</svg>
Back to Catalogue</Link>
                        </>
            }
        </div>
    )
}

export default QtySelector