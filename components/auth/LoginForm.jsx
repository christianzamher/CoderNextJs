"use client";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import Image from "next/image";
import Link from "next/link";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const { registerUser, loginUser, googleLogin } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <Image
            src={"/imgs/shutterstock_338700272-1200x801.jpg"}
            alt=""
            className="w-full h-full object-cover"
            width={500}
            height={600}
          />
        </div>

        <div
          className="bg-gray-400 w-full md:max-w-md lg:max-w-full  md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-gray-900 text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>

                <input
                  type="email"
                  value={values.email}
                  required
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  name="email"
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>

                <input
                  type="password"
                  value={values.password}
                  required
                  minLength="6"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                 focus:bg-white focus:outline-none"
                  name="password"
                  onChange={handleChange}
                />
              </div>

              <div className="text-right mt-2">
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6  uppercase  shadow hover:shadow-lg transition transform hover:-translate-y-0.5"
                onClick={() => loginUser(values)}
              >
                Log In
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 transition transform hover:-translate-y-0.5"
              onClick={() => googleLogin()}
            >
              <div className="flex items-center text-center justify-center transition transform hover:-translate-y-0.5">
                <Image
                  src={
                    "https://tailus.io/sources/blocks/social/preview/images/google.svg"
                  }
                  alt="google"
                  className="w-6 h-6 hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700   font-medium "
                  viewBox="0 0 48 48"
                  width={200}
                  height={300}
                />

                <span className="ml-4  hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 font-medium ">
                  Log in with Google
                </span>
              </div>
            </button>

            <p className="mt-8 text-slate-800 justify-center transition transform hover:-translate-y-0.5">
              Need an account?{" "}
              <Link
                href="#"
                className="text-gray-900  hover:text-yellow-700 font-semibold  border-transparent hover:border-transparent  "
                onClick={() => registerUser(values)}
              >
                Create account
              </Link>
            </p>
            <div className="mt-5 flex  text-sm text-gray-800 justify-center">
              <p className="text-center">
                This site is protected by reCAPTCHA and the Google <br />
                <Link className="underline" href="#">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link className="underline" href="#">
                  Terms of Service
                </Link>{" "}
                apply.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
