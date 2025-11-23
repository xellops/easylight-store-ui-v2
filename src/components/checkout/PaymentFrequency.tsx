export default function PaymentFrequency({
  frequency,
  setFrequency,
  installments,
  setInstallments,
}: any) {
  return (
    <div className="w-full rounded-2xl bg-gray-100 p-4">
      <h3 className="font-sans font-semibold">Payment Frequency</h3>
      <div className="border border-gray-300 mt-2"></div>
      <p className="font-sans mt-3 capitalize tracking-tight text-sm">
        Select payment frequency
      </p>
      <div className="flex mt-3 gap-3">
        <div
          className="border border-gray-300 w-16 h-8 flex justify-center items-center rounded-2xl font-sans text-sm cursor-pointer"
          onClick={() => setFrequency("daily")}
        >
          Daily
        </div>
        <div className="bg-green-800 text-white w-20 h-8 flex justify-center items-center rounded-2xl font-sans text-sm">
          Weekly
        </div>
        <div
          className="border border-gray-300 w-20 h-8 flex justify-center items-center rounded-2xl font-sans text-sm cursor-pointer"
          onClick={() => setFrequency("monthly")}
        >
          Monthly
        </div>
      </div>
      <p className="font-sans tracking-tight text-sm mt-3">
        Select Number Of Installments
      </p>
      <div className="bg-gray-300 mt-2 rounded-md w-full h-9 flex justify-between items-center px-3 text-sm font-sans">
        <p>{installments}</p>
        <select
          value={installments}
          onChange={(e) => setInstallments(Number(e.target.value))}
          className="bg-transparent outline-none cursor-pointer w-full text-right"
          style={{ appearance: "none" }}
        >
          {[2, 3, 4, 5, 6, 8, 10, 12].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
