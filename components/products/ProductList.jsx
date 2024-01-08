
import { collection, getDocs, query, where } from "firebase/firestore"
import ProductCard from "./ProductCard"
import { db } from "@/firebase/config"


const getProducts = async (categories) => {
    const productsRef = collection(db, 'products')
    const q = categories === "all"
                ? productsRef
                : query(productsRef, where("type", "==", categories));

    const querySnapshot = await getDocs( q )

    return querySnapshot.docs.map( docSnapshot => docSnapshot.data() )
}


 

const ProductList = async ({categories}) => {
    const items = await getProducts(categories)

    return (
        <section className="flex justify-center items-center gap-10 flex-wrap">
            {items.map(product => <ProductCard key={product.slug} item={product} />)}
        </section>
    )
}

export default ProductList