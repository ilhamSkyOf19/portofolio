import { useEffect, useState, type FC } from 'react'
import { useWindowSize } from '../../hook/useWindowSize'

// icons
import { HiBars3 } from "react-icons/hi2";
import Logo from '../Logo';
import clsx from 'clsx';

// type props 
type Props = {
    setSideBar: (value: boolean) => void
    barRef: React.RefObject<HTMLButtonElement | null>;
    showNavbar: boolean;
}

// type menu type
// type MenuType = {
//     id: string;
//     label: string
// }

const Navbar: FC<Props> = ({ setSideBar, barRef, showNavbar }) => {
    //  get size
    // const menu: MenuType[] = [
    //     { id: "home", label: "home" },
    //     { id: "features", label: "features" },
    //     { id: "portfolio", label: "portfolio" },
    //     { id: "about", label: "about" },
    //     { id: "resume", label: "resume" },
    //     { id: "mytech", label: "my tech" },
    //     { id: "skillset", label: "skillset" },
    //     { id: "thankyou", label: "thank you" },
    // ]
    // get device
    const { device } = useWindowSize();
    const [blur, setBlur] = useState<boolean>(false);

    useEffect(() => {
        const handleBlur = () => {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const threshold = 100;
                setBlur(scrollY > threshold);
            });
        };

        window.addEventListener("scroll", handleBlur, { passive: true });
        return () => window.removeEventListener("scroll", handleBlur);
    }, []);




    return (
        <nav className={clsx(
            'w-full min-h-20 flex flex-row justify-between items-center fixed top-0 left-0 z-40 bg-tertiary-light px-5 py-4 transition-transform duration-500 ease-in-out',
            showNavbar ? "translate-y-0" : "-translate-y-full",
            blur
                ? 'backdrop-blur-sm bg-tertiary-light/30 shadow-2xl shadow-[rgba(0,0,0,0.3)]' // transparansi 50%
                : 'backdrop-blur-none bg-tertiary-light/100',
        )}>
            {/* icon */}
            <div className='flex-1 flex flex-row justify-start items-center gap-4'>
                {/* logo */}
                <Logo />
                {/* title */}
                <h2 className='text-lg font-semibold uppercase text-text-primary font-Poppins'>
                    portofolio
                </h2>
            </div>
            {/* bars */}
            <div className='flex-2 flex flex-row justify-end items-center gap-2'>
                {
                    (device === "mobile" || device === "tablet") && (
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
