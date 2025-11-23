"use client";
import CheckOutNav from "@/components/CheckOutNav/CheckOutNav";
import PaymentModeToggle from "@/components/checkout/PaymentModeToggle";
import PaymentFrequency from "@/components/checkout/PaymentFrequency";
import DeliveryType from "@/components/checkout/DeliveryType";
import ShippingInfo from "@/components/checkout/ShippingInfo";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import OrderSummary from "@/components/checkout/OrderSummary";
import { useState, useMemo, useCallback } from "react";

export default function Checkout() {
  const [payMode, setPayMode] = useState<"once" | "installments">(
    "installments"
  );
  const [frequency, setFrequency] = useState<"daily" | "weekly" | "monthly">(
    "weekly"
  );
  const [installments, setInstallments] = useState<number>(2);
  const [deliveryType, setDeliveryType] = useState<"pickup" | "door">("door");
  const [paymentMethod, setPaymentMethod] = useState<"wallet" | "card">(
    "wallet"
  );

  const subtotal = 463000;
  const deliveryFee = deliveryType === "door" ? 2000 : 0;
  const totalAmount = subtotal + deliveryFee;

  const installmentAmount = useMemo(
    () =>
      payMode === "once" ? totalAmount : Math.round(totalAmount / installments),
    [totalAmount, installments, payMode]
  );

  const handleCheckoutClick = useCallback(() => {
    const summary = {
      payMode,
      frequency: payMode === "installments" ? frequency : null,
      installments: payMode === "installments" ? installments : 1,
      amount: payMode === "once" ? totalAmount : installmentAmount,
      deliveryType,
      paymentMethod,
      total: totalAmount,
      items: [
        {
          name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
          price: 180000,
          image: "/images/SKYRUN.png",
          quantity: 1,
        },
        {
          name: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate",
          price: 180000,
          image: "/images/SKYRUN.png",
          quantity: 1,
        },
      ],
    };
    console.log("Checkout →", summary);
    alert(
      `Checkout ready: ₦${(payMode === "once"
        ? totalAmount
        : installmentAmount
      ).toLocaleString()} × ${payMode === "once" ? 1 : installments}`
    );
  }, [
    payMode,
    frequency,
    installments,
    installmentAmount,
    deliveryType,
    paymentMethod,
    totalAmount,
  ]);

  return (
    <div>
      <CheckOutNav />
      <div className="w-[80%] min-h-screen mx-auto">
        <div className="flex justify-between mt-4">
          <h1 className="font-sans font-bold text-2xl">Check Out</h1>
          <div className="font-sans text-sm flex items-center gap-1">
            continue shopping <span className="text-lg">&rarr;</span>
          </div>
        </div>
        <PaymentModeToggle payMode={payMode} setPayMode={setPayMode} />
        <div className="flex justify-between w-full mt-8">
          <div className="w-[68%] space-y-8">
            <PaymentFrequency
              frequency={frequency}
              setFrequency={setFrequency}
              installments={installments}
              setInstallments={setInstallments}
            />
            <DeliveryType
              deliveryType={deliveryType}
              setDeliveryType={setDeliveryType}
            />
            <ShippingInfo />
            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </div>
          <OrderSummary
            deliveryFee={deliveryFee}
            totalAmount={totalAmount}
            handleCheckoutClick={handleCheckoutClick}
          />
        </div>
      </div>
    </div>
  );
}
