"use client"
import Link from "next/link"
import { useState } from "react"
import Button from "../ui/Buttons"
import { useCartContext } from "../context/CartContext"
import { db } from "@/firebase/config"
import { setDoc, doc, Timestamp } from "firebase/firestore"


const createOrder = async (values, items) => {
    const order = {
        client: values,
        items: items.map(item => ({
            title: item.title,
            price: item.price,
            slug: item.slug,
            quantity: item.quantity
        })),
        date: new Date().toISOString()
    }

    const docId = Timestamp.fromDate(new Date()).toMillis()
    const orderRef = doc(db, "orders", String(docId))
    await setDoc(orderRef, order)

    return docId
}

const ClientForm = () => {
    const { cart ,emptyCart } = useCartContext()

    const [values, setValues] = useState({
        email: '',
        direccion: '',
        nombre: ''
    })

    const handleChange = (e) => { 
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value
        })
     }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await createOrder(values, cart)
        console.log(result)
    }

    return (
        <form onSubmit={handleSubmit} className="my-12">
            <input
                type="nombre"
                required
                placeholder="Tu nombre"
                className="p-2 rounded w-1/2 border border-blue-100 block my-4"
                name="nombre"
                onChange={handleChange}
            />
            <input
                type="direccion"
                required
                placeholder="Tu dirección"
                className="p-2 rounded w-1/2 border border-blue-100 block my-4"
                name="direccion"
                onChange={handleChange}
            />
            <input
                type="email"
                required
                placeholder="Tu email"
                className="p-2 rounded w-1/2 border border-blue-100 block my-4"
                name="email"
                onChange={handleChange}
            />

            <Button onClick ={()=> emptyCart()} type="submit"  className="block rounded-l bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">Check Out</Button>

            <Link
            href="/products/all"
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </Link>
        </form>
    )
}

export default ClientForm