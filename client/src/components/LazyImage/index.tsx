import clsx from 'clsx';
import { useState, type FC } from 'react'
import { useInView } from 'react-intersection-observer'


// type props 
type Props = {
    src: string;
    alt: string;
    className?: string;
    paddingActive?: boolean
}

const LazyImage: FC<Props> = ({ src, alt, className, paddingActive }) => {
    // ref
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    // loaded
    const [loaded, setLoaded] = useState<boolean>(false);
    return (
        <div ref={ref} className={clsx(
            'overflow-hidden',
            paddingActive ? 'p-3' : '',
        )}>
            {
                inView && (
                    <img
                        src={src}
                        alt={alt}
                        onLoad={() => setLoaded(true)}
                        className={`transition-all duration-700 ease-in-out ${loaded ? "opacity-100" : "opacity-0"} ${className || ""}`}
                    />
                )
            }
        </div>


    )
}

export default LazyImage
