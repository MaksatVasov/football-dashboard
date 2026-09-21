import { DataContext } from "../contexts/DataContext";
import useRequiredContext from "../hooks/useRequiredContext";
import { useEffect, useRef } from "react";


export default function RateLimitModal() {

    const { isRateLimited, setIsRateLimited } = useRequiredContext(DataContext);
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() =>{

        if(isRateLimited){
            dialogRef.current?.showModal();
        }else{
            dialogRef.current?.close();
        }

    }, [isRateLimited]);
    
    if (isRateLimited) {
        return (
            <dialog
                ref={dialogRef}
                onClose={() => setIsRateLimited(false)}
                className="
                m-auto p-8 rounded-3xl max-w-sm w-full 
              bg-surface shadow-2xl text-center text-fg
              backdrop:bg-black/60 backdrop:backdrop-blur-sm
                open:animate-in open:fade-in open:zoom-in-95 open:duration-200"
            >
                <div className="w-16 h-16 bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl">
                    ⚠️
                </div>

                <h2 className="text-2xl font-bold text-fg mb-2">
                    API Limit Reached
                </h2>

                <p className="text-muted text-sm mb-6 leading-relaxed">
                    Daily free limit of 100 requests exceeded. <br />
                    Data will reset at 04:00 GST.
                </p>

                <div className="flex justify-center">
                    <button
                    onClick={() => setIsRateLimited(false)}
                        type="button"
                        className="
                        w-full bg-accent hover:opacity-90 active:scale-[0.98] 
                      text-on-accent font-semibold py-3 px-6 rounded-xl 
                        transition-all shadow-md"
                    >
                        OK
                    </button>
                </div>
            </dialog>
        );
    } else {
        return null;
    }

}