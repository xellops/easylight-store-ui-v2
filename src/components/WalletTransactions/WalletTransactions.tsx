import Image from "next/image";

export default function Transactions() {
  return (
    <div className="px-3 mt-4">
      <p className="text-gray-800 font-semibold mb-3">Withdraw Transactions</p>

      <div className="flex flex-col gap-3 w-full md:w-[70%] lg:w-[60%]">
        <div className="bg-gray-100 flex items-center px-3 py-3 rounded-lg">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-200 rounded-md flex justify-center items-center">
                <Image
                  src="/images/refund.png"
                  alt="refund"
                  width={18}
                  height={18}
                />
              </div>

              <div className="flex flex-col">
                <p className="font-bold text-sm">Refund</p>
                <p className="text-xs text-gray-600">4:30 AM</p>
              </div>
            </div>

            <p className="text-xs md:text-sm font-semibold text-green-600">
              + ₦20,000
            </p>
          </div>
        </div>

        <div className="bg-gray-100 flex items-center px-3 py-3 rounded-lg">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-200 rounded-md flex justify-center items-center">
                <Image
                  src="/images/deposit.png"
                  alt="deposit"
                  width={18}
                  height={18}
                />
              </div>

              <div className="flex flex-col">
                <p className="font-bold text-sm">Deposit</p>
                <p className="text-xs text-gray-600">4:30 AM</p>
              </div>
            </div>

            <p className="text-xs md:text-sm font-semibold text-green-600">
              + ₦20,000
            </p>
          </div>
        </div>

        <div className="bg-gray-100 flex items-center px-3 py-3 rounded-lg">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-200 rounded-md flex justify-center items-center">
                <Image
                  src="/images/withdraw.png"
                  alt="withdraw"
                  width={18}
                  height={18}
                />
              </div>

              <div className="flex flex-col">
                <p className="font-bold text-sm">Withdrawal</p>
                <p className="text-xs text-gray-600">4:30 AM</p>
              </div>
            </div>

            <p className="text-xs md:text-sm font-semibold text-red-600">
              - ₦20,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
