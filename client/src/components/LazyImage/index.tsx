import { useState, type FC } from 'react'
import { useInView } from 'react-intersection-observer'


// type props 
type Props = {
    src: string;
    alt: string;
    className?: string;
}

const LazyImage: FC<Props> = ({ src, alt, className }) => {
    // ref
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 1,
    })

    // loaded
    const [loaded, setLoaded] = useState<boolean>(false);
    return (
        <div ref={ref} className='overflow-hidden'>
            {
                inView && (
                    <img
                        src={src}
                        alt={alt}
                        onLoad={() => setLoaded(true)}
                        className={`transition-opacity duration-700 ease-in-out ${loaded ? "opacity-100" : "opacity-0"} ${className || ""}`}
                    />
                )
            }
        </div>


    )
}

export default LazyImage
