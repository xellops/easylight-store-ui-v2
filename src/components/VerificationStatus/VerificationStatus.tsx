export default function VerificationStatus() {
  return (
    <div className="ml-3 mt-4">
      <h1 className="text-[18px] font-semibold">Verification Status</h1>

      <div className="h-75 mt-4 w-full flex justify-center items-center">
        <div className="flex flex-col items-center items-between h-full w-[30%]">
          <div className="bg-pink-100 w-30 h-30 rounded-full flex justify-center items-center">
            <img
              src="/images/id-not-verified.png"
              alt="Not Verified"
              className="w-16 h-16 object-contain"
            />
          </div>

          <div className="flex flex-col justify-center w-60 h-20 mt-3">
            <h3 className="font-semibold flex justify-center">
              Account Unverified
            </h3>
            <p className="text-[11px] tracking-tighter">
              Your Account has not been verified and you can’t make
              installmental purchases. Click the button below to begin your
              verification process.
            </p>
          </div>

          <div className="bg-green-800 mt-4 text-white w-35 h-10 flex justify-center items-center rounded-md text-[12px]">
            Verify Account
          </div>
        </div>
      </div>
    </div>
  );
}
