"use client";
import Link from "next/link";

import Image from "next/image";
import { useState } from "react";

type OneProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const startingProducts = [
  {
    id: 1,
    name: "SKYRUN Gas Cooker 3-Gas 1 Hot Plate 50x50cm",
    price: 180000,
    image: "/images/SKYRUN.png",
  },
  {
    id: 2,
    name: "SKYRUN Electric Kettle 1.7L EK-1.7L",
    price: 15000,
    image: "/images/SKYRUN.png",
  },
  {
    id: 3,
    name: "SKYRUN Toaster 4-Slice ST-4S",
    price: 25000,
    image: "/images/SKYRUN.png",
  },
];

export default function Shopping() {
  const [cartItems, setCartItems] = useState<OneProduct[]>(
    startingProducts.map((product) => ({
      ...product,
      quantity: 1,
    }))
  );

  const changeQuantity = (productId: number, addOrMinus: number) => {
    setCartItems((oldItems) => {
      return oldItems.map((item) => {
        if (item.id === productId) {
          const newQuantity = Math.max(1, item.quantity + addOrMinus);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };

  // When user clicks "Remove Item"
  const deleteThisItem = (productId: number) => {
    setCartItems((oldItems) => {
      return oldItems.filter((item) => item.id !== productId);
    });
  };

  const showPrice = (amount: number) => {
    return `₦${amount.toLocaleString()}`;
  };

  const calculateRowTotal = (price: number, qty: number) => {
    return price * qty;
  };

  return (
    <div className="font-sans">
      <div className="mt-4 w-[98%] mx-auto">
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            className={`grid grid-cols-12 gap-4 items-center border-t-2 border-gray-200 h-40 
            ${index === cartItems.length - 1 ? "border-b-2" : ""}`}
          >
            <div className="col-span-5 flex items-center gap-4">
              <div className="relative h-32 w-32 overflow-hidden rounded-md border border-gray-300">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative">
                <p className="text-sm tracking-tighter max-w-xs">{item.name}</p>

                <button
                  onClick={() => deleteThisItem(item.id)}
                  className="absolute top-7 mt-1 flex h-10 w-32 items-center justify-center 
                  rounded-md bg-pink-300 text-sm text-red-600 hover:bg-pink-400"
                >
                  Remove Item
                </button>
              </div>
            </div>

            <p className="col-span-2 text-sm">{showPrice(item.price)}</p>

            <div className="col-span-3 flex justify-center">
              <div className="flex h-9 w-28 items-center justify-between rounded-md border border-gray-300 bg-white shadow-sm">
                <button
                  onClick={() => changeQuantity(item.id, -1)}
                  className="px-3 text-lg font-bold text-gray-600 hover:bg-gray-100 h-full rounded-l-md"
                >
                  −
                </button>

                <span className="w-12 text-center text-sm font-medium">
                  {item.quantity}
                </span>

                <button
                  onClick={() => changeQuantity(item.id, 1)}
                  className="px-3 text-lg font-bold text-gray-600 hover:bg-gray-100 h-full rounded-r-md"
                >
                  +
                </button>
              </div>
            </div>

            <p className="col-span-2 text-sm font-medium text-right">
              {showPrice(calculateRowTotal(item.price, item.quantity))}
            </p>
          </div>
        ))}
      </div>

      <Link href="/checkout">
        <div className="w-30 h-10 font-sans flex justify-center items-center ml-[990px] mt-5 text-white bg-green-800 rounded-md">
          <p className="text-sm">Go to Checkout</p>
        </div>
      </Link>
    </div>
  );
}
