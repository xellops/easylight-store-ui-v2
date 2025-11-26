import Image from "next/image";
import Link from "next/link";
import { Wallet } from "lucide-react";

export default function CheckOutNav() {
  return (
    <div className="bg-green-800 h-14">
      <div className="flex w-[80%] mx-auto justify-between items-center h-full">
        <Link href="/">
          <div className="flex items-center text-white">
            <Image
              src="/images/esaylight-logo.svg"
              alt="Easaylight Logo"
              width={100}
              height={36}
              className="h-6 w-auto mr-3"
            />
            <h2 className="text-md font-bold tracking-wider">EASYLIGHT</h2>
          </div>
        </Link>

        <div className="bg-green-600  h-9 px-4 flex items-center gap-2 rounded-lg text-white font-md">
          <Wallet className="w-5 h-5" />
          <span className="tracking-wider">₦5,270,632.00</span>
        </div>
      </div>
    </div>
  );
}
