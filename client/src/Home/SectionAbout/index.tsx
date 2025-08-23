import { memo, useEffect, useRef, type FC, type RefObject } from 'react'
import ShadowBox from '../../components/ShadowBox'
import LazyImage from '../../components/LazyImage'
import TextNormal from '../../components/TextNormal'
import TitleSection from '../../components/TitleSection'
import ParallaxToRight from '../../components/ParallaxToRight'
import ParallaxToTop from '../../components/ParallaxToTop'


// img
import person from '../../assets/img/person/person-hd.png'
import { BiSolidQuoteRight } from "react-icons/bi";

const SectionAbout: FC = () => {

    // ref img
    const refImg = useRef<HTMLDivElement>(null);
    // active section

    useEffect(() => {
        const node = refImg.current;
        if (!node) return;

        const handleClickImg = (event: MouseEvent) => {
            if (node.contains(event.target as Node)) {
                node.classList.add('scale-110');
            } else if (!node.contains(event.target as Node)) {
                node.classList.remove('scale-110');
            }
        }

        document.addEventListener('click', handleClickImg);
        return () => document.removeEventListener('click', handleClickImg);
    }, [refImg])


    return (
        <section id='aboutme' className='w-full h-auto bg-tertiary-light pt-16 pb-3 px-3'>
            {/* title section */}
            <ParallaxToRight>
                <TitleSection subJudul='A little more about me' title='about me' position='items-start' />
            </ParallaxToRight>
            <div className='w-full h-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-8'>
                {/* img */}
                <ParallaxToTop>
                    <div className='w-full h-[65vh] rounded-xl bg-tertiary-light relative p-3 md:h-[80vh] group lg:col-span-1 lg:h-[90vh]'>
                        {/* shadow */}
                        <ShadowBox rounded='xl' />

                        {/* img */}
                        <div className='w-full h-full rounded-xl bg-tertiary-dark relative overflow-hidden flex flex-col justify-end items-center'>
                            {/* img */}
                            <div ref={refImg as RefObject<HTMLDivElement>} className='w-full h-full flex flex-col justify-end items-center transition-all duration-500 ease-in-out md:group-hover:scale-110'>
                                <LazyImage src={person} alt='logo' className='w-full h-full object-cover' />
                            </div>
                        </div>
                    </div>
                </ParallaxToTop>

                <div className='w-full h-auto lg:col-span-2 lg:pl-14 '>
                    {/* desc */}
                    <div className='w-full flex flex-col justify-start items-start gap-4 pt-8 lg:pt-0'>
                        {/* title */}
                        <ParallaxToRight>
                            <h2 className='text-3xl font-semibold text-white lg:text-5xl'>
                                A Short Introduction <br></br> About Me
                            </h2>
                        </ParallaxToRight>
                        {/* desc */}
                        <div className='w-full flex flex-col justify-start items-center gap-4 mt-2 md:items-left'>
                            <ParallaxToTop>
                                <TextNormal classname='text-center leading-[1.7rem] md:text-left'>
                                    Hello! I'm Ilham Rohmatulloh, a 6th-semester undergraduate student majoring in Computer Science, currently focusing on developing my skills as a Junior Fullstack Developer.
                                </TextNormal>
                            </ParallaxToTop>

                            <ParallaxToTop>
                                <TextNormal classname='text-center leading-[1.7rem] md:text-left'>
                                    I have a strong interest in building web applications that are lightweight, fast, and efficient. On the frontend, I work with React and Tailwind CSS, while on the backend I utilize Node.js, Bun, and Hono. For databases, I’m familiar with MySQL and Prisma ORM.
                                </TextNormal>

                            </ParallaxToTop>

                            <ParallaxToTop>
                                <TextNormal classname='text-center leading-[1.7rem] md:text-left'>
                                    I'm passionate about learning new technologies, comfortable working with Git, and committed to continuous growth and contributing to development teams.
                                </TextNormal>
                            </ParallaxToTop>

                        </div>
                    </div>

                    {/* line */}
                    <ParallaxToTop>
                        <div className='w-full flex flex-row justify-between items-center mt-12 px-4'>
                            <div className='flex-3 h-0.5 bg-primary rounded-full' />
                            <div className='flex-1 flex flex-row justify-center items-center'>
                                <BiSolidQuoteRight className='text-primary text-5xl' />
                            </div>
                            <div className='flex-3 h-0.5 bg-primary rounded-full' />
                        </div>
                    </ParallaxToTop>

                    {/* download resume */}
                    <ParallaxToTop>
                        <div className='w-full flex-row justify-center items-center mt-12 lg:justify-start hidden'>
                            {/* button download */}
                            <button type='button' className='uppercase text-primary font-medium text-md bg-tertiary-light rounded-md py-4 px-12 relative transition-all duration-300 ease-in-out md:hover:md:-translate-y-1.5 cursor-pointer hover:bg-tertiary-dark'>
                                {/* shadow */}
                                <ShadowBox rounded='md' />
                                download resume
                            </button>
                        </div>
                    </ParallaxToTop>
                </div>
            </div>
        </section>
    )
}

export default memo(SectionAbout)
