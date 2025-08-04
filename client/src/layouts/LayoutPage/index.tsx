import { useEffect, useRef, useState, type FC, type ReactNode } from 'react'
import Navbar from '../../components/Navbar';
import { useWindowSize } from '../../hook/useWindowSize';
import SideNavbar from '../../components/SideNavbar';


// types props 
type Props = {
    children: ReactNode;
}

const LayoutPage: FC<Props> = ({ children }) => {
    // state 
    const [sideBar, SetSideBar] = useState<boolean>(false);


    // ref 
    const dropDownRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLButtonElement>(null);
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




    // get device
    const { device } = useWindowSize();

    // memo children

    return (
        <div className='w-full flex flex-col justify-start items-center min-h-screen relative'>
            <Navbar setSideBar={SetSideBar} barRef={barRef} />
            {device === "mobile" && (
                <SideNavbar propsRef={dropDownRef} active={sideBar} setSideBar={SetSideBar} />
            )}
            {children}
        </div>
    )
}

export default LayoutPage
