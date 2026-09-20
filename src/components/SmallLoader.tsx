import { CircleLoader } from "react-spinners";

export default function SmallLoader({ loading = true, size = 60 }) {

    return (
        <div className="w-full h-full">
            <CircleLoader
                color="#5942AA"
                loading={loading}
                size={size}
                speedMultiplier={1}
            />
        </div>
    )

}