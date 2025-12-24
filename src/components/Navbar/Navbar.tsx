"use client";

import { Search, Wallet } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="flex flex-col gap-4 bg-gray-100 w-full p-4 rounded-none
                    sm:flex-row sm:items-center sm:justify-between sm:h-20 sm:rounded-2xl sm:mt-6 sm:ml-3 sm:w-[69rem]"
    >
      <div className="w-full sm:w-1/2">
        <h2 className="text-sm tracking-tight sm:text-base font-semibold text-black">
          Welcome back, Dwight
        </h2>
        <p className="text-[11px] tracking-tight leading-normal text-black mt-1">
          Discover amazing products with flexible payment plans
        </p>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto sm:justify-end">
        <div className="flex items-center h-9 rounded-md bg-gray-300 px-3 grow max-w-[32%] sm:flex-none sm:w-60">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
          />
          <Search size={18} className="text-gray-600" />
        </div>

        <div className="flex items-center justify-center w-40 h-9 sm:w-auto -translate-y-8 -translate-x-18 sm:translate-y-0 sm:translate-x-0 rounded-md bg-gray-300 px-3">
          <Wallet size={15} className="text-gray-600 mr-1" />
          <span className="text-gray-600 text-sm">₦5,270,632.00</span>
        </div>
      </div>
    </nav>
  );
}
