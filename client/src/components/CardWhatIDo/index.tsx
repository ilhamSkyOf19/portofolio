import ShadowBox from "../ShadowBox"
import { FiArrowRight } from "react-icons/fi"
import type { FC } from "react"
import type { IconType } from "react-icons"
import clsx from "clsx"
import { useWindowSize } from "../../hook/useWindowSize"
import ParallaxToTop from "../ParallaxToTop"

// typee props card 
type Props = {
    ref: React.RefObject<HTMLDivElement>,
    click: boolean,
    icon: IconType;
    title: string;
    desc: string;
}

// cart 
const CardWhatIDo: FC<Props> = ({ click, ref, icon: Icon, title, desc }) => {

    const { device } = useWindowSize();

    return (
        <ParallaxToTop>
            <div ref={ref} className='w-full h-[21rem] relative md:h-[21rem]' >
                {/* shadow */}
                <ShadowBox rounded='xl' />
                <div className={clsx(
                    'w-full h-full z-2 flex flex-col justify-start items-start gap-3 pt-9 px-5.5 overflow-hidden transition-all duration-300 ease-in-out rounded-xl group hover:md:bg-tertiary-dark',
                    (device === 'mobile' && click) ? 'bg-tertiary-dark' : 'bg-tertiary-light'
                )}>
                    <div className={clsx(
                        'w-full flex flex-col justify-start items-start transition-transform duration-300 ease-in-out md:translate-y-4 group group-hover:md:translate-y-0',
                        (device === 'mobile' && click) ? 'translate-y-0' : 'translate-y-3'
                    )}>
                        {/* icons */}
                        <Icon className='text-6xl text-primary' />
                        {/* title */}
                        <h2 className='text-3xl font-normal text-text-primary my-6'>
                            {title}
                        </h2>
                        {/* description */}
                        <p className='text-md text-text-primary opacity-80 mb-4 md:mb-4'>
                            {desc}
                        </p>
                        {/* icons arrow */}
                        <FiArrowRight className={clsx(
                            'text-primary text-4xl transition-all duration-300 ease-in-out group-hover:md:translate-y-0 group-hover:md:opacity-100',
                            (device === 'mobile' && click) ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                        )} />
                    </div>

                </div>
            </div>
        </ParallaxToTop>
    )
}

export default CardWhatIDo