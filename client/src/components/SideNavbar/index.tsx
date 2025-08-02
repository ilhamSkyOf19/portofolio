import { useEffect, type FC } from 'react'

type Props = {
    propsRef: React.RefObject<HTMLDivElement | null>
    active: boolean;
}

const SideNavbar: FC<Props> = ({ propsRef, active }) => {

    // hidden scroll
    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [active])
    return (
        <nav className={`fixed w-full h-lvh bg-[rgba(0,_0,_0,_0.7)] top-0 left-0 z-50 flex flex-row justify-start items-center transition-opacity duration-500 ease-in-out ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            <div ref={propsRef} className={`w-[70%] h-full bg-tertiary-light delay-100 transition-transform duration-500 ease-in-out ${active ? "translate-x-0" : "-translate-x-full"}`}>
            </div>
        </nav>
    )
}

export default SideNavbar
