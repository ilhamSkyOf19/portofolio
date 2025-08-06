import { type FC } from 'react'
import TitleSection from '../../components/TitleSection'

const Footer: FC = () => {
    return (
        <footer id='thankyou' className='w-full flex flex-col justify-start items-center gap-[0.1rem]'>
            <div className='w-full bg-tertiary-light py-12 px-3'>
                {/* title */}
                <TitleSection subJudul='Thank you for visiting my profile!' title='Thanks for Visiting!' />

                <div className='w-full flex flex-col justify-start items-center gap-3'>

                    {/* text */}
                    <p className='text-text-primary text-center text-lg leading-[1.8rem]'>
                        I’m Ilham, a Junior Full Stack Developer passionate about building functional, interactive, and user-friendly web applications.
                        Your visit truly means a lot and motivates me to keep learning and improving my skills in the world of web development.
                        Feel free to connect with me if you’d like to discuss, collaborate, or simply say hi.
                    </p>

                    <p className='text-text-primary text-center text-lg leading-[1.7rem]'>
                        – Ilham -
                    </p>
                </div>
            </div>

            {/* copyright */}
            <div className='w-full flex flex-row justify-center items-center bg-tertiary-light py-4 px-6'>
                <p className='text-text-primary text-center text-lg'>&copy; 2025. All Rights Reserved by Ilham Rohmatulloh.</p>
            </div>
        </footer>
    )
}

export default Footer
