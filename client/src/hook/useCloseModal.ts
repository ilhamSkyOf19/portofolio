import { useEffect } from "react";

export const useCloseModal = (
    refContainer: React.RefObject<HTMLDivElement>,
    active: boolean
) => {
    useEffect(() => {
        const node = refContainer.current;
        if (!node) return;

        const handleAnimatedEnd = () => {
            // Hanya sembunyikan setelah animasi selesai
            if (!active) {
                node.style.display = "none";
                node.classList.remove("animate-fade-hidden");
            }
        };

        node.addEventListener("animationend", handleAnimatedEnd);

        if (active) {
            // Modal dibuka → tampil normal
            node.style.display = "flex"; // atau block sesuai layout
            node.classList.remove("animate-fade-hidden");
        } else {
            // Modal ditutup → jalankan fade-out
            node.classList.add("animate-fade-hidden");
        }

        return () => node.removeEventListener("animationend", handleAnimatedEnd);
    }, [refContainer, active]);
};
