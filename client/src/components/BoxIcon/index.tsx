import { type FC, type RefObject } from 'react'
import type { IconType } from 'react-icons';



type Props = {
    buttonRef: React.RefObject<HTMLDivElement>;
    mouseDown: boolean;
    icon: IconType;
    colorIcon: string
}
const BoxIcon: FC<Props> = ({ buttonRef, mouseDown, icon: Icon, colorIcon }) => {
    return (
        <div ref={buttonRef as RefObject<HTMLDivElement>} className={`w-18 h-18 rounded-md flex flex-row justify-center items-center bg-tertiary-light relative before:content-[""] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-tertiary-light before:shadow-[-10px_-10px_25px_rgba(255,255,255,0.05)] before:rounded-md after:content-[""] after:absolute after:w-full after:h-full after:bottom-0 after:right-0 after:bg-tertiary-light after:shadow-[15px_10px_25px_rgba(0,0,0,0.3)] after:rounded-md transition-transform duration-300 ease-in-out ${mouseDown ? '-translate-y-1.5' : 'translate-y-0'}`} >
            <div className='z-2 w-full h-full rounded-md flex flex-col justify-center items-center'>
                <Icon className={`text-3xl ${colorIcon}`} />
            </div>
        </div>
    )
}

export default BoxIcon
