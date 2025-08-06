import clsx from 'clsx';
import { useEffect, type FC } from 'react'
import TextNormal from '../TextNormal';
import Menu from '../Menu';
import SubjudulMedium from '../SubJudulMedium';

// img
import Logo from '../Logo';


// icons
import { IoCloseOutline } from "react-icons/io5";

import { FaGithub, FaInstagram } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { FiFacebook } from 'react-icons/fi';


// type props
type Props = {
    propsRef: React.RefObject<HTMLDivElement | null>
    active: boolean;
    setSideBar: (value: boolean) => void
}


// type menu
type MenuType = {
    id: string;
    label: string
}

const SideNavbar: FC<Props> = ({ propsRef, active, setSideBar }) => {
    // hidden scroll
    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [active])

    // menu
    const menu: MenuType[] = [
        { id: "home", label: "home" },
        { id: "features", label: "features" },
        { id: "portfolio", label: "portfolio" },
        { id: "about", label: "about" },
        { id: "resume", label: "resume" },
        { id: "mytech", label: "my tech" },
        { id: "skillset", label: "skillset" },
        { id: "thankyou", label: "thank you" },
    ]

    return (
        <nav className={clsx(
            'fixed w-full h-full bg-[rgba(0,_0,_0,_0.7)] top-0 left-0 z-50 flex flex-row justify-start items-center transition-opacity duration-500 ease-in-out',
            active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
            <div ref={propsRef} className={clsx(
                'w-[80%] h-full bg-tertiary-dark delay-100 transition-transform duration-500 ease-in-out px-3 flex flex-col justify-start items-start py-5 overflow-y-scroll',
                active ? "translate-x-0" : "-translate-x-full"
            )}>
                {/* logo and close */}
                <div className='w-full flex flex-col justify-start items-start gap-5 pb-6 relative line'>
                    <div className='w-full flex flex-row justify-between items-center'>
                        {/* logo */}
                        <Logo width={5.5} />

                        {/* button close  */}
                        <button type='button' className={clsx(
                            'flex flex-row justify-center items-center p-2 bg-tertiary-light shadow-2xl shadow-black rounded-full transition-transform duration-700',
                            active ? 'rotate-0' : '-rotate-180'
                        )} onClick={() => setSideBar(false)}>
                            <IoCloseOutline className='text-3xl text-primary' />
                        </button>
                    </div>
                    {/* desc */}
                    <TextNormal>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </TextNormal>
                </div>

                {/* menu */}
                <div className='w-full py-8 flex flex-col justify-start items-start relative line'>
                    {
                        menu.map((item, index) => (
                            <Menu key={index} id={item.id} label={item.label} setSideBar={setSideBar} />
                        ))
                    }
                </div>

                {/* footer */}
                <footer className='w-full flex flex-col justify-start items-start py-6 gap-5'>
                    <SubjudulMedium text='find with me' />
                    {/* social media */}
                    <div className='w-full flex flex-row justify-start items-start gap-5'>
                        {/* card facebook */}
                        <CardSocialMedia icon={FiFacebook} link='https://www.facebook.com' />
                        {/* card instagram */}
                        <CardSocialMedia icon={FaInstagram} link='https://www.instagram.com' />
                        {/* card github */}
                        <CardSocialMedia icon={FaGithub} link='https://github.com/ilhamSkyOf19' />
                    </div>
                </footer>
            </div>
        </nav>
    )
}



type CardProps = {
    icon: IconType;
    link: string;
}
// card social media 
const CardSocialMedia: FC<CardProps> = ({ icon: Icon, link }) => {
    return (
        <a target='_blank' href={link} className='w-14 h-14 rounded-md flex flex-col justify-center items-center bg-tertiary-light'>
            <Icon className='text-2xl text-white' />
        </a>
    )
}

export default SideNavbar
