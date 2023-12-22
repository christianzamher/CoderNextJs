import Image from "next/image";
//import { mockData } from "@/data/product";
import ProductDetail from "@/components/products/ProductDetail";

export async function generateMetadata({ params }) {
  console.log(params);

  return {
    title: `My Shopp - Products - ${params.slug}`,
  };
}

const Detail = ({ params }) => {
  const { slug } = params;

  return (
    <div className="container m-auto pt-8">
      <h3 className="text-4xl text-bold py-8">Product Detail</h3>

      <hr className="py-1" />

      <ProductDetail slug={slug} />
    </div>
  );
};

export default Detail;
