import { type FC } from 'react'
import type { TypePropsParallax } from '../../types/types'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'


const ParallaxScaleSmall: FC<TypePropsParallax> = ({ children, delay, duration }) => {
    // parallax
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })
    return (
        <div ref={ref} className={clsx(
            inView ? 'back-scale' : 'start-scale-small',
            duration ? duration : 'transition-1'
        )} style={{ animationDelay: `${delay ? delay : 0}ms` }}>
            {children}
        </div>
    )
}

export default ParallaxScaleSmall
