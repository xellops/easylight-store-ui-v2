export default function CategorySection() {
  const categories = [
    { label: "All Products" },
    { label: "Electronics" },
    { label: "Home Appliances" },
    { label: "Kitchen Gadgets" },
    { label: "Cleaning Equipments" },
    { label: "Smart Home Devices" },
    { label: "Heating & Cooling Systems" },
    { label: "Laundry Appliances" },
  ];

  return (
    <div className="hidden sm:flex w-full gap-2 mt-6 p-4 justify-center overflow-hidden">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`flex-1 min-w-fit px-1 py-1 rounded-2xl font-sans text-sm text-center ml-2
            ${
              index === 0
                ? "border border-green-700 bg-green-100 text-green-700"
                : "border border-gray-700 bg-gray-100 text-gray-700"
            }`}
        >
          {category.label}
        </div>
      ))}
    </div>
  );
}
