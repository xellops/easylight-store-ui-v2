"use client";

import { Search, Wallet } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="
        flex justify-between bg-gray-100 mt-6 ml-3 w-[69rem] h-20 rounded-2xl
        max-sm:flex-col max-sm:h-52 max-sm:w-full
        max-sm:p-4 max-sm:mx-auto max-sm:ml-0 max-sm:m-0 max-sm:rounded-none
      "
    >
      <div className="w-[50%] h-9 m-5 max-sm:w-full max-sm:m-0 max-sm:mt-6">
        <h2 className="text-black font-sans max-sm:text-sm font-semibold">
          Welcome back, Dwight
        </h2>

        <p className="text-black font-sans leading-tight max-sm:leading-normal max-sm:mt-2">
          Discover amazing products
          <br className="max-sm:block hidden" />
          with flexible payments plans
        </p>
      </div>

      <div
        className="
          flex items-center justify-end space-x-2 my-5 pr-6
          max-sm:flex-col-reverse max-sm:space-x-0 max-sm:space-y-3
          max-sm:w-full max-sm:p-0
        "
      >
        <div
          className="
            flex items-center w-60 h-9 rounded-md bg-gray-300 px-2
            max-sm:w-[33%] max-sm:mt-4 max-sm:self-start 
          "
        >
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-gray-700"
          />
          <Search size={18} className="text-gray-600" />
        </div>

        <div
          className="
            flex items-center justify-center w-33 h-9 rounded-md bg-gray-300 p-2
            max-sm:w-auto max-sm:self-end
          "
        >
          <Wallet size={15} className="text-gray-600 mr-1" />
          <span className="text-gray-600 text-sm">₦5,270,632.00</span>
        </div>
      </div>
    </nav>
  );
}
