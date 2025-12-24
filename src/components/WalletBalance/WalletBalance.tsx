import Transactions from "../WalletTransactions/WalletTransactions";

export default function WalletBalance() {
  return (
    <div className="px-3 mt-4">
      <h3 className="font-semibold text-lg mb-3">Wallet</h3>

      <div
        className="
        bg-green-800 rounded-2xl 
        w-full 
        md:w-[80%] 
        lg:w-[65%]
        p-4
      "
      >
        <div
          className="
          flex flex-col gap-4
          md:flex-row md:items-center md:justify-between
        "
        >
          <div className="text-white">
            <p className="text-xs">Wallet Balance</p>
            <h4 className="font-semibold text-lg md:text-xl">₦180,560,600</h4>
          </div>

          <div
            className="
            flex flex-col gap-3
            md:flex-row md:gap-4
          "
          >
            <button
              className="
              h-11 px-4 rounded-2xl 
              bg-white text-green-800 
              text-sm font-medium
            "
            >
              Top-up wallet
            </button>

            <button
              className="
              h-11 px-4 rounded-2xl 
              bg-green-700 text-white 
              text-sm font-medium
            "
            >
              Withdraw Funds
            </button>
          </div>
        </div>
      </div>

      <Transactions />
    </div>
  );
}
