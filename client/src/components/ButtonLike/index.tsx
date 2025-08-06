import { type FC } from 'react'
import ShadowBox from '../ShadowBox'
import { BiLike } from 'react-icons/bi'

// button like 
const ButtonLike: FC = () => {
    return (
        <button type='button' className='flex flex-row justify-center items-center h-14 w-50 bg-tertiary-light rounded-md relative gap-3 transition-all duration-300 ease-in-out md:hover:-translate-y-1.5 md:hover:bg-tertiary-dark cursor-pointer'>
            {/* shadow */}
            <ShadowBox rounded='md' />
            {/* text */}
            <p className='uppercase text-md font-medium semibold text-primary'>
                like this
            </p>
            {/* icons */}
            <div className='w-3 h-full flex flex-col justify-center items-center relative'>
                <BiLike className='text-lg text-primary top-[1rem] absolute' />
            </div>
            {/* like count */}
            <div className='w-12 py-0.5 flex flex-col justify-center items-center relative bg-primary rounded-md'>
                <p className='text-sm font-bold text-white'>
                    600
                </p>
            </div>
        </button>
    )
}

export default ButtonLike
