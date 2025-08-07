import { type FC } from 'react'
import ShadowBox from '../ShadowBox'
import ParallaxScaleSmall from '../ParallaxScaleSmall'



type Props = {
    children: React.ReactNode;
    delay: number;
}
const BoxIconSvg: FC<Props> = ({ children, delay }) => {
    return (
        <ParallaxScaleSmall delay={delay}>
            <div className={`w-18 h-18 rounded-md flex flex-row justify-center items-center bg-tertiary-light relative transition-all duration-300 ease-in-out md:hover:-translate-y-1.5 md:hover:bg-tertiary-dark`} >
                {/* shadow */}
                <ShadowBox rounded='md' />
                <div className='z-2 w-full h-full rounded-md flex flex-col justify-center items-center'>
                    {children}
                </div>
            </div>
        </ParallaxScaleSmall>
    )
}

export default BoxIconSvg