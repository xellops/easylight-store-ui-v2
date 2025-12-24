"use client";

import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import OfferCard from "@/components/OfferCard/OfferCard";
import CategoryFilter from "@/components/CategorySection/CategorySection";
import PopularProducts from "@/components/PopularProducts/PopularProducts";
import Main from "@/components/Main/Main";
import Link from "next/link";

export default function Homepage() {
  const offers = [
    {
      id: 1,
      gradient: "from-[#8CBF22] via-[#00612E] to-[#006161]",
      buttonGradient:
        "bg-gradient-to-r from-[#8CBF22] via-[#00612E] to-[#006161]",
      title: "MacBook Pro 16",
      text: "Buy now, pay later — flexible plans from ₦5,000/month",
      imageSrc: "/images/macbook.png",
      imgAlt: "MacBook Pro 16",
    },
    {
      id: 2,
      gradient: "from-[#7C3AED] via-[#9333EA] to-[#4338CA]",
      buttonGradient:
        "bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#4338CA]",
      title: "MacBook Pro 16",
      text: "Buy now, pay later — flexible plans from ₦5,000/month",
      imageSrc: "/images/macbook.png",
      imgAlt: "MacBook Pro 16",
    },
    {
      id: 3,
      gradient: "from-[#7C3AED] via-[#9333EA] to-[#4338CA]",
      buttonGradient:
        "bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#4338CA]",
      title: "MacBook Pro 16",
      text: "Buy now, pay later — flexible plans from ₦5,000/month",
      imageSrc: "/images/macbook.png",
      imgAlt: "MacBook Pro 16",
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen lg:flex-row">
      <Sidebar />

      <Main>
        <Navbar />

        <section className="w-full p-4">
          <h2 className="font-bold text-base sm:text-lg mb-3">
            Special Offers
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </section>

        <section className="w-full p-4">
          <CategoryFilter />
        </section>

        <section className="w-full p-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-bold -translate-y-9 sm:translate-y-0 text-base sm:text-lg">
              Popular Products
            </h1>

            <Link href="/all-products">
              <span className="flex items-center gap-1 text-green-600 text-sm font-semibold cursor-pointer">
                See All <span className="text-xl">→</span>
              </span>
            </Link>
          </div>

          <PopularProducts />
        </section>
      </Main>
    </div>
  );
}
