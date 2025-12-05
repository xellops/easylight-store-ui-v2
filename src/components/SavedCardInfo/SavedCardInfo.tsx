export default function SavedCardInfo() {
  const cards = [
    {
      number: "*** **** ***** 1837",
      name: "Ola Emma Ebuka",
      logo: "/images/visalogo.png",
      expiry: "12/28",
    },
    {
      number: "*** **** ***** 1837",
      name: "Ola Emma Ebuka",
      logo: "/images/visalogo.png",
      expiry: "12/28",
    },
    {
      number: "*** **** ***** 1837",
      name: "Ola Emma Ebuka",
      logo: "/images/visalogo.png",
      expiry: "12/28",
    },
  ];

  return (
    <div className="flex flex-col w-276 ml-3">
      <h1 className="font-bold text-[18px] mt-3">Saved Cards</h1>
      <div className="mt-3 flex w-276 h-35 justify-between">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[31%] h-35 px-2 py-3 flex justify-center items-center rounded-2xl bg-gray-100"
          >
            <div className="w-[93%] h-[93%]">
              <div className="flex flex-col justify-between items-center w-full h-full">
                <div className="w-full h-7 flex justify-between">
                  <div className="flex flex-col justify-between">
                    <p className="text-[11px]">{card.number}</p>
                    <p className="text-[9px] text-gray-500">{card.name}</p>
                  </div>

                  <div className="bg-pink-100 rounded-full w-6 h-6 flex items-center justify-center">
                    <img
                      src="/images/remove-circle.png"
                      alt="Remove"
                      className="w-4 h-4"
                    />
                  </div>
                </div>

                <div className="w-full h-7 flex justify-between items-center">
                  <div className="w-[20%] h-7">
                    <img
                      src={card.logo}
                      alt="Card Logo"
                      className="h-5 w-full object-cover object-center"
                    />
                  </div>
                  <p className="text-[14px] text-gray-400">{card.expiry}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
