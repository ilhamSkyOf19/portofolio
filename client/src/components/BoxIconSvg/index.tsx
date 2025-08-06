import { type FC } from 'react'
import ShadowBox from '../ShadowBox'



type Props = {
    children: React.ReactNode,
}
const BoxIconSvg: FC<Props> = ({ children }) => {
    return (
        <div className={`w-18 h-18 rounded-md flex flex-row justify-center items-center bg-tertiary-light relative transition-all duration-300 ease-in-out md:hover:-translate-y-1.5 md:hover:bg-tertiary-dark`} >
            {/* shadow */}
            <ShadowBox rounded='md' />
            <div className='z-2 w-full h-full rounded-md flex flex-col justify-center items-center'>
                {children}
            </div>
        </div>
    )
}

export default BoxIconSvg