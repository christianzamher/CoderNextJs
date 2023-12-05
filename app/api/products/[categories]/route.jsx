import { NextResponse } from "next/server";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(request, { params }) {
  const { categories } = params;

  /*  const data = categories === 'all'
            ? mockData
            : mockData.filter(item => item.type === categories)  */

  const productsRef = collection(db, "products");
  const q =
    categories === "all"
      ? productsRef
      : query(productsRef, where("type", "==", categories));

  const querySnapshoot = await getDocs(q);

  const docs = querySnapshoot.docs.map((doc) => doc.data());

  return NextResponse.json(docs);
}
