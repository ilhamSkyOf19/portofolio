import { useEffect, useRef, type FC, type RefObject } from 'react'
import ShadowBox from '../../components/ShadowBox'


// img
import person from '../../assets/img/person/person-hd.png'
import LazyImage from '../../components/LazyImage'
import JudulSection from '../../components/JudulSection'
import TextNormal from '../../components/TextNormal'

const SectionAbout: FC = () => {

    // ref img
    const refImg = useRef<HTMLDivElement>(null);
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
        <div id='about' className='w-full min-h-[100vh] bg-tertiary-light py-16 px-3'>
            {/* title section */}
            <div className='w-full flex flex-row justify-center items-center mb-12'>
                {/* title */}
                <JudulSection text='about me' />
            </div>
            {/* img */}
            <div className='w-full h-[65vh] rounded-xl bg-tertiary-light relative p-3'>
                {/* shadow */}
                <ShadowBox rounded='xl' />

                {/* img */}
                <div className='w-full h-full rounded-xl bg-tertiary-dark relative overflow-hidden flex flex-col justify-end items-center'>
                    {/* img */}
                    <div ref={refImg as RefObject<HTMLDivElement>} className='w-full h-full flex flex-col justify-end items-center transition-all duration-500 ease-in-out'>
                        <LazyImage src={person} alt='logo' className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>

            {/* desc */}
            <div className='w-full flex flex-col justify-start items-start gap-4 pt-8'>
                {/* title */}
                <h2 className='text-2xl font-semibold text-white'>
                    A Short Introduction <br></br> About Me
                </h2>
                {/* desc */}
                <div className='w-full flex flex-col justify-start items-center gap-4 mt-2'>
                    <TextNormal classname='text-center leading-[1.7rem]'>
                        Hello! I'm Ilham Rohmatulloh, a 6th-semester undergraduate student majoring in Computer Science, currently focusing on developing my skills as a Junior Fullstack Developer.
                    </TextNormal>
                    <TextNormal classname='text-center leading-[1.7rem]'>
                        I have a strong interest in building web applications that are lightweight, fast, and efficient. On the frontend, I work with React and Tailwind CSS, while on the backend I utilize Node.js, Bun, and Hono. For databases, I’m familiar with MySQL and Prisma ORM.
                    </TextNormal>
                    <TextNormal classname='text-center leading-[1.7rem]'>
                        I'm passionate about learning new technologies, comfortable working with Git, and committed to continuous growth and contributing to development teams.
                    </TextNormal>

                </div>
            </div>
            {/* download resume */}
            <div className='w-full flex flex-row justify-center items-center mt-12'>
                {/* button download */}
                <button type='button' className='uppercase text-primary font-medium text-md bg-tertiary-light rounded-md py-4 px-12 relative'>
                    {/* shadow */}
                    <ShadowBox rounded='md' />
                    download resume
                </button>
            </div>

        </div>
    )
}

export default SectionAbout
