export default function PaymentModeToggle({ payMode, setPayMode }: any) {
  return (
    <div
      className="bg-gray-100 w-70 h-10 mt-6 rounded-2xl flex justify-end items-center cursor-pointer"
      onClick={() => setPayMode(payMode === "once" ? "installments" : "once")}
    >
      <p className="mr-8 font-sans text-sm">Pay Once</p>
      <div className="bg-green-800 rounded-2xl h-8 px-4 mr-2 text-sm flex justify-center items-center text-white">
        Buy in installments
      </div>
    </div>
  );
}
