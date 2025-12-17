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
    <section className="w-full p-4 sm:p-6">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="
                flex flex-col bg-white rounded-2xl overflow-hidden
                shadow-md transition-transform active:scale-[0.98]
              "
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

              <div className="flex flex-col flex-1 p-3 pb-4">
                <div>
                  <h3 className="text-sm font-semibold leading-tight line-clamp-2 min-h-[2.5rem]">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-600">{product.model}</p>

                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    {product.brand}
                  </p>

                  <div className="mt-3">
                    <p className="text-base sm:text-lg font-bold text-gray-900">
                      {product.price}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-600">
                      or {product.installment}
                    </p>
                  </div>
                </div>

                <button
                  className="
                    mt-4 hidden sm:block w-full rounded-lg
                    bg-green-700 py-3 text-sm font-medium text-white
                    hover:bg-green-800 active:bg-green-900 transition-colors
                  "
                >
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
