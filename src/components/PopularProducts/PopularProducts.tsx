"use client";

import Link from "next/link";
import Image from "next/image";

export const products = [
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
  {
    id: 5,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
  },
  {
    id: 6,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
  },
  {
    id: 7,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
  },
  {
    id: 8,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    image: "/images/SKYRUN.png",
  },
];

export default function PopularProducts() {
  return (
    <section className="flex flex-col ml-3 w-[69rem] max-sm:w-full px-2">
      <div
        className="grid gap-4 mt-4 
                      max-sm:grid-cols-2 max-sm:grid-rows-4 
                      sm:flex sm:flex-wrap"
      >
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="flex flex-col h-80 gap-3 bg-gray-100 rounded-2xl cursor-pointer hover:shadow-lg transition max-sm:w-full"
          >
            <div className="w-full h-36 relative overflow-hidden mt-2">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="flex flex-col p-3 w-full">
              <p className="text-black text-sm tracking-tighter font-sans mb-2 leading-tight">
                {product.name}
              </p>
              <p className="text-black text-sm tracking-tighter font-sans leading-tight">
                {product.model}
              </p>
              <p className="text-black text-sm tracking-tighter font-sans leading-tight">
                {product.brand}
              </p>
              <h2 className="text-xl text-black font-semibold leading-tight">
                {product.price}
              </h2>
              <p className="text-black text-sm tracking-tighter font-sans leading-tight">
                or {product.installment}
              </p>
              <div className="bg-green-800 text-white text-center h-10 mt-4 rounded-md flex items-center justify-center">
                <p className="text-sm">Add to Cart</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
