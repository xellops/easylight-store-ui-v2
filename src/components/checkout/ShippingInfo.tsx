export default function ShippingInfo() {
  const user = {
    fullName: "Tochuckwu Praise Nwakasi",
    address: "21, Imole Avenue, Ajasa Command",
    state: "Lagos",
    city: "Ipaja",
    phone: "080748263836",
  };

  return (
    <div className="w-full rounded-2xl h-[340px] bg-gray-100 p-5">
      <div className="flex justify-between">
        <p className="font-sans text-md font-semibold">Shipping Info</p>
        <p className="font-sans text-md text-green-800 font-semibold">Change</p>
      </div>
      <div className="border border-gray-300 mt-4"></div>
      <div className="mt-3 flex flex-col justify-between w-[50%] h-[250px]">
        <div className="h-11 flex flex-col justify-between leading-tight">
          <p className="font-sans text-gray-500 text-sm leading-tight">
            FullName
          </p>
          <p className="text-[12px] font-semibold leading-tight">
            {user.fullName}
          </p>
        </div>
        <div className="h-11 flex flex-col justify-between leading-tight">
          <p className="font-sans text-gray-500 text-sm leading-tight">
            Address
          </p>
          <p className="text-[12px] font-semibold leading-tight">
            {user.address}
          </p>
        </div>
        <div className="h-11 flex flex-col justify-between leading-tight">
          <p className="font-sans text-gray-500 text-sm leading-tight">State</p>
          <p className="text-[12px] font-semibold leading-tight">
            {user.state}
          </p>
        </div>
        <div className="h-11 flex flex-col justify-between leading-tight">
          <p className="font-sans text-gray-500 text-sm leading-tight">City</p>
          <p className="text-[12px] font-semibold leading-tight">{user.city}</p>
        </div>
        <div className="h-11 flex flex-col justify-between leading-tight">
          <p className="font-sans text-gray-500 text-sm leading-tight">
            Number
          </p>
          <p className="text-[12px] font-semibold leading-tight">
            {user.phone}
          </p>
        </div>
      </div>
    </div>
  );
}
