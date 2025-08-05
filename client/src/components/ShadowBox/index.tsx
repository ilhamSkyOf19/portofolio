import { type FC } from 'react'
import clsx from 'clsx'

// props 
type Props = {
    rounded: 'md' | 'xl' | '3xl' | 'full';
}
const ShadowBox: FC<Props> = ({ rounded }) => {
    return (
        <div className={clsx(
            'pointer-events-none w-full h-full absolute top-0 left-0 before:content-[""] before:absolute before:w-full before:h-full before:top-0 before:left-0 light before:shadow-[-10px_-10px_30px_rgba(255,255,255,0.05)]  after:content-[""] after:absolute after:w-full after:h-full after:bottom-0 after:right-0  after:shadow-[10px_10px_30px_rgba(0,0,0,0.2)]',
            rounded === 'md' && 'before:rounded-md after:rounded-md',
            rounded === 'xl' && 'before:rounded-xl after:rounded-xl',
            rounded === '3xl' && 'before:rounded-3xl after:rounded-3xl',
            rounded === 'full' && 'before:rounded-full after:rounded-full',
        )} />
    )
}

export default ShadowBox
