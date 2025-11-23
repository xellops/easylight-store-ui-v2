export default function DeliveryType({ deliveryType, setDeliveryType }: any) {
  return (
    <div className="w-full rounded-2xl bg-gray-100 p-5">
      <div className="flex justify-between">
        <p className="font-sans text-md font-semibold">Type of Delivery</p>
        <p className="font-sans text-md text-green-800 font-semibold">Change</p>
      </div>
      <div className="border border-gray-300 mt-4"></div>
      <div className="flex justify-between mt-6">
        <div
          className={`border ${
            deliveryType === "pickup" ? "border-green-800" : "border-gray-300"
          } w-[48%] rounded-md p-4 relative cursor-pointer transition-all`}
          onClick={() => setDeliveryType("pickup")}
        >
          <div
            className={`absolute top-4 left-5 h-4 w-4 rounded-full border ${
              deliveryType === "pickup"
                ? "bg-green-800 border-green-800"
                : "border-gray-400"
            }`}
          ></div>
          <div className="mt-8 ml-2">
            <h3 className="font-sans font-semibold text-sm">Pick up</h3>
            <p className="font-sans text-[11px] tracking-tight text-gray-500 leading-tight">
              Block G, shop 309, Alaba Suru Market Phase 1, Beside Fidelity
              Bank. Alaba Ore, Lagos State.
            </p>
          </div>
        </div>
        <div
          className={`border ${
            deliveryType === "door" ? "border-green-800" : "border-gray-300"
          } w-[48%] rounded-md p-4 relative cursor-pointer transition-all`}
          onClick={() => setDeliveryType("door")}
        >
          <div
            className={`absolute top-4 left-5 h-4 w-4 rounded-full ${
              deliveryType === "door"
                ? "bg-green-800"
                : "border border-gray-400"
            }`}
          ></div>
          <div className="mt-8 ml-2">
            <h3 className="font-sans font-semibold text-sm">Door Delivery</h3>
            <p className="font-sans text-[11px] tracking-tight text-gray-500 leading-tight">
              Delivery between 6th October and 29th October.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
