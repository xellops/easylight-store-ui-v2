"use client";

import { Search, Wallet } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-gray-100 mt-6 ml-3 w-[69rem] h-20 rounded-2xl ">
      <div className="w-[50%] h-9 m-5">
        <h2 className="text-black font-sans font-semibold">
          Welcome back, Dwight
        </h2>
        <p className="text-black font-sans leading-tight">
          Discover amazing products with flexible payments plans
        </p>
      </div>

      <div className="flex items-center justify-end space-x-2 my-5 pr-6">
        {/* Search Input */}
        <div className="flex items-center w-60 h-9 rounded-md bg-gray-300 px-2">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-gray-700"
          />
          <Search size={18} className="text-gray-600" />
        </div>

        {/* Wallet balance */}
        <div className="flex items-center justify-center w-33 h-9 rounded-md bg-gray-300 p-2">
          <Wallet size={15} className="text-gray-600 mr-1" />
          <span className="text-gray-600  text-sm">₦5,270,632.00</span>
        </div>
      </div>
    </nav>
  );
}
