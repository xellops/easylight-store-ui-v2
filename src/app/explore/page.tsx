"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";
import PopularProducts, {
  products,
} from "@/components/PopularProducts/PopularProducts";

export default function Explore() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Main>
        <Navbar />
        <div className="flex gap-5 ml-3 mt-5">
          <div className="max-sm:hidden border border-green-800 w-29 h-10 rounded-3xl text-green-700 flex items-center justify-center font-sans">
            Categories
          </div>

          <div className=" max-sm:hidden border border-green-800 w-29 h-10 rounded-3xl text-green-700 flex items-center justify-center font-sans">
            Price Range
          </div>

          <div className="max-sm:hidden  border border-green-800 w-20 h-10 rounded-3xl text-green-700 flex items-center justify-center font-sans">
            Brand
          </div>

          <div className="hidden max-sm:flex max-sm:justify-between max-sm:w-90">
            <div className="max-sm:border max-sm:border-green-800 max-sm:w-[20%] max-sm:rounded-2xl max-sm:h-10 max-sm:flex max-sm:justify-center max-sm:items-center">
              <p className="text-green-800">Filter</p>
            </div>

            <div className="max-sm:bg-green-200 max-sm:h-10 max-sm:w-42 max-sm:rounded-2xl max-sm:flex max-sm:justify-center max-sm:items-center max-sm:tracking-tight max-sm:py-2">
              <p className="text-[14px] text-green-900">Sort by: Recomended</p>
            </div>
          </div>
        </div>

        <p className="ml-4 mt-7 text-sm">{products.length} Results</p>

        <div className="flex flex-col mt-5">
          <PopularProducts />
        </div>
      </Main>
    </div>
  );
}
