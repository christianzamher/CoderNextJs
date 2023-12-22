"use client"
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (slug) => {
        return cart.some(item => item.slug === slug)
    }

    const totalQty = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeFromCart = (title) => {
        setCart(cart.filter(product => product.title !== title));
      };

    const sortByPrice = (ascending = true) => {
        setProducts(cart.sort((a, b) => ascending ? a.price - b.price : b.price - a.price));
       };

    const totalPrice = (item) => {
        return cart.reduce((acc, item) =>acc + item.quantity * item.price  , 0)
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            totalQty,
            emptyCart,
            removeFromCart,
            sortByPrice,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}