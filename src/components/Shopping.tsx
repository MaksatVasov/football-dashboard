import chelseaKit from "../assets/images/mainPage/chelsea-kit.png";

const SHOP_ITEMS = [
  { id: 1, name: "Chelsea Home Kit 21 / 22", price: "$150.10" },
  { id: 2, name: "West Ham Home Kit 21 / 22", price: "$120.00" },
  { id: 3, name: "Man City Away Kit 21/22", price: "$150.45" },
  { id: 4, name: "Arsenal Away Kit 21/22", price: "$140.11" },
];

export function Shopping() {
  return (
    <div className="w-full pt-8 mb-12 border-[#EFEFEF] border-t-[3px]">
      <div className="flex items-center gap-2 mb-4 px-2">
        <span className="text-lg">👕</span>
        <h2 className="text-[15px] font-bold text-gray-900">Shopping</h2>
      </div>

      <div className="flex overflow-x-auto gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none px-2 pb-2">
        {SHOP_ITEMS.map((item) => (
          <div key={item.id} className="flex flex-col gap-3 shrink-0 w-45 cursor-pointer group">
            <div className="w-full h-50 bg-[#F8F9FA] rounded-2xl flex items-center justify-center p-4 transition-colors group-hover:bg-gray-100">
              <img src={chelseaKit} alt={item.name} className="w-full h-full object-contain drop-shadow-sm" />
            </div>
            <div className="flex flex-col px-1">
              <span className="text-[13px] font-semibold text-gray-900 mb-1">{item.name}</span>
              <span className="text-[13px] font-bold text-[#5942AA]">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}