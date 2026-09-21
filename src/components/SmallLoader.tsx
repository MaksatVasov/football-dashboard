import { CircleLoader } from "react-spinners";

export default function SmallLoader({ loading = true, size = 60 }) {
    return (
        <div className="w-full max-w-[419.2px] flex justify-center items-center lg:grow lg:basis-0 rounded-3xl border border-gray-100/80 shadow-sm min-h-105 bg-[rgba(0,0,0,0.01)]">
            <CircleLoader
                color="#5942AA"
                loading={loading}
                size={size}
                speedMultiplier={1}
            />
        </div>
    );
}