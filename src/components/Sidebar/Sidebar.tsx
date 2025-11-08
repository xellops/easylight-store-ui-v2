"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Package, Heart } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/explore", label: "Explore Products", icon: Package },
    { href: "/cart", label: "Shopping Cart", icon: ShoppingBag },
    { href: "/wishlist", label: "Wishlist", icon: Heart },
  ];

  return (
    <aside className="flex flex-col w-[20%] h-260 bg-gray-100 rounded-2xl ml-3 mt-[9px]">
      <Link
        href="/"
        className="flex items-center gap-1 mt-6 mb-2 ml-4 whitespace-nowrap"
      >
        <Image
          src="/images/esaylight-logo.svg"
          alt="Easylight Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <h2 className="text-2xl mr-5 font-bold text-green-800 whitespace-nowrap">
          EASYLIGHT
        </h2>
      </Link>

      <div className="flex flex-col items-center gap-4 mt-4 w-full">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`group flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 w-[80%]
                ${
                  isActive
                    ? "bg-green-800 text-white"
                    : "text-black hover:bg-gray-200"
                }`}
            >
              <Icon
                size={20}
                className={`transition-colors duration-200
                  ${isActive ? "text-white" : "text-black"}
                `}
              />
              <span
                className={`text-sm whitespace-nowrap transition-colors duration-200
                  ${isActive ? "text-white" : "text-black"}
                `}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
