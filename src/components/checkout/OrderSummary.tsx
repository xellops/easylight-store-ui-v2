export default function OrderSummary({
  deliveryFee,
  totalAmount,
  handleCheckoutClick,
}: any) {
  return (
    <div className="w-[30%] rounded-2xl h-130 bg-gray-100 p-4">
      <h3 className="font-sans font-semibold">Summary</h3>
      <div className="w-[90%] mx-auto mt-3 p-3 rounded-md">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between h-18">
            <div className="bg-white h-16 w-[20%] flex items-center justify-center">
              <img
                src="/images/SKYRUN.png"
                alt="SKYRUN"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-[75%]">
              <p className="font-sans text-[14px] tracking-tight text-gray-700 leading-tight">
                SKYRUN Gas Cooker 3-Gas 1-Hot Plate
              </p>
              <p className="mt-2">₦180,000</p>
            </div>
          </div>
          <div className="flex justify-between h-18">
            <div className="border-gray-300 bg-white h-16 w-[20%] flex items-center justify-center">
              <img
                src="/images/SKYRUN.png"
                alt="SKYRUN"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-[75%]">
              <p className="font-sans text-[14px] tracking-tight text-gray-700 leading-tight">
                SKYRUN Gas Cooker 3-Gas 1-Hot Plate
              </p>
              <p className="mt-2">₦180,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[98%] mt-2 mx-auto h-20 justify-between">
        <div className="flex justify-between h-5">
          <p className="text-gray-500 text-[15px]">Subtotal</p>
          <h3 className="text-[15px] font-sans font-semibold">₦463,000</h3>
        </div>
        <div className="flex justify-between h-5">
          <p className="text-gray-500 text-[15px]">Delivery Fee</p>
          <h3 className="text-[15px] font-sans font-semibold">
            ₦{deliveryFee.toLocaleString()}
          </h3>
        </div>
        <div className="flex justify-between h-5">
          <p className="text-gray-500 text-[15px]">Total</p>
          <h3 className="text-[15px] font-sans font-semibold">
            ₦{totalAmount.toLocaleString()}
          </h3>
        </div>
      </div>
      <div
        className="border mt-3 h-11 bg-green-800 text-white rounded-md flex items-center justify-center font-sans text-sm cursor-pointer hover:bg-green-900 transition-all"
        onClick={handleCheckoutClick}
      >
        Checkout
      </div>
      <p className="font-sans text-[11px] font-semibold mt-1">We accept</p>
      <div className="flex justify-between w-[80%] h-8 mt-2">
        <div className="flex items-center justify-center h-8 w-[20%]">
          <img
            src="/images/visa.png"
            alt="Visa"
            className="h-full object-contain"
          />
        </div>
        <div className="flex items-center justify-center h-8 w-[20%]">
          <img
            src="/images/verve.png"
            alt="Verve"
            className="h-full object-contain"
          />
        </div>
        <div className="flex items-center justify-center h-8 w-[50%]">
          <img
            src="/images/mastercard.png"
            alt="Mastercard"
            className="h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
