import clsx from 'clsx';
import { type FC } from 'react'

type Props = {
    ref: (node?: Element | null) => void; // callback ref
    inView: boolean;
    children: React.ReactNode;
    duration?: 'transition-500' | 'transition-700'
}
const ParallaxToTop: FC<Props> = ({ ref, inView, children, duration }) => {
    return (
        <div ref={ref} className={clsx(
            inView ? 'back-y' : 'start-to-top',
            duration ? duration : 'transition-1'
        )}>
            {children}
        </div>
    )
}

export default ParallaxToTop
