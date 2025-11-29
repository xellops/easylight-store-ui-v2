"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  ShoppingBag,
  Package,
  Heart,
  Wallet,
  CreditCard,
  ShieldCheck,
  Lock,
  History,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const mainLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/explore", label: "Explore Products", icon: Package },
    { href: "/cart", label: "Shopping Cart", icon: ShoppingBag },
    { href: "/wishlist", label: "Wishlist", icon: Heart },
  ];

  const bottomLinks = [
    { href: "/wallet", label: "Wallet", icon: Wallet },
    { href: "/orders", label: "Order History", icon: History },
    { href: "/saved-cards", label: "Saved Cards", icon: CreditCard },
    { href: "/verification", label: "Verification Status", icon: ShieldCheck },
    { href: "/security", label: "Security Settings", icon: Lock },
  ];

  const checkExploreActive = () => {
    return (
      pathname.startsWith("/explore") ||
      pathname.startsWith("/electronics") ||
      pathname.startsWith("/home-appliances") ||
      pathname.startsWith("/kitchen-gadgets") ||
      pathname.startsWith("/cleaning-equipments") ||
      pathname.startsWith("/smart-home-devices") ||
      pathname.startsWith("/heating-cooling-systems") ||
      pathname.startsWith("/laundry-appliances")
    );
  };

  return (
    <aside className="flex flex-col justify-between w-[20%] min-h-screen bg-gray-100 rounded-2xl ml-3 mt-[9px] py-4">
      <div>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 mt-4 mb-4 ml-4">
          <Image
            src="/images/esaylight-logo.svg"
            alt="Easylight Logo"
            width={30}
            height={30}
          />
          <h2 className="text-2xl font-bold text-green-800 whitespace-nowrap">
            EASYLIGHT
          </h2>
        </Link>

        {/* MAIN LINKS */}
        <div className="flex flex-col items-start gap-3 mt-6 w-full px-2">
          {mainLinks.map(({ href, label, icon: Icon }) => {
            const isExploreActive = href === "/explore" && checkExploreActive();
            const isActive = pathname === href || isExploreActive;

            return (
              <Link key={href} href={href} className="flex w-full">
                <div
                  className={`flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-200 
                    w-[90%] ml-2
                    ${
                      isActive
                        ? "bg-green-800 text-white"
                        : "text-black hover:bg-gray-200"
                    }`}
                >
                  <div className="w-6 flex justify-center">
                    <Icon
                      className={`w-5 h-5 ${
                        isActive ? "text-white" : "text-black"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-sm whitespace-nowrap ${
                      isActive ? "text-white" : "text-black"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* BOTTOM LINKS */}
      <div className="flex flex-col items-start gap-3 mb-6 w-full px-2">
        {bottomLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link key={href} href={href} className="flex w-full">
              <div
                className={`flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-200 
                  w-[90%] ml-2
                  ${
                    isActive
                      ? "bg-green-800 text-white"
                      : "text-black hover:bg-gray-200"
                  }`}
              >
                <div className="w-6 flex justify-center">
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-white" : "text-black"
                    }`}
                  />
                </div>
                <span
                  className={`text-sm whitespace-nowrap ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  {label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
