import { useEffect, useState } from "react";

export const useScrollTriggerOnce = (start: number) => {
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking && !trigger) { // kalau sudah true, abaikan scroll berikutnya
                requestAnimationFrame(() => {
                    const y = window.scrollY;
                    if (y >= start) {
                        setTrigger(true); // hanya set sekali
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        handleScroll(); // initial
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [start, trigger]);

    return trigger;
};
