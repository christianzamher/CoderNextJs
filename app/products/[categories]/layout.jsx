import Link from "next/link";

const ProductosLayout = ({ children }) => {
  return (
    <div className="container m-auto">
      <nav className="flex gap-10 py-4 ">
        <Link className="hover:bg-yellow-600 rounded-xl" href={"/products/all"}>
          All
        </Link>
        
        <Link
          className="hover:bg-yellow-600 rounded-xl"
          href={"/products/barware"}
        >
          Barware
        </Link>
        <Link
          className="hover:bg-yellow-600 rounded-l"
          href={"/products/cupsmugs"}
        >
          Cups & Mugs
        </Link>
        <Link className="hover:bg-yellow-600 rounded-xl" href={"/products/allbeds"}>
          All Beds
        </Link>
        <Link className="hover:bg-yellow-600 rounded-xl" href={"/products/loungechairs"}>
        Lounge Chairs
        </Link>
        <Link
          className="hover:bg-yellow-600 rounded-xl"
          href={"/products/coffetables"}
        >
          Coffe Tables
        </Link>
        <Link
          className="hover:bg-yellow-600 rounded-xl"
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
