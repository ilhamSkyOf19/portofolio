import { type FC } from 'react'
import CountUp from 'react-countup';

type Props = {
    skill: string;
    persentase: number;
}
const BoxPersentase: FC<Props> = ({ persentase, skill }) => {
    return (
        <div className='w-full flex flex-col justify-start items-start'>
            {/* skill */}
            <h4 className='uppercase text-md font-light text-text-primary tracking-[0.2rem]'>
                {skill}
            </h4>

            {/* persentase skill */}
            <div className='w-full flex flex-col justify-start items-start relative'>
                {/* persentase value */}
                <div className='h-4.5 relative transition-all duration-[2200ms] ease-in-out' style={{ width: `${persentase ? persentase : 0}%` }}>
                    <p className='text-sm font-normal text-text-primary text-right tracking-[0.1rem]'>
                        <CountUp start={0} end={persentase ? persentase : 0} duration={1} suffix='%' />
                    </p>
                </div>
                {/* persentase bar */}
                <div className='bg-gradient-to-t from-tertiary-light to-tertiary-dark h-3 w-full rounded-full p-[0.15rem]'>
                    <div className='bg-gradient-to-r from-purple-400 to-pink-600 h-full transition-all duration-[2200ms] ease-in-out rounded-full' style={{ width: `${persentase ? persentase : 0}%` }} />
                </div>
            </div>
        </div>
    )
}

export default BoxPersentase
