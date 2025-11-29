import Transactions from "../WalletTransactions/WalletTransactions";
export default function WalletBalance() {
  return (
    <div>
      <h3 className="font-semibold ml-3 text-[18px] mt-3">Wallet</h3>

      <div className="flex  justify-between items-center  bg-green-800 rounded-2xl w-[63%] h-30 px-6 ml-3 mt-3">
        <div className="flex  flex-col justify-between  h-11 text-white">
          <p className="text-[11px]">Wallet Balance</p>
          <h4 className="font-semibold">₦ 180,560,600</h4>
        </div>
        <div className=" flex justify-between  w-[45%] h-11">
          <div className="h-11 w-[48%]  rounded-2xl flex text-[13px] bg-white text-green-800 justify-center items-center">
            Top-up wallet
          </div>

          <div className="h-11 w-[48%]  rounded-2xl flex text-[13px] text-white bg-green-700 justify-center items-center">
            Withdraw Funds
          </div>
        </div>
      </div>

      <Transactions />
    </div>
  );
}
