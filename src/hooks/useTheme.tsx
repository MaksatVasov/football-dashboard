import { useEffect, useState } from "react";

export default function useTheme() {
    const [isDark, setIsDark] = useState(() =>
        document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        try {
            localStorage.setItem("theme", isDark ? "dark" : "light");
        } catch {
            
        }
    }, [isDark]);

    return { isDark, toggle: () => setIsDark((d) => !d) };
}