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
    imageMobile: "/images/mobileimage.png",
  },
  {
    id: 2,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    imageMobile: "/images/mobileimage.png",
  },
  {
    id: 3,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    imageMobile: "/images/mobileimage.png",
  },
  {
    id: 4,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    imageMobile: "/images/mobileimage.png",
  },
  {
    id: 5,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    imageMobile: "/images/mobileimage.png",
  },
  {
    id: 6,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    imageMobile: "/images/mobileimage.png",
  },
  {
    id: 7,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    imageMobile: "/images/mobileimage.png",
  },
  {
    id: 8,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "SKYRUN",
    price: "₦180,000",
    installment: "₦15,000/month x 12",
    imageMobile: "/images/mobileimage.png",
  },
];

export default function PopularProducts() {
  return (
    <section className="w-full px-4 py-6 bg-gray-50">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md active:scale-[0.98] transition-transform duration-150"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={product.imageMobile}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
                priority={product.id <= 4}
              />
            </div>

            <div className="p-3 pb-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-semibold text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-600 mt-1">{product.model}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                  {product.brand}
                </p>

                <div className="mt-3">
                  <p className="text-lg font-bold text-gray-900">
                    {product.price}
                  </p>
                  <p className="text-xs text-gray-600 mt-0.5">
                    or {product.installment}
                  </p>
                </div>
              </div>

              <button className="mt-4 hidden sm:block w-full bg-green-700 hover:bg-green-800 active:bg-green-900 text-white font-medium text-sm py-3 rounded-lg transition-colors">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
