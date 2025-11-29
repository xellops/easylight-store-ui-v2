const orders = [
  {
    id: "#7290460893",
    title: "SKYRUN Gas Cooker 3-Gas 1-Hot Plate 50x50cm GCS-3G1E/X",
    progress: "20",
    next: "Next installment on Wednesday, November 12, 2025",
    status: "In Progress",
    statusColor: "#D97706",
    img: "/images/SKYRUN.png",
  },
  {
    id: "#3698521478",
    title: "SMARTBLEND Blender Pro 1200W with Recipe Book",
    progress: "100",
    next: "Next installment on Monday, January 15, 2026",
    status: "Completed",
    statusColor: "#D97706",
    img: "/images/SKYRUN.png",
  },
  {
    id: "#8452019321",
    title: "ECO-FRIED Air Fryer 5L Digital Touch Screen",
    progress: "20",
    next: "Next installment on Friday, December 5, 2025",
    status: "Pending Delivery",
    statusColor: "#D97706",
    img: "/images/SKYRUN.png",
  },
  {
    id: "#5647382910",
    title: "QUICKCOOK Electric Kettle 1.7L Stainless Steel",
    progress: "60",
    next: "Next installment on Thursday, February 20, 2026",
    status: "Cancelled",
    statusColor: "#DC2626",
    img: "/images/SKYRUN.png",
  },
  {
    id: "#9876543210",
    title: "MULTIFRY Deep Fryer 3.5L with Oil Filter",
    progress: "20",
    next: "Next installment on Tuesday, March 30, 2026",
    status: "Pending Delivery",
    statusColor: "#D97706",
    img: "/images/SKYRUN.png",
  },
];

export default function OrderHistory() {
  return (
    <div className="w-[63%] ml-3 mt-3 min-h-screen">
      <h3 className="font-semibold text-[18px]">Wallet</h3>

      <div className="mt-3 flex flex-col gap-3 w-full">
        {orders.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 flex justify-center items-center h-30 rounded-lg p-4"
          >
            <div className="flex justify-between h-20 w-full">
              <div className=" border border-gray-300 rounded-md h-20 w-[15%] flex justify-center items-center overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between h-20 w-[83%]">
                <div className="flex justify-between w-full h-7">
                  <div className="flex flex-col justify-between w-[90%] h-8">
                    <p className="text-[13px] font-semibold tracking-tightest">
                      {item.title}
                    </p>

                    <p className="text-[11px] text-gray-400">{item.id}</p>
                  </div>

                  <div className="bg-gray-100 w-[15%] rounded-md text-[10px] text-green-800 flex justify-center items-center h-8">
                    See details
                  </div>
                </div>

                {/* Progress Bar and Installment Info */}
                <div className="flex flex-col justify-between w-full h-8">
                  <div className="h-1 w-full flex rounded-full overflow-hidden">
                    <span
                      className="bg-green-800 h-full"
                      style={{ width: `${Number(item.progress)}%` }}
                    ></span>
                    <span
                      className="bg-gray-200 h-full"
                      style={{ width: `${100 - Number(item.progress)}%` }}
                    ></span>
                  </div>

                  <div className="flex justify-between ">
                    <p className="h-3 text-[10px] text-gray-700">{item.next}</p>

                    <p
                      className="text-[10px] font-semibold"
                      style={{ color: item.statusColor }}
                    >
                      {item.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
