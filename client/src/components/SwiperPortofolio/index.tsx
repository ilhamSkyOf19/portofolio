import { useState, type FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import clsx from 'clsx';
import LazyImage from '../LazyImage';


// img
import mockup1 from '../../assets/mockups/mockup-1.png'
import mockup2 from '../../assets/mockups/mockup-2.png'
import mockup3 from '../../assets/mockups/mockup-3.png'
import mockup4 from '../../assets/mockups/mockup-4.png'


type Props = {
    mockup: 1 | 2 | 3 | 4;
}
const SwiperPortofolio: FC<Props> = ({ mockup }) => {
    // state 
    const [active, setActive] = useState<number>(0);


    return (
        <div className='w-full h-full flex flex-col justify-center items-center relative'>
            {/* prev */}
            <button type='button' className={clsx(
                'prev-button absolute -left-0 top-1/2 -translate-y-1/2 w- p-5 z-10 transition-all duration-300 ease-in-out cursor-pointer hover:opacity-100',
                active === 0 ? 'opacity-0 pointer-events-none' : 'opacity-60 pointer-events-auto'
            )}>
                <FaArrowLeft className='text-white text-xl md:text-3xl' />
            </button>
            {/* next */}
            <button type='button' className={clsx(
                'next-button absolute -right-0 top-1/2 -translate-y-1/2 w- p-5 z-10  duration-300 ease-in-out cursor-pointer hover:opacity-100',
                active === 2 ? 'opacity-0 pointer-events-none' : 'opacity-60 pointer-events-auto'
            )}>
                <FaArrowRight className='text-white text-xl md:text-3xl' />
            </button>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '.prev-button',
                    nextEl: '.next-button',
                }}
                speed={500}
                spaceBetween={50}
                slidesPerView={1}
                onActiveIndexChange={(swiper) => setActive(swiper.realIndex)}
                className='relative w-full h-full'
            >
                {
                    mockup === 1 && (
                        [0, 1, 2].map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col justify-center items-center w-full h-full'>
                                    <LazyImage alt='mockup' src={mockup1} className='w-full h-full object-cover' />
                                </div>
                            </SwiperSlide>
                        ))
                    )
                }
                {
                    mockup === 2 && (
                        [0, 1, 2].map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col justify-center items-center w-full h-full'>
                                    <LazyImage alt='mockup' src={mockup2} className='w-full h-full object-cover' />
                                </div>
                            </SwiperSlide>
                        ))
                    )
                }
                {
                    mockup === 3 && (
                        [0, 1, 2].map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col justify-center items-center w-full h-full'>
                                    <LazyImage alt='mockup' src={mockup3} className='w-full h-full object-cover' />
                                </div>
                            </SwiperSlide>
                        ))
                    )
                }
                {
                    mockup === 4 && (
                        [0, 1, 2].map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col justify-center items-center w-full h-full'>
                                    <LazyImage alt='mockup' src={mockup4} className='w-full h-full object-cover' />
                                </div>
                            </SwiperSlide>
                        ))
                    )
                }


            </Swiper>
        </div>
    )
}

export default SwiperPortofolio
