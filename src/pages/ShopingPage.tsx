import { useState } from "react";
import { ArrowLeft, ShieldCheck, Truck, MessageCircle } from "lucide-react";

import { SHOP_ITEMS } from "../data/shopItems";
import { useNavigate, useParams } from "react-router-dom";

const SIZES = ["S", "M", "L", "XL", "XXL"];

export default function CheckoutPage() {
    const [selectedSize, setSelectedSize] = useState("M");
    const { id } = useParams<{id: string}>();

    const navigate = useNavigate();

    const item = SHOP_ITEMS.find((kit) => String(kit.id) === id) ?? SHOP_ITEMS[0];

    const handleOrder = () => {
        const messageLines = [
            "Hi! I would like to order:",
            "",
            `Item: ${item?.name},`,
            `Size: ${selectedSize},`,
            `Price: ${item?.price},`,
            "",
            "Please confirm availability."
        ];

        const message = messageLines.join("\n");

        const url = `https://api.whatsapp.com/send?phone=971501234567&text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="w-full p-6 bg-white shadow-sm border border-gray-100/80 rounded-3xl lg:p-10 animate-in fade-in duration-300">
            <div className="flex items-center gap-4 mb-8">
                <button onClick={() => navigate(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/70 hover:bg-gray-50 transition-colors">
                    <ArrowLeft className="h-5 w-5 text-gray-700" />
                </button>
                <h1 className="text-xl font-bold text-gray-900">Checkout</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="flex flex-col gap-6">
                    <div className="w-full aspect-square bg-[#F8F9FA] rounded-4xl flex items-center justify-center p-8 border border-gray-50 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-linear-to-tr from-gray-100 to-transparent opacity-50"></div>
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-110 relative z-10"
                        />
                    </div>
                </div>

                <div className="flex flex-col pt-2 max-w-md">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full w-fit mb-4">
                        In Stock
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2 leading-tight">{item.name}</h2>
                    <p className="text-3xl font-black text-[#5942AA] mb-8">{item.price}</p>

                    <div className="mb-10">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-bold text-gray-900">Select Size</span>
                        </div>
                        <div className="flex gap-3">
                            {SIZES.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`h-14 flex-1 rounded-xl text-base font-bold border transition-all active:scale-95 ${selectedSize === size
                                        ? "border-[#5942AA] bg-[#5942AA] text-white shadow-md shadow-purple-500/20"
                                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mb-10">
                        <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                            <div className="bg-white p-2 rounded-full shadow-sm">
                                <Truck className="h-5 w-5 text-[#5942AA]" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">Free Delivery</p>
                                <p className="text-xs text-gray-500">2-4 working days worldwide</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                            <div className="bg-white p-2 rounded-full shadow-sm">
                                <ShieldCheck className="h-5 w-5 text-[#5942AA]" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">Secure Payment</p>
                                <p className="text-xs text-gray-500">Upon receiving the order</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleOrder}
                        className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-500/20"
                    >
                        <MessageCircle className="h-6 w-6" />
                        Order via WhatsApp
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4">
                        No registration required
                    </p>
                </div>
            </div>
        </div>
    );
}