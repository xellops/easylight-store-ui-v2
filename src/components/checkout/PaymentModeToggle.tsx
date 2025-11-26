export default function PaymentModeToggle({ payMode, setPayMode }: any) {
  const isOnce = payMode === "once";

  return (
    <div
      className="bg-gray-100 h-10 w-72 mt-6 rounded-2xl flex cursor-pointer p-1"
      onClick={() => setPayMode(isOnce ? "installments" : "once")}
    >
      <div
        className={`flex-1 flex justify-center items-center rounded-2xl text-sm ${
          isOnce ? "bg-green-800 text-white" : "text-gray-600"
        }`}
      >
        Pay Once
      </div>

      <div
        className={`flex-1 flex justify-center items-center rounded-2xl text-sm ${
          !isOnce ? "bg-green-800 text-white" : "text-gray-600"
        }`}
      >
        Buy in installments
      </div>
    </div>
  );
}
