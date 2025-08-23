import { type FC } from 'react'
import { PiLineVerticalThin } from "react-icons/pi";
import { Link } from 'react-router';
const NotFound: FC = () => {
    return (
        <div className='w-full h-[100vh] bg-tertiary-light flex flex-row justify-center items-center gap-1'>
            <h1 className='font-light text-white text-4xl capitalize md:text-6xl'>404</h1>
            <PiLineVerticalThin className='text-white text-8xl' />
            <div className='flex flex-col justify-center items-start'>
                <h1 className='font-light text-white text-2xl capitalize md:text-4xl'>not found</h1>
                <Link to='/' className='text-blue-400 primary text-sm font-light md:text-lg'>back to home</Link>
            </div>
        </div>
    )
}

export default NotFound
