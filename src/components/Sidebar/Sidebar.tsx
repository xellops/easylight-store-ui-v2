"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type SidebarLink = {
  href: string;
  label: string;
  icon: string;
};

export default function Sidebar() {
  const pathname = usePathname();

  const mainLinks: SidebarLink[] = [
    { href: "/", label: "Home", icon: "/icons/home.png" },
    {
      href: "/explore",
      label: "Explore Products",
      icon: "/icons/exploreproducts.png",
    },
    { href: "/cart", label: "Shopping Cart", icon: "/icons/shoppingcart.png" },
    { href: "/wishlist", label: "Wishlist", icon: "/icons/wishlist.png" },
  ];

  const bottomLinks: SidebarLink[] = [
    { href: "/wallet", label: "Wallet", icon: "/icons/wallet.png" },
    {
      href: "/orders",
      label: "Order History",
      icon: "/icons/orderhistory.png",
    },
    {
      href: "/saved-cards",
      label: "Saved Cards",
      icon: "/icons/savedcards.png",
    },
    {
      href: "/verification",
      label: "Verification Status",
      icon: "/icons/verification.png",
    },
    {
      href: "/security",
      label: "Security Settings",
      icon: "/icons/security.png",
    },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClasses = (href: string) =>
    `flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors duration-200 ${
      isActive(href)
        ? "bg-green-800 text-white"
        : "text-black hover:bg-gray-200"
    }`;

  return (
    <aside className="flex flex-col justify-between w-1/5 min-h-screen bg-gray-100 rounded-2xl p-4 mt-2 mb-2 ml-2">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Image
            src="/images/easylight-logo.svg"
            width={150}
            height={150}
            alt="EasyLight Logo"
          />
        </div>

        <div className="flex flex-col gap-1 mt-0 transform -translate-y-19">
          {mainLinks.map(({ href, label, icon }) => (
            <Link key={href} href={href}>
              <div className={linkClasses(href)}>
                <Image
                  src={icon}
                  width={20}
                  height={20}
                  alt={label}
                  className={isActive(href) ? "filter invert" : ""}
                />
                <span className="whitespace-nowrap">{label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {bottomLinks.map(({ href, label, icon }) => (
          <Link key={href} href={href}>
            <div className={linkClasses(href)}>
              <Image
                src={icon}
                width={20}
                height={20}
                alt={label}
                className={isActive(href) ? "filter invert" : ""}
              />
              <span className="whitespace-nowrap">{label}</span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
