export default function PaymentMethod({
  paymentMethod,
  setPaymentMethod,
}: any) {
  return (
    <div className="w-full rounded-2xl h-42 bg-gray-100 p-5">
      <p className="font-sans text-md font-semibold">Payment Method</p>
      <div className="border border-gray-300 mt-4"></div>
      <div className="flex justify-between items-center h-20 mt-3">
        <div
          className={`border ${
            paymentMethod === "wallet" ? "border-green-800" : "border-gray-500"
          } flex relative w-[48%] h-15 rounded-2xl cursor-pointer transition-all`}
          onClick={() => setPaymentMethod("wallet")}
        >
          <div
            className={`h-4 w-4 rounded-full absolute top-5 left-3 ${
              paymentMethod === "wallet"
                ? "bg-green-700"
                : "border border-gray-500"
            }`}
          ></div>
          <div className="absolute left-10 top-3 font-sans text-sm">
            <p className="font-sans text-[11px]">
              Pay from wallet balance <br />
              ₦5,270,632.00
            </p>
          </div>
        </div>
        <div
          className={`border ${
            paymentMethod === "card" ? "border-green-800" : "border-gray-500"
          } w-[48%] h-15 rounded-2xl flex relative cursor-pointer transition-all`}
          onClick={() => setPaymentMethod("card")}
        >
          <div
            className={`h-4 w-4 rounded-full absolute top-5 left-3 ${
              paymentMethod === "card"
                ? "bg-green-700"
                : "border border-gray-500"
            }`}
          ></div>
          <div className="absolute left-10 top-3 font-sans text-sm">
            <p className="font-sans text-[13px] font-semibold">
              Pay with Cards Bank Transfer or Usd <br />
              <p className="font-sans text-[11px] text-gray-400">
                Make a secured payment with paystack
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
