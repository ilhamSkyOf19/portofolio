import { type FC } from 'react'
import LazyImage from '../LazyImage'
import { useWindowSize } from '../../hook/useWindowSize'


// icons
import { HiBars3 } from "react-icons/hi2";

// type props 
type Props = {
    setSideBar: (value: boolean) => void
    barRef: React.RefObject<HTMLButtonElement | null>;
}

const Navbar: FC<Props> = ({ setSideBar, barRef }) => {
    //  get size 
    const { device } = useWindowSize();
    return (
        <nav className='w-full min-h-20 flex flex-row justify-between items-center fixed top-0 left-0 z-50 bg-tertiary-light px-5 py-4'>
            {/* icon */}
            <div className='flex-1 flex flex-row justify-start items-center gap-4'>
                {/* logo */}
                <div className='w-13 h-13 rounded-full border-1 border-[rgba(255,255,255,0.4)] '>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <LazyImage src='/vite.svg' alt='logo' className='w-full h-full object-cover' />
                    </div>
                </div>
                {/* title */}
                <h2 className='text-lg font-semibold uppercase text-text-primary font-Poppins'>
                    portofolio
                </h2>
            </div>
            {/* bars */}
            <div className='flex-1 flex flex-row justify-end items-center'>
                {
                    device === "mobile" && (
                        <button ref={barRef} type='button' onClick={() => setSideBar(true)}  >
                            <HiBars3 className='text-4xl text-primary' />
                        </button>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
