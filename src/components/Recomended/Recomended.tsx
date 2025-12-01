import Link from "next/link";
import Image from "next/image";

const recommendedProducts = [
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

export default function Recommended() {
  return (
    <div className="mt-5">
      <h2 className="font-sans font-semibold mb-4 ml-3">Recommended for you</h2>

      <div className="flex justify-between ml-3 w-[1100px] gap-6">
        {recommendedProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col h-80 gap-3 bg-gray-100 rounded-2xl w-60"
          >
            <div className="w-48 h-36 mx-auto relative overflow-hidden mt-2">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>

            <div className="flex flex-col w-64 p-3 mx-auto">
              <p className="text-black text-sm tracking-tighter font-sans mb-2 leading-tight">
                {product.name}
              </p>
              <p className="text-black text-sm tracking-tighter font-sans leading-tight">
                {product.model}
              </p>
              <p className="text-black text-sm tracking-tighter font-sans leading-tight">
                {product.brand}
              </p>
              <h2 className="text-2xl text-black font-semibold leading-tight">
                {product.price}
              </h2>
              <p className="text-black text-sm tracking-tighter font-sans leading-tight">
                or {product.installment}
              </p>

              <div className="bg-green-800 text-white text-center h-10 w-48 mt-4 mx-auto rounded-md flex items-center justify-center hover:bg-green-900 transition cursor-pointer">
                <p className="text-sm">Add to Cart</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
