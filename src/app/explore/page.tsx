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
          <div className="border border-green-800 w-29 h-10 rounded-3xl text-green-700 flex items-center justify-center font-sans">
            Categories
          </div>

          <div className="border border-green-800 w-29 h-10 rounded-3xl text-green-700 flex items-center justify-center font-sans">
            Price Range
          </div>

          <div className="border border-green-800 w-20 h-10 rounded-3xl text-green-700 flex items-center justify-center font-sans">
            Brand
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
