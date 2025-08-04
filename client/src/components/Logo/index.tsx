import { type FC } from 'react'
import LazyImage from '../LazyImage'
import personHead from '../../assets/img/person/person-head.png'

// type props 
type Props = {
    width?: number
}

const Logo: FC<Props> = ({ width }) => {
    return (
        <div className='rounded-full border-3 border-[rgba(255,255,255,0.1)] overflow-hidden' style={{ width: `${width ? width : 3}rem`, height: `${width ? width : 3}rem` }}>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <LazyImage src={personHead} alt='logo' className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default Logo
