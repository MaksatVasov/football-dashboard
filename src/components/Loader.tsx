import { CircleLoader } from "react-spinners";

export default function Loader({ loading = true, size = 60 }) {
    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-page/80 backdrop-blur-sm gap-4">
            <CircleLoader
                color="#5942AA"
                loading={loading}
                size={size}
                speedMultiplier={1}
            />
        </div>
    );
}