import Link from "next/link";

const ProductosLayout = ({ children }) => {
  return (
    <div className="container m-auto p-2">
      <nav className="flex gap-10 py-4  flex-wrap justify-center ">
        <Link className="hover:bg-yellow-600 rounded-xl transition transform hover:-translate-y-0.5"
         href={"/products/all"}>
          All
        </Link>
        
        <Link
          className="hover:bg-yellow-600 rounded-xl transition transform hover:-translate-y-0.5"
          href={"/products/barware"}
        >
          Barware
        </Link>
        <Link
          className="hover:bg-yellow-600 rounded-xl transition transform hover:-translate-y-0.5"
          href={"/products/cupsmugs"}
        >
          Cups & Mugs
        </Link>
        <Link className="hover:bg-yellow-600 rounded-xl transition transform hover:-translate-y-0.5" 
        href={"/products/allbeds"}>
          All Beds
        </Link>
        <Link className="hover:bg-yellow-600 rounded-xl transition transform hover:-translate-y-0.5" 
        href={"/products/loungechairs"}>
        Lounge Chairs
        </Link>
        <Link
          className="hover:bg-yellow-600 rounded-xl transition transform hover:-translate-y-0.5"
          href={"/products/coffetables"}
        >
          Coffe Tables
        </Link>
        <Link
          className="hover:bg-yellow-600 rounded-xl transition transform hover:-translate-y-0.5"
          href={"/products/floorlamps"}
        >
          Floor Lamps
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default ProductosLayout;
