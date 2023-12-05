import Link from "next/link";

const ProductosLayout = ({ children }) => {
  return (
    <div className="container m-auto">
      <nav className="flex gap-10 py-4 ">
        <Link className="hover:bg-yellow-600 rounded-xl" href={"/products/all"}>
          Todos
        </Link>
        <Link className="hover:bg-yellow-600 rounded-xl" href={"/products/tvs"}>
          TVs
        </Link>
        <Link
          className="hover:bg-yellow-600 rounded-xl"
          href={"/products/hornos"}
        >
          Hornos
        </Link>
        <Link
          className="hover:bg-yellow-600 rounded-xl"
          href={"/products/aires"}
        >
          Aires
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default ProductosLayout;
