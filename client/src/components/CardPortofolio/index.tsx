import { type FC, type ReactNode } from 'react'
import ShadowBox from '../ShadowBox'


// icons
import { MdArrowOutward } from "react-icons/md";
import clsx from 'clsx';

// type props
type Props = {
    type: string;
    title: string;
    shape: ReactNode;
    handleActive: (value: string) => void
    id: string
}

const CardPortofolio: FC<Props> = ({ id, shape, type, title, handleActive }) => {
    return (
        <div className={clsx(
            'w-full h-[25rem] rounded-2xl  flex flex-col justify-start items-center px-5 pt-6 relative transition-all duration-300 ease-in-out lg:cursor-pointer group',
        )} onClick={() => handleActive(id)}>
            {/* shadow */}
            <ShadowBox rounded='3xl' />
            {/* img */}
            <div className='flex-1/4 w-full flex flex-col justify-center items-center overflow-hidden'>
                {shape}
            </div>
            <div className='flex-1 w-full flex flex-col justify-start items-start gap-3 pt-5 cursor-pointer' >
                {/* type */}
                <h3 className='uppercase text-sm font-normat text-primary'>
                    {type}
                </h3>
                {/* title */}
                <h2 className={clsx(
                    "text-lg font-semibold transition-all duration-300 ease-in-out text-text-primary group/child hover:text-primary",

                )}>
                    {title}
                    <span className="inline-flex items-center ml-1 relative">
                        <MdArrowOutward className={clsx(
                            "text-primary text-2xl ml-1 origin-bottom-left  transition-all duration-300 ease-in-out absolute -top-4.5 md:translate-y-2.5 md:opacity-0 md:scale-0 md:group-hover:md:translate-y-0 md:group-hover/child:md:opacity-100 md:group-hover/child:md:scale-100",
                        )} />
                    </span>
                </h2>

            </div>

        </div>
    )
}

export default CardPortofolio
