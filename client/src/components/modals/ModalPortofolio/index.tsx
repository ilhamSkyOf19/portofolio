import clsx from 'clsx'
import { memo, useEffect, useRef, useState, type FC, type ReactNode, type RefObject } from 'react'
import ShapeOne from '../../ShapeTamplate/ShapeOne';
import ShapeTwo from '../../ShapeTamplate/ShapeTwo';
import SwiperPortofolio from '../../SwiperPortofolio';
import BoxElementPortofolio from '../../BoxElementPortofolio';


// icons 
import ButtonCloseShadow from '../../ButtonCloseShadow';
import TextNormal from '../../TextNormal';
import { useCloseModal } from '../../../hook/useCloseModal';
import ButtonLike from '../../ButtonLike';
import ButtonViewProject from '../../ButtonViewProject';


type Props = {
    id: string;
    refComponent: React.RefObject<HTMLDivElement>;
    active: boolean;
    setActive: (value: boolean) => void
}

const ModalPortofolio: FC<Props> = ({ id, refComponent, active, setActive }) => {
    // state 
    const [data, setData] = useState<string>('');
    const [color, setColor] = useState<string>('');

    // useEffect 
    useEffect(() => {
        if (id === '1') {
            const newColor = '#87ceeb';
            setData('develop fake e-comerce api ');
            setColor(newColor);
        } else if (id === '2') {
            const newColor = '#fbbf24';
            setData('develop app catatan celengan');
            setColor(newColor);

        }
    }, [id]);


    // handle animated hidden
    const refContainer = useRef<HTMLDivElement>(null);

    // use close modal 
    useCloseModal(refContainer as RefObject<HTMLDivElement>, active);

    // handle to top 
    useEffect(() => {
        if (active && refContainer.current) {
            refContainer.current.scrollTop = 0;
        }
    }, [active])



    return (
        <div ref={refContainer as RefObject<HTMLDivElement>} className={clsx(
            'fixed w-full h-screen top-0 left-0 bg-tertiary-light z-50 flex-col justify-start items-start px-4 pt-20 pb-12 overflow-y-scroll',
        )}>
            <div className='w-full flex flex-col justify-start items-center animate-fade-in'>
                <div ref={refComponent as RefObject<HTMLDivElement>} className='bg-tertiary-dark w-full min-h-[100vh] rounded-2xl pt-4 pb-12 px-4.5 relative shadow-2xl shadow-[rgba(255,_255,_255,_0.05)] md:px-14'>

                    {/* button close */}
                    <div className='w-full h-10 flex flex-row justify-end items-start mb-4'>
                        <ButtonCloseShadow action={setActive} size={2.5} />
                    </div>

                    {/* img */}
                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-6 line-black'>
                        <div className='bg-black w-full h-[15rem] rounded-2xl relative md:h-[30rem] lg:h-[25rem] '>
                            {id === '1' ? (
                                <ShapeOne color={color}>
                                    <SwiperPortofolio mockup={1} />
                                </ShapeOne>
                            ) : id === '2' ? (
                                <ShapeTwo color={color}>
                                    <SwiperPortofolio mockup={2} />
                                </ShapeTwo>
                            ) : null}
                        </div>

                        {/* desc */}
                        <div className='w-full flex flex-col justify-start items-start pt-8 relative pb-14 lg:pt-0 lg:pl-12'>
                            {/* title */}
                            <h2 className='text-2xl text-text-primary font-bold capitalize'>
                                {data}
                            </h2>
                            {/* description */}
                            <p className='text-lg text-text-primary opacity-80 mt-5 mb-6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit odio, esse distinctio debitis placeat nulla fugiat voluptatum saepe officia, sapiente quisquam soluta expedita laborum vel? Quis cumque quo neque fuga!
                            </p>
                            <div className='grid gird-cols-1 md:grid-cols-2 gap-6 '>
                                {/* spesifikasi design */}
                                <ElementSpresifikasi element='design'>
                                    <BoxElementPortofolio label='figma' />
                                    <BoxElementPortofolio label='canva' />
                                </ElementSpresifikasi>

                                {/* spesifikasi code editor */}
                                <ElementSpresifikasi element='code editor'>
                                    <BoxElementPortofolio label='VS code' />
                                </ElementSpresifikasi>

                                {/* spesifikasi tools */}
                                <ElementSpresifikasi element='tools'>
                                    <BoxElementPortofolio label='git' />
                                    <BoxElementPortofolio label='github' />
                                </ElementSpresifikasi>

                                {/* spesifikasi framework */}
                                <ElementSpresifikasi element='framework'>
                                    <BoxElementPortofolio label='react ts' />
                                    <BoxElementPortofolio label='tailwind' />
                                    <BoxElementPortofolio label='next js' />
                                </ElementSpresifikasi>
                            </div>

                            {/* button feedback */}
                            <div className='w-full flex flex-col justify-start items-start gap-7 mt-12 md:flex-row'>
                                {/* button like  */}
                                <ButtonLike />
                                {/* Button View Project */}
                                <ButtonViewProject link='https://github.com/ilhamSkyOf19/mern-mart' />
                            </div>
                        </div>
                    </div>

                    {/* desc detail */}
                    <div className='w-full h-auto flex flex-col justify-start items-start pt-10'>
                        {/* highlight */}
                        <TextNormal size='text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi possimus numquam reiciendis perferendis itaque labore, inventore sint quasi voluptatum.
                        </TextNormal>

                        {/* content desc */}
                        <div className='w-full h-full flex flex-col justify-start items-start pl-4'>
                            {/* element desc */}
                            <ElementDesc subJudul='description' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi possimus numquam reiciendis perferendis itaque labore, inventore sint quasi voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi possimus numquam reiciendis perferendis itaque labore, inventore sint quasi voluptatum.' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




// type element spesifikasi
type ElementSpesifikasiProps = {
    element: string;
    children: ReactNode
}
// element spesifikasi 
const ElementSpresifikasi: FC<ElementSpesifikasiProps> = ({ element, children }) => {
    return (
        <div className='w-full flex flex-col justify-start items-start gap-2'>
            {/* element */}
            <p className=' capitalize font-semibold text-lg text-white'>
                {element}
            </p>
            {/* description */}
            <div className='w-full flex-wrap flex flex-row justify-start items-start gap-4'>
                {children}
            </div>
        </div>
    )
}







type ElementDescProps = {
    subJudul: string;
    text: string
}
// element desc
const ElementDesc: FC<ElementDescProps> = ({ subJudul, text }) => {
    return (
        <div className='flex flex-col justify-start items-start gap-3'>
            {/* sub judul desc */}
            <h2 className='text-xl text-text-primary font-bold capitalize mt-4'>
                {subJudul}
            </h2>
            {/* text */}
            <TextNormal size='text-lg'>
                {text}
            </TextNormal>
        </div>
    )
}

export default memo(ModalPortofolio);
