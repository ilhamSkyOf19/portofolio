import { type FC, type ReactNode, useState } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
    className?: string;
    threshold?: number;
    triggerOnce?: boolean;
    children: ReactNode;
};

const LazyElement: FC<Props> = ({
    className,
    threshold = 0.5,
    triggerOnce = true,
    children,
}) => {
    const { ref, inView } = useInView({ threshold, triggerOnce });
    const [loaded, setLoaded] = useState(false);

    if (inView && !loaded) {
        setLoaded(true);
    }

    return (
        <div
            ref={ref}
            className={`
        transition-all duration-700 ease-out
        transform
        ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
        ${className || ""}
      `}
        >
            {children}
        </div>
    );
};

export default LazyElement;
