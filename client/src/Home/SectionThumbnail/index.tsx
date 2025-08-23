import { memo, type FC } from 'react'
import LazyImage from '../../components/LazyImage';
import { Typewriter } from 'react-simple-typewriter';

// img
import personHd from '../../assets/img/person/person-hd.png';
import SubJudulTextMedium from '../../components/SubJudulTextMedium';
// icons
import SocialMedia from '../../components/SocialMedia';
import clsx from 'clsx';
import { useView } from '../../hook/useView';
import ParallaxToRight from '../../components/ParallaxToRight';

const SectionThumbnail: FC = () => {



    return (
        <section id='home' className='w-full flex flex-col justify-start items-center h-auto bg-tertiary-light pb-24 lg:flex-row-reverse lg:items-start line-black'>
            {/* img */}
            <ThumbnailImage />
            <div className='w-full h-auto flex flex-col justify-start items-start lg:pt-20'>
                {/* text */}
                <Describe />
                {/* social media */}
                <ParallaxToRight>
                    <div className={clsx(
                        'w-full flex flex-col justify-start items-start gap-6 px-2 mt-16 md:mt-4 transition-700',
                    )}>
                        {/* subjudul social media  */}
                        <SubJudulTextMedium text='find with me' />
                        {/* social media */}
                        <SocialMedia />
                    </div>
                </ParallaxToRight>
            </div>
        </section>
    )
}


// component thumbnail image
const ThumbnailImage: FC = () => {
    // const triger scroll



    // inview
    const view = useView();
    return (
        <div ref={view.ref} className={clsx(
            'h-[36rem] w-full flex flex-row justify-center items-start relative pt-48 md:h-[60rem] lg:h-[40rem] transition-1',
            view.inView ? 'back-y' : 'start-to-bottom',
        )}>
            <div className='w-[96%] h-[55%] shadow-[0_-20px_30px_rgba(255,255,255,0.03)] rounded-lg' />
            {/* img */}
            <div className='w-[96%] h-full absolute bottom-0 flex flex-col justify-start items-center overflow-hidden rounded-lg group '>
                <div className='w-[100%] h-full rounded-lg  flex flex-col justify-end items-center relative'>
                    <LazyImage src={personHd} alt='logo' className='w-[100%] h-[34rem] object-cover z-2 md:w-[100%] md:h-[60rem] lg:h-[36rem] group-hover:scale-105 transition-all duration-300 ease-in-out' />

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
        <div className={clsx(
            'h-[20rem] w-full flex flex-col justify-start items-start pt-8 px-2 md:pt-12 transition-700',
        )}>
            {/* subjudul 1 */}
            <ParallaxToRight>
                <SubJudulTextMedium text='welcome to my world' />
            </ParallaxToRight>

            {/*  big title */}
            <ParallaxToRight>
                <div className={clsx(
                    'flex flex-col justify-start items-start gap-2 mt-6'
                )}>
                    <h1 className={clsx(
                        'capitalize font-bold text-white text-5xl tracking-[0.1rem] ',
                    )}>hi, i'm <span className='text-primary'>ilham</span></h1>

                    {/* text dinamic */}
                    <div className={`w-full flex flex-row   items-start gap-2 text-2xl font-bold text-white min-h-[2.5rem]`}>
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
            </ParallaxToRight>
            <ParallaxToRight>
                {/* description */}
                <p className={clsx(
                    'w-full min-h-12 mt-6 tracking-[0.05rem] leading-[1.7rem] text-text-primary ',
                )}>
                    I am a Junior Full Stack Web Developer focused on creating modern, responsive, and efficient web applications, ready to contribute in a professional and collaborative environment.
                </p>
            </ParallaxToRight>
        </div>
    )
}




export default memo(SectionThumbnail);
