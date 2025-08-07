import { useEffect, useRef, useState, type FC, type ReactNode } from 'react'
import Navbar from '../../components/Navbar';
import SideNavbar from '../../components/SideNavbar';



// types props 
type Props = {
    children: ReactNode;
}

const LayoutPage: FC<Props> = ({ children }) => {
    // state 
    const [sideBar, SetSideBar] = useState<boolean>(false);
    const [showNavbar, setShowNavbar] = useState<boolean>(true);


    // ref 
    const dropDownRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLButtonElement>(null);
    const lastScrollY = useRef(0); // pakai ref agar tidak memicu re-render
    // handle active side bar

    // click out side 
    useEffect(() => {
        const handleClickOutSide = (event: MouseEvent) => {
            //  if ref current value is not null and not contains event target  
            if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node) && !barRef.current?.contains(event.target as Node)) {
                SetSideBar(false);
            }
        }

        document.addEventListener("click", handleClickOutSide);
        return () => {
            document.removeEventListener("click", handleClickOutSide);
        };
    }, [dropDownRef, barRef])

    // handle scroll hidden & show navbar
    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                // set current scroll
                const currentScrollY = window.scrollY;
                // cek scroll down
                if (currentScrollY > lastScrollY.current) {
                    setShowNavbar(false);
                } else {
                    setShowNavbar(true);
                }
                lastScrollY.current = currentScrollY;
            });
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);






    return (
        <div className='w-full flex flex-col justify-start items-center min-h-screen relative'>
            <Navbar setSideBar={SetSideBar} barRef={barRef} showNavbar={showNavbar} />
            <SideNavbar propsRef={dropDownRef} active={sideBar} setSideBar={SetSideBar} />
            <div className='w-full flex flex-col justify-start items-center bg-tertiary-light md:px-10'>
                {children}
            </div>
        </div>
    )
}

export default LayoutPage
