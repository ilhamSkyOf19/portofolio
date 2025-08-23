import { memo, type FC } from 'react'
import TitleSection from '../../components/TitleSection'
import ParallaxToTop from '../../components/ParallaxToTop'
import ParallaxScaleSmall from '../../components/ParallaxScaleSmall'

const Footer: FC = () => {
    // active section
    return (
        <footer id='thankyou' className='w-full h-auto flex flex-col justify-start items-center gap-[0.1rem] '>
            <div className='w-full h-full bg-tertiary-light py-12 px-3'>
                {/* title */}
                <ParallaxToTop>
                    <TitleSection subJudul='Thank you for visiting my profile!' title='Thanks for Visiting!' />
                </ParallaxToTop>

                <div className='w-full flex flex-col justify-start items-center gap-3'>

                    {/* text */}
                    <ParallaxToTop>
                        <p className='text-text-primary text-center text-lg leading-[1.8rem] md:leading-[2rem]'>
                            I’m Ilham, a Junior Full Stack Developer passionate about building functional, interactive, and user-friendly web applications.
                            Your visit truly means a lot and motivates me to keep learning and improving my skills in the world of web development.
                            Feel free to connect with me if you’d like to discuss, collaborate, or simply say hi.
                        </p>
                    </ParallaxToTop>

                    <ParallaxToTop>
                        <p className='text-text-primary text-center text-lg leading-[1.7rem]'>
                            – Ilham -
                        </p>
                    </ParallaxToTop>
                </div>
            </div>

            {/* copyright */}
            <div className='w-full flex flex-row justify-center items-center bg-tertiary-light relative line-black-before h-12 pt-2'>
                <ParallaxScaleSmall>
                    <p className='text-text-primary text-center text-sm'>&copy; 2025. All Rights Reserved by Ilham Rohmatulloh.</p>
                </ParallaxScaleSmall>
            </div>
        </footer >
    )
}

export default memo(Footer)
