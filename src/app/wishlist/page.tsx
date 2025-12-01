import Sidebar from "@/components/Sidebar/Sidebar";
import Main from "@/components/Main/Main";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

const wishListItems = [
  {
    id: 1,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
  },
  {
    id: 2,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
  },
  {
    id: 3,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
  },
  {
    id: 4,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
  },
];

export default function WishList() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <Main>
        <Navbar />

        <h2 className="font-sans font-semibold ml-3 mt-4">
          My WishList ({wishListItems.length})
        </h2>

        <div className="flex flex-wrap justify-between ml-3 mt-5 w-[1100px] gap-6">
          {wishListItems.map((item) => (
            <Link
              key={item.id}
              href={`/products/${item.id}`}
              className="flex flex-col h-80 gap-3 bg-gray-100 rounded-2xl w-60 cursor-pointer hover:shadow-md transition"
              aria-label={`Open ${item.name} product page`}
            >
              <div className="w-48 h-36 mx-auto relative overflow-hidden mt-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col w-64 p-3 mx-auto">
                <p className="text-black text-sm tracking-tighter font-sans mb-1 leading-tight">
                  {item.name}
                </p>
                <p className="text-black text-sm tracking-tighter font-sans leading-tight">
                  {item.model}
                </p>
                <p className="text-black text-sm tracking-tighter font-sans leading-tight">
                  {item.brand}
                </p>
                <h2 className="text-2xl text-black font-semibold leading-tight">
                  {item.price}
                </h2>
                <p className="text-black text-sm tracking-tighter font-sans leading-tight">
                  or {item.installment}
                </p>

                <div className="bg-green-800 text-white text-center h-10 w-48 mt-4 mx-auto rounded-md flex items-center justify-center hover:bg-green-900 transition">
                  <p className="text-sm">Add to Cart</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Main>
    </div>
  );
}
