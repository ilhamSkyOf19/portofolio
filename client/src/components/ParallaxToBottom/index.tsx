import { type FC } from 'react'

type Props = {
    ref: (node?: Element | null) => void; // callback ref
    inView: boolean;
    children: React.ReactNode
}
const ParallaxToBottom: FC<Props> = ({ ref, inView, children }) => {
    return (
        <div ref={ref} className={`transition-1 ${inView ? 'back-y' : 'start-to-bottom'}`}>
            {children}
        </div>
    )
}

export default ParallaxToBottom
