"use client";
import Link from "next/link";
import MenuList from "./MenuList";
import { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="bg-yellow-700">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div>
              <Link
                className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
                href="#"
              >
                HomeDepotify
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="md:flex items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                className="my-1 text-sm text-white font-medium hover:text-gray-800 md:mx-4 md:my-0"
                href="/"
              >
                Home
              </Link>
              <Link
                className="my-1 text-sm text-white font-medium hover:text-gray-800 md:mx-4 md:my-0"
                href="/products/all"
              >
                Shop
              </Link>
              <Link
                className="my-1 text-sm text-white font-medium hover:text-gray-800 md:mx-4 md:my-0"
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className="my-1 text-sm text-white font-medium hover:text-gray-800 md:mx-4 md:my-0"
                href="/about"
              >
                About
              </Link>
            </div>

            <div className="flex justify-center md:block">
              <Link
                className="relative text-gray-700 hover:text-gray-600"
                href="/cart"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
              </Link>
            </div>
            {/* <div className="flex flex-col md:flex-row md:mx-6">
      <Link className="relative text-gray-700 hover:text-gray-600" href="/admin"> Admin
      
      </Link>
      </div> */}

            <MenuList open={open} setOpen={setOpen} />
            

          </div>
          <div onClick={handleMenu}>
              <div>
                <button className="relative group">
                  <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-500 origin-center overflow-hidden">
                      <div className="bg-white h-[2px] w-7 transform transition-all duration-500 group-focus:rotate-45 -translate-x-1"></div>
                      <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-500 "></div>
                      <div className="bg-white h-[2px] w-7 transform transition-all duration-500 group-focus:-rotate-45 -translate-x-1"></div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;