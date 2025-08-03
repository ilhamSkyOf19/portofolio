import { useEffect, useRef, useState } from "react";

export const useButtonHref = (type: 'div' | 'a') => {
    const [mouseDown, setMouseDown] = useState<boolean>(false);

    // type res
    const buttonRef =
        type === "div"
            ? useRef<HTMLDivElement>(null)
            : useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        // handle mouse down 
        const handleMouseDown = (event: MouseEvent) => {
            if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
                setMouseDown(true);
            } else if (!buttonRef.current?.contains(event.target as Node)) {
                setMouseDown(false);
            }
        }

        document.addEventListener("mousedown", handleMouseDown);
        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, [buttonRef])

    return { buttonRef, mouseDown, setMouseDown };
}