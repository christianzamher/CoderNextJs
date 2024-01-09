import Link from "next/link";
import React from "react";
import Image from "next/image";

export const metadata = {
  title: "HomeDepotify - Goodbye blue Sky ",
  description: "See you soon!",
};
const CheckOut = () => {
  return (
    <>
      <div className=" bg-gray-500 relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <Link
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            href={
              "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            }
            alt=""
          />
          <Image
            src={"/imgs/pexels-photo-3184291.jpeg"}
            width={900}
            height={1500}
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Thank you for your recent purchase from [HomeDepotify]. We are
              so glad you found what you were looking for! We know you have a
              lot of choices when it comes to a product or a service, and we are
              grateful that you chose [Us]. We are committed to
              providing our customers with the best possible experience, and we
              hope you will be happy with your purchase. Your order will be
              shipped within 7 business days. You will receive a tracking
              number when your order ships. In the meantime, please let us know
              if you have any questions or concerns. We are always happy to help.
              Thanks again for your business! Sincerely, [HomeDepotify]
            </p>
            <div className="flex items-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
