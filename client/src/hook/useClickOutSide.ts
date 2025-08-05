import { useEffect, useRef, useState, type RefObject } from "react";

export const useClickOutSide = (cardRef: RefObject<HTMLDivElement>) => {
    // state
    const [active, setActive] = useState<boolean>(false);
    // ref
    const ref = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleClickOutSide = (event: MouseEvent) => {
            // jika klik di luar kedua ref
            if (
                (!ref.current || !ref.current.contains(event.target as Node)) &&
                (!cardRef.current || !cardRef.current.contains(event.target as Node))
            ) {
                setActive(false);
            }
        }

        document.addEventListener("click", handleClickOutSide);
        return () => {
            document.removeEventListener("click", handleClickOutSide);
        };
    }, [cardRef, ref])

    return { ref, active, setActive };
}