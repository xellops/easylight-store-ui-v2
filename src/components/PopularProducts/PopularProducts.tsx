"use client";

import Link from "next/link";
import Image from "next/image";

export const products = [
  {
    id: 1,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
    mobileImage: "/images/mobileimage.png",
  },

  {
    id: 2,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
    mobileImage: "/images/mobileimage.png",
  },
  {
    id: 3,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
    mobileImage: "/images/mobileimage.png",
  },
  {
    id: 4,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
    mobileImage: "/images/mobileimage.png",
  },
  {
    id: 5,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
    mobileImage: "/images/mobileimage.png",
  },
  {
    id: 6,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
    mobileImage: "/images/mobileimage.png",
  },
  {
    id: 7,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
    mobileImage: "/images/mobileimage.png",
  },
  {
    id: 8,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
    mobileImage: "/images/mobileimage.png",
  },
];

export default function PopularProducts() {
  return (
    <section className="flex flex-col ml-3 w-[69rem] max-sm:w-full max-sm:ml-0">
      <div
        className="flex flex-wrap gap-6 mt-4 
        max-sm:grid max-sm:grid-cols-2 max-sm:gap-2"
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="
              flex flex-col h-80 gap-3 bg-gray-100 rounded-2xl cursor-pointer hover:shadow-lg transition
              max-sm:h-auto max-sm:w-full max-sm:p-2
            "
          >
            <div className="w-48 h-36 mx-auto relative overflow-hidden mt-2 max-sm:w-full max-sm:h-32">
              {/* Desktop Image */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                className="hidden sm:block"
              />
              {/* Mobile Image */}
              <Image
                src={product.mobileImage}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                className="block sm:hidden"
              />
            </div>

            <div className="flex flex-col w-64 p-3 mx-auto max-sm:w-full max-sm:p-2">
              <p className="text-black text-sm tracking-tighter font-sans mb-1 leading-tight max-sm:text-xs">
                {product.name}
              </p>
              <p className="text-black text-sm tracking-tighter font-sans leading-tight max-sm:text-xs">
                {product.model}
              </p>
              <p className="text-black text-sm tracking-tighter font-sans leading-tight max-sm:text-xs">
                {product.brand}
              </p>
              <h2 className="text-2xl text-black font-semibold leading-tight max-sm:text-sm">
                {product.price}
              </h2>
              <p className="text-black text-sm tracking-tighter font-sans leading-tight max-sm:text-[11px]">
                or {product.installment}
              </p>

              <div className="bg-green-800 text-white text-center h-10 w-48 mt-4 mx-auto rounded-md flex items-center justify-center max-sm:w-full max-sm:h-8 max-sm:mt-2 max-sm:hidden">
                <p className="text-sm max-sm:text-xs">Add to Cart</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
