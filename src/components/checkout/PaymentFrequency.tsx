import { useRef } from "react";

type PaymentFrequencyProps = {
  frequency: "daily" | "weekly" | "monthly";
  setFrequency: (value: "daily" | "weekly" | "monthly") => void;
  installments: number;
  setInstallments: (value: number) => void;
};

export default function PaymentFrequency({
  frequency,
  setFrequency,
  installments,
  setInstallments,
}: PaymentFrequencyProps) {
  const selectRef = useRef<HTMLSelectElement | null>(null);

  const openSelect = () => {
    if (selectRef.current) selectRef.current.click();
  };

  return (
    <div className="w-full rounded-2xl bg-gray-100 p-4">
      <h3 className="font-sans font-semibold">Payment Frequency</h3>

      <div className="border border-gray-300 mt-2"></div>

      <p className="font-sans mt-3 capitalize tracking-tight text-sm">
        Select payment frequency
      </p>

      <div className="flex mt-3 gap-3">
        <div
          className={`w-16 h-8 flex justify-center items-center rounded-2xl font-sans text-sm cursor-pointer border ${
            frequency === "daily"
              ? "bg-green-800 text-white border-green-800"
              : "border-gray-300"
          }`}
          onClick={() => setFrequency("daily")}
        >
          Daily
        </div>

        <div
          className={`w-20 h-8 flex justify-center items-center rounded-2xl font-sans text-sm cursor-pointer border ${
            frequency === "weekly"
              ? "bg-green-800 text-white border-green-800"
              : "border-gray-300"
          }`}
          onClick={() => setFrequency("weekly")}
        >
          Weekly
        </div>

        <div
          className={`w-20 h-8 flex justify-center items-center rounded-2xl font-sans text-sm cursor-pointer border ${
            frequency === "monthly"
              ? "bg-green-800 text-white border-green-800"
              : "border-gray-300"
          }`}
          onClick={() => setFrequency("monthly")}
        >
          Monthly
        </div>
      </div>

      <p className="font-sans tracking-tight text-sm mt-3">
        Select Number Of Installments
      </p>

      <div
        className="relative bg-gray-300 mt-2 rounded-md w-full h-9 flex items-center px-3 text-sm font-sans cursor-pointer"
        onClick={openSelect}
      >
        <span>{installments}</span>

        <span className="absolute right-3 font-semibold">v</span>

        <select
          ref={selectRef}
          value={installments}
          onChange={(e) => setInstallments(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        >
          {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
