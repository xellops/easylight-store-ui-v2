import Link from "next/link";
import Image from "next/image";

export const products = [
  {
    id: 1,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month × 12",
    image: "/images/SKYRUN.PNG",
  },
  {
    id: 2,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month × 12",
    image: "/images/SKYRUN.PNG",
  },
  {
    id: 3,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month × 12",
    image: "/images/SKYRUN.PNG",
  },

  {
    id: 4,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month × 12",
    image: "/images/SKYRUN.PNG",
  },

  {
    id: 5,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month × 12",
    image: "/images/SKYRUN.PNG",
  },

  {
    id: 6,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month × 12",
    image: "/images/SKYRUN.PNG",
  },

  {
    id: 7,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month × 12",
    image: "/images/SKYRUN.PNG",
  },

  {
    id: 8,
    name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
    model: "50x50cm GCS-3G1E/X",
    brand: "Samsung",
    price: "₦180,000",
    installment: "₦15,000/month × 12",
    image: "/images/SKYRUN.PNG",
  },
];

export default function PopularProducts() {
  return (
    <section className="flex flex-col ml-3 w-[69rem]">
      {/* <div className="flex justify-between items-center">
        <h1 className="font-bold font-sans text-black">Popular Products</h1>
        <Link href="/all-products">
          <span className="text-green-600 font-sans flex items-center gap-2 cursor-pointer text-sm font-semibold">
            See All <span className="text-3xl">→</span>
          </span>
        </Link>
      </div> */}

      <div className="flex flex-wrap gap-6 mt-4  ">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col  h-80 gap-3 bg-gray-100 rounded-2xl"
          >
            <div className="w-48 h-36 mx-auto relative overflow-hidden mt-2">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
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
              <div className="bg-green-800 text-white text-center  h-10 w-48 mt-4 mx-auto rounded-md flex items-center justify-center">
                <p className="text-sm">Add to Cart</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
