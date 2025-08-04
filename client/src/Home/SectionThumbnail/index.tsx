import { memo, type FC, type RefObject } from 'react'
import LazyImage from '../../components/LazyImage';
import { Typewriter } from 'react-simple-typewriter';

// img
import personHd from '../../assets/img/person/person-hd.png';
import SubjudulMedium from '../../components/SubJudulMedium';
// icons
import { FiFacebook } from "react-icons/fi";
import BoxHrefIcon from '../../components/BoxHrefIcon';
import { useButtonHref } from '../../hook/useButtonHref';
import { FaGithub, FaInstagram, FaReact } from 'react-icons/fa';
import BoxIcon from '../../components/BoxIcon';
import { SiExpress, SiNextdotjs } from 'react-icons/si';
import TextNormal from '../../components/TextNormal';

const SectionThumbnail: FC = () => {
    // state 


    return (
        <section id='home' className='w-full flex flex-col justify-start items-center min-h-[100vh] bg-tertiary-light pb-24'>
            {/* img */}
            <ThumbnailImage />
            {/* text */}
            <Describe />
            {/* social media */}
            <div className='w-full flex flex-col justify-start items-start gap-6 px-2 mt-12'>
                {/* subjudul social media  */}
                <SubjudulMedium text='find with me' />
                {/* social media */}
                <SocialMedia />
            </div>

            {/* skills */}
            <div className='w-full flex flex-col justify-start items-start gap-6 px-2 mt-10'>
                {/* subjudul skill */}
                <SubjudulMedium text='best skill on' />
                {/* skill */}
                <Skill />
            </div>
        </section>
    )
}


// component thumbnail image
const ThumbnailImage: FC = () => {
    return (
        <div className='h-[36rem] w-full flex flex-row justify-center items-start relative pt-48'>
            <div className='w-[96%] h-[55%] shadow-[0_-20px_30px_rgba(255,255,255,0.03)] rounded-lg ' />
            {/* img */}
            <div className='w-[96%] h-full absolute bottom-0 flex flex-col justify-start items-center overflow-hidden rounded-lg'>
                <div className='w-[100%] h-full rounded-lg  flex flex-col justify-end items-center relative'>
                    <LazyImage src={personHd} alt='logo' className='w-[90%] h-full object-cover z-2' />

                    {/* shadow bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/20 to-transparent opacity-15 pointer-events-none z-1" />
                </div>
            </div>
        </div>
    )
}


// component describe
const Describe: FC = () => {
    return (
        <div className='h-[20rem] w-full flex flex-col justify-start items-start pt-8 px-2'>
            {/* subjudul 1 */}
            <SubjudulMedium text='welcome to my world' />

            {/*  big title */}
            <div className='flex flex-col justify-start items-start gap-2 mt-6'>
                <h1 className='capitalize font-bold text-white text-5xl tracking-[0.1rem]'>hi, i'm <span className='text-primary'>ilham</span></h1>

                {/* text dinamic */}
                <div className='w-full flex flex-row justify-start items-start gap-2 text-3xl font-bold text-white'>
                    <h2 >a</h2>
                    {/* writer */}
                    <Typewriter
                        words={["Junior Coder.", 'Developer.', 'Fullstack Developer.']}
                        loop={0}
                        cursor
                        cursorStyle=''
                        typeSpeed={25}
                        deleteSpeed={25}
                        delaySpeed={1000}

                    />
                </div>
            </div>
            {/* description */}
            <TextNormal classname='mt-6 tracking-[0.05rem] leading-[1.7rem]'>
                I am a Junior Full Stack Web Developer focused on creating modern, responsive, and efficient web applications, ready to contribute in a professional and collaborative environment.
            </TextNormal>
        </div>
    )
}


// component social media 
const SocialMedia: FC = () => {
    const [buttonfacebook, buttonInstagram, buttonGithub] = [
        useButtonHref('a'),
        useButtonHref('a'),
        useButtonHref('a')];

    return (
        <div className='w-full flex flex-row justify-start items-center gap-6'>
            {/* facebook */}
            <BoxHrefIcon buttonRef={buttonfacebook.buttonRef as RefObject<HTMLAnchorElement>} mouseDown={buttonfacebook.mouseDown} setMouseDown={buttonfacebook.setMouseDown} link='https://www.facebook.com/IlhamRizky' icon={FiFacebook} />
            {/* instagram */}
            <BoxHrefIcon buttonRef={buttonInstagram.buttonRef as RefObject<HTMLAnchorElement>} mouseDown={buttonInstagram.mouseDown} setMouseDown={buttonInstagram.setMouseDown} link='https://www.facebook.com/IlhamRizky' icon={FaInstagram} />
            {/* github */}
            <BoxHrefIcon buttonRef={buttonGithub.buttonRef as RefObject<HTMLAnchorElement>} mouseDown={buttonGithub.mouseDown} setMouseDown={buttonGithub.setMouseDown} link='https://github.com/ilhamSkyOf19' icon={FaGithub} />
        </div>
    )
}

// skill
const Skill: FC = () => {

    // skill use hook
    const [reactButton, expressButton, nextButton] = [
        useButtonHref("div"),
        useButtonHref("div"),
        useButtonHref("div"),
    ];

    return (
        <div className='w-full flex flex-row justify-start items-center gap-6'>
            {/* react */}
            <BoxIcon buttonRef={reactButton.buttonRef as RefObject<HTMLDivElement>} mouseDown={reactButton.mouseDown} setMouseDown={reactButton.setMouseDown} icon={FaReact} colorIcon='text-[#61DBFB]' />

            {/* express */}
            <BoxIcon buttonRef={expressButton.buttonRef as RefObject<HTMLDivElement>} mouseDown={expressButton.mouseDown} setMouseDown={expressButton.setMouseDown} icon={SiExpress} colorIcon='text-white' />

            {/* next */}
            <BoxIcon buttonRef={nextButton.buttonRef as RefObject<HTMLDivElement>} mouseDown={nextButton.mouseDown} setMouseDown={nextButton.setMouseDown} icon={SiNextdotjs} colorIcon='text-white' />
        </div>
    )
}

export default memo(SectionThumbnail);
