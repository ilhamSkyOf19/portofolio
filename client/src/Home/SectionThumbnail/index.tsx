import { memo, type FC } from 'react'
import LazyImage from '../../components/LazyImage';

// img
import personHd from '../../assets/img/person/person-hd.png';

const SectionThumbnail: FC = () => {
    return (
        <section className='w-full flex flex-col justify-start items-center min-h-lvh bg-tertiary-light'>
            {/* img */}
            <div className='flex-1 w-full flex flex-row justify-center items-end relative '>
                <div className='w-[97%] h-[45vh] shadow-[0_-20px_30px_rgba(255,255,255,0.03)] rounded-lg ' />

                {/* img */}
                <div className='w-[97%] h-full absolute bottom-0 flex flex-col justify-end items-center overflow-hidden rounded-lg'>
                    <div className='w-[110%] h-full rounded-lg  flex flex-col justify-end items-center relative'>
                        <LazyImage src={personHd} alt='logo' className='w-[88%] h-full object-cover z-2' />

                        {/* shadow bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/20 to-transparent opacity-15 pointer-events-none z-1" />

                    </div>

                </div>


            </div>
            <div className='flex-1 w-full flex flex-row justify-start items-center'>

            </div>
        </section>
    )
}

export default memo(SectionThumbnail);
