import ShadowBox from "../ShadowBox"
import { FiArrowRight } from "react-icons/fi"
import type { FC } from "react"
import type { IconType } from "react-icons"
import clsx from "clsx"

// typee props card 
type Props = {
    ref: React.RefObject<HTMLDivElement>,
    click: boolean,
    setClick: React.Dispatch<React.SetStateAction<boolean>>
    icon: IconType;
    title: string;
    desc: string;
}

// cart 
const CardWhatIDo: FC<Props> = ({ click, setClick, ref, icon: Icon, title, desc }) => {

    return (
        <div ref={ref} className='w-full h-[19rem] relative' onClick={() => setClick(!click)}>
            {/* shadow */}
            <ShadowBox rounded='xl' />
            <div className={clsx(
                'w-full h-full z-2  flex flex-col justify-start items-start gap-3 pt-4 px-3 overflow-hidden transition-all duration-300 ease-in-out rounded-xl',
                click ? 'bg-tertiary-dark' : 'bg-tertiary-light'
            )}>
                <div className={clsx(
                    'w-full flex flex-col justify-start items-start gap-3 transition-transform duration-300 ease-in-out ',
                    click ? 'translate-y-0' : 'translate-y-2'
                )}>
                    {/* icons */}
                    <Icon className='text-7xl text-primary' />
                    {/* title */}
                    <h2 className='text-3xl font-normal text-text-primary'>
                        {title}
                    </h2>
                    {/* description */}
                    <p className='text-md text-text-primary opacity-80 mb-2'>
                        {desc}
                    </p>
                    {/* icons arrow */}
                    <FiArrowRight className={clsx(
                        'text-primary text-4xl transition-all duration-300 ease-in-out',
                        click ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                    )} />
                </div>

            </div>
        </div>
    )
}

export default CardWhatIDo