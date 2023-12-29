import Link from "next/link";
import React from "react";


export const metadata = {
  title:'Home Depotify - you are not Allowed ',
  description: "Learn more about the team behind MyApp"
}

const Unauthorized = () => {
  return (
    <>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          USER
        </h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          not allowed
        </div>
        <button className="mt-5">
          <Link
            href={"/"}
            className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
          >
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <Link href="/">Go Home</Link>
            </span>
          </Link>
        </button>
      </main>
    </>
  );
};

 export default Unauthorized;

