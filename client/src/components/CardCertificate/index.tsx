import { useEffect, useRef, type FC } from 'react'
import ShadowBox from '../../components/ShadowBox'
import LazyImage from '../../components/LazyImage'
import ParallaxToTop from '../ParallaxToTop';


type Props = {
    category: string;
    title: string;
    instruktur: string;
    idCertificate: string;
    linkCertificate: string;
    courseProvider: string;
    img: string;
    handleSetShowModal: (value: boolean) => void;
}
const CardCertificate: FC<Props> = ({ category, title, instruktur, courseProvider, img, handleSetShowModal, idCertificate, linkCertificate }) => {


    // handle click
    const buttonRef = useRef<HTMLButtonElement>(null);
    const linkRef = useRef<HTMLAnchorElement>(null);
    useEffect(() => {
        if (buttonRef.current && linkRef.current) {
            const target = buttonRef.current;
            const link = linkRef.current;
            if (target) {
                const handleClick = (event: MouseEvent) => {
                    if (target.contains(event.target as Node) && !link.contains(event.target as Node)) {
                        handleSetShowModal(true);
                    }
                }

                target.addEventListener('click', handleClick);
                return () => {
                    target.removeEventListener('click', handleClick);
                };
            }
        }
    }, [buttonRef])


    return (
        <ParallaxToTop>
            <button ref={buttonRef} type='button' className='w-full h-[25.5rem] bg-tertiary-light relative rounded-xl flex flex-col justify-center items-center md:w-[27rem]'>
                {/* shadow */}
                <ShadowBox rounded='xl' />
                {/* img */}
                <div className='flex-1 w-full overflow-hidden rounded-t-xl'>
                    <div className='w-full h-full'>
                        <LazyImage src={img} alt='certificate' className='w-full h-full object-cover' />
                    </div>
                </div>
                {/* desc */}
                <div className='flex-1/6 w-full flex flex-col justify-start items-start px-4 pt-4 gap-2 md:flex-1/12'>
                    {/* category */}
                    <h3 className='capitalize text-md font-light italic text-[#ff014f]'>
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
                        {/* id certificate */}
                        <TextDesc title='id certificate' ket={idCertificate} />
                        {/* link certificate */}
                        <div className='w-full flex flex-row justify-start items-start gap-2'>
                            <p className='capitalize text-xs font-normal text-primary text-left min-w-26'>
                                link certificate :
                            </p>
                            <a ref={linkRef} href={linkCertificate} target='_blank' className='text-xs font-medium text-blue-400 text-left capitalize hover:underline'>
                                go to link certificate
                            </a>
                        </div>
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
        <div className='w-full flex flex-row justify-start items-start gap-2'>
            <p className='capitalize text-xs font-normal text-primary text-left min-w-26'>
                {title} :
            </p>
            <p className='text-xs font-medium text-text-primary text-left'>
                {ket}
            </p>
        </div>
    )
}

export default CardCertificate
