import { type FC } from 'react'
import ShadowBox from '../../components/ShadowBox'
import LazyImage from '../../components/LazyImage'
import ParallaxToTop from '../ParallaxToTop';


type Props = {
    category: string;
    title: string;
    instruktur: string;
    courseProvider: string;
    img: string;
    handleSetShowModal: (value: boolean) => void;
}
const CardCertificate: FC<Props> = ({ category, title, instruktur, courseProvider, img, handleSetShowModal }) => {
    return (
        <ParallaxToTop>
            <button type='button' className='w-full h-[22rem] bg-tertiary-light relative rounded-xl flex flex-col justify-center items-center md:w-[27rem]' onClick={() => handleSetShowModal(true)}>
                {/* shadow */}
                <ShadowBox rounded='xl' />
                {/* img */}
                <div className='flex-1 w-full overflow-hidden rounded-t-xl'>
                    <div className='w-full h-full'>
                        <LazyImage src={img} alt='certificate' className='w-full h-full object-cover' />
                    </div>
                </div>
                {/* desc */}
                <div className='flex-1/6 w-full flex flex-col justify-start items-start px-3 pt-4 gap-2 md:flex-1/12'>
                    {/* category */}
                    <h3 className='capitalize text-sm font-light italic text-primary'>
                        {category}
                    </h3>
                    {/* title */}
                    <h2 className='text-lg font-semibold text-text-primary text-left'>
                        {title}
                    </h2>
                    <div className='flex flex-col justify-start items-start gap-1'>
                        {/* instruktur */}
                        <TextDesc title='instructor' ket={instruktur} />
                        {/* course provider */}
                        <TextDesc title='course provider' ket={courseProvider} />
                    </div>
                </div>
            </button>
        </ParallaxToTop>
    )
}


type TextDescProps = {
    title: string;
    ket: string;
}

// container text desc 
const TextDesc: FC<TextDescProps> = ({ title, ket }) => {
    return (
        <div className='flex flex-row justify-start items-start gap-2'>
            <p className='capitalize text-xs font-normal text-primary'>
                {title} :
            </p>
            <p className='text-xs font-medium text-text-primary'>
                {ket}
            </p>
        </div>
    )
}

export default CardCertificate
