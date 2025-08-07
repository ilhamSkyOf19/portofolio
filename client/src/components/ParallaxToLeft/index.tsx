import { type FC } from 'react'
import type { TypePropsParallax } from '../../types/types'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'


const ParallaxToLeft: FC<TypePropsParallax> = ({ children, delay, duration }) => {
    // parallax
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })
    return (
        <div ref={ref} className={clsx(
            inView ? 'back-x' : 'start-to-left',
            delay ? `delay-[${delay}]` : '',
            duration ? duration : 'transition-1'
        )}>
            {children}
        </div>
    )
}

export default ParallaxToLeft
