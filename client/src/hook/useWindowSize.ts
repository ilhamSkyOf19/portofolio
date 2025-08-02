import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "laptop" | "desktop";
type Size = {
    width: number;
    height: number;
    device: DeviceType;
}


// get device
function getDeviceType(width: number): DeviceType {
    if (width < 768) return "mobile";
    if (width < 1024) return "tablet";
    if (width < 1280) return "laptop";
    return "desktop";
}


// use window size 
export const useWindowSize = (): Size => {
    // state size 
    const [size, setSize] = useState<Size>({
        width: 0,
        height: 0,
        device: "mobile" as DeviceType
    });

    // handle size 
    useEffect(() => {
        const handleSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setSize({
                width,
                height,
                device: getDeviceType(width)
            })
        }

        // call handleSize
        handleSize()

        window.addEventListener("resize", handleSize);
        return () => {
            window.removeEventListener("resize", handleSize);
        }
    }, []);

    return size;
}


