import { type FC } from 'react'
import ShadowBox from '../ShadowBox'
import { IoClose } from 'react-icons/io5'


type Props = {
    size?: number;
    action: (value: boolean) => void
}
const ButtonCloseShadow: FC<Props> = ({ size, action }) => {
    return (
        <button aria-label='close' type='button' className='flex flex-row justify-center items-center bg-tertiary-light rounded-full relative cursor-pointer lg:hover:scale-115 transition-all duration-300 ease-in-out'
            style={{ width: size ? `${size}rem` : '2.5rem', height: size ? `${size}rem` : '2.5rem' }}
            onClick={() => action(false)}
        >
            {/* shadow */}
            <ShadowBox rounded='full' />
            {/* icon close */}
            <IoClose className='text-2xl text-white' />
        </button>
    )
}

export default ButtonCloseShadow
