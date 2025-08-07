import { type FC, type RefObject } from 'react'
import type { IconType } from 'react-icons';
import ShadowBox from '../ShadowBox';



type Props = {
    buttonRef: React.RefObject<HTMLAnchorElement>;
    mouseDown: boolean;
    link: string;
    icon: IconType;
}
const BoxHrefIcon: FC<Props> = ({ buttonRef, mouseDown, link, icon: Icon }) => {
    return (
        <a href={link ?? ""} target='_blank' ref={buttonRef as RefObject<HTMLAnchorElement>} className={`w-18 h-18 rounded-md flex flex-row justify-center items-center bg-tertiary-light relative transition-transform duration-300 ease-in-out hover:-translate-y-1.5 ${mouseDown ? '-translate-y-1.5' : 'translate-y-0'}`}>
            {/* shadow */}
            <ShadowBox rounded='md' />
            <div className='z-2 w-full h-full rounded-md flex flex-col justify-center items-center'>
                <Icon className='text-3xl text-white' />
            </div>
        </a>
    )
}

export default BoxHrefIcon
