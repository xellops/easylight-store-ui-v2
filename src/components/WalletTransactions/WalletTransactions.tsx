import Image from "next/image";

export default function Transactions() {
  return (
    <div>
      <p className="ml-3  mt-3 text-gray-800">Withdraw Transactions</p>
      <div className="flex flex-col justify-between h-50 w-[63%] ml-3 mt-3">
        <div className="bg-gray-100 flex juustify-center items-center px-3 h-15 w-full rounded-lg">
          <div className="flex justify-between items-center  w-full h-10">
            <div className=" flex justify-between h-10 w-30">
              <div className="w-[30%] bg-gray-200 rounded-md flex justify-center items-center">
                <Image
                  src="/images/refund.png"
                  alt="refund"
                  width={18}
                  height={18}
                />
              </div>

              <div className="flex flex-col w-[70%] justify-between mr-1 items-center ">
                <p className=" font-black text-[13px]"> Refund</p>
                <p className="text-[13px]">4:30 AM</p>
              </div>
            </div>

            <p className="text-[11px] font-semibold">+ ₦ 20,000</p>
          </div>
        </div>

        <div className="bg-gray-100 flex juustify-center items-center px-3 h-15 w-full rounded-lg">
          <div className="flex justify-between items-center  w-full h-10">
            <div className=" flex justify-between h-10 w-30">
              <div className="w-[30%] bg-gray-200 rounded-md flex justify-center items-center">
                <Image
                  src="/images/deposit.png"
                  alt="deposit"
                  width={18}
                  height={18}
                />
              </div>

              <div className="flex flex-col w-[70%] justify-between mr-1 items-center ">
                <p className="font-black text-[13px]">Deposit</p>
                <p className="text-[13px]">4:30 AM</p>
              </div>
            </div>

            <p className="text-[11px] font-semibold">+ ₦ 20,000</p>
          </div>
        </div>

        <div className="bg-gray-100 flex juustify-center items-center px-3 h-15 w-full rounded-lg">
          <div className="flex justify-between items-center  w-full h-10">
            <div className=" flex justify-between h-10 w-30">
              <div className="w-[30%] bg-gray-200 rounded-md flex justify-center items-center">
                <Image
                  src="/images/withdraw.png"
                  alt="withdraw"
                  width={18}
                  height={18}
                />
              </div>

              <div className="flex flex-col w-[70%] justify-between mr-1 items-center ">
                <p className="font-black text-[13px] translate-x-3 ">
                  Withdrawal
                </p>
                <p className="text-[13px]">4:30 AM</p>
              </div>
            </div>

            <p className="text-[11px] font-semibold">- ₦ 20,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
