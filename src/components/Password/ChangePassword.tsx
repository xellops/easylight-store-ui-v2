import Image from "next/image";

export default function ChangePassword() {
  return (
    <div>
      <p className="text-[13px] text-gray-400 mt-4">Change Password</p>

      <div className="flex flex-col justify-between gap-1 items-center w-75 h-30 mt-3">
        <div className="w-full h-[27%] rounded-md bg-gray-100 flex justify-between items-center p-3">
          <p className="text-[11px] tracking-tight">Enter Current Password</p>

          <Image
            src="/images/view-off.png"
            alt="Hide password"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>

        <div className="w-full h-[27%] rounded-md bg-gray-100 flex justify-between items-center p-3">
          <p className="text-[11px] tracking-tight">Enter New Password</p>

          <Image
            src="/images/view-off.png"
            alt="Hide password"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>

        <div className="w-full h-[27%] rounded-md bg-gray-100 flex justify-between items-center p-3">
          <p className="text-[11px] tracking-tight">Confirm New Password</p>

          <Image
            src="/images/view-off.png"
            alt="Hide password"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
