import clsx from 'clsx'
import { memo, useEffect, useRef, useState, type FC, type ReactNode, type RefObject } from 'react'
import ShapeOne from '../../ShapeTamplate/ShapeOne';
import ShapeTwo from '../../ShapeTamplate/ShapeTwo';
import SwiperPortofolio from '../../SwiperPortofolio';
import BoxElementPortofolio from '../../BoxElementPortofolio';


// json 
import dataPortofolio from '../../../jsons/portofolioDatas.json';

// icons 
import ButtonCloseShadow from '../../ButtonCloseShadow';
import { useCloseModal } from '../../../hook/useCloseModal';
import ButtonViewProject from '../../ButtonViewProject';
import type { TypeDataPortofolio } from '../../../types/types';


type Props = {
    id: string;
    refComponent: React.RefObject<HTMLDivElement>;
    active: boolean;
    setActive: (value: boolean) => void
}

const ModalPortofolio: FC<Props> = ({ id, refComponent, active, setActive }) => {
    // state 
    const [data, setData] = useState<TypeDataPortofolio>();

    // useEffect 
    useEffect(() => {
        setData(dataPortofolio.find((item) => item.id === parseInt(id)) as TypeDataPortofolio);
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
                <div ref={refComponent as RefObject<HTMLDivElement>} className='bg-tertiary-dark w-full min-h-[100vh] rounded-2xl pt-4 pb-12 px-4.5 relative shadow-2xl shadow-[rgba(255,_255,_255,_0.05)] md:px-14 lg:px-10'>

                    {/* button close */}
                    <div className='w-full h-10 flex flex-row justify-end items-start mb-4'>
                        <ButtonCloseShadow action={setActive} size={2.5} />
                    </div>

                    {/* img */}
                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-6'>
                        <div className='bg-black w-full h-[15rem] rounded-2xl relative md:h-[30rem] lg:h-[25rem] '>
                            {id === '1' ? (
                                <ShapeOne color={data?.color as string}>
                                    <SwiperPortofolio mockup={1} />
                                </ShapeOne>
                            ) : id === '2' ? (
                                <ShapeOne color={data?.color as string}>
                                    <SwiperPortofolio mockup={2} />
                                </ShapeOne>
                            ) : id === '3' ? (
                                <ShapeOne color={data?.color as string}>
                                    <SwiperPortofolio mockup={3} />
                                </ShapeOne>
                            ) : id === '4' ? (
                                <ShapeTwo color={data?.color as string}>
                                    <SwiperPortofolio mockup={4} />
                                </ShapeTwo>
                            ) : null}
                        </div>

                        {/* desc */}
                        <div className='w-full flex flex-col justify-start items-start pt-8 relative pb-14 lg:pt-0 lg:pl-12'>
                            {/* title */}
                            <h2 className='text-2xl text-text-primary font-bold capitalize'>
                                {data?.title}
                            </h2>
                            {/* description */}
                            <p className='text-lg text-text-primary opacity-80 mt-5 mb-6'>
                                {data?.highlight}
                            </p>
                            <div className='grid gird-cols-1 md:grid-cols-2 gap-6 '>
                                {/* spesifikasi design */}
                                <ElementSpresifikasi element='design'>
                                    {data?.design.map((item, index) => (<BoxElementPortofolio key={index} label={item} />))}
                                </ElementSpresifikasi>

                                {/* spesifikasi code editor */}
                                <ElementSpresifikasi element='code editor'>
                                    <BoxElementPortofolio label={data?.codeEditor ?? ''} />
                                </ElementSpresifikasi>

                                {/* spesifikasi tools */}
                                <ElementSpresifikasi element='tools'>
                                    {
                                        data?.tools.map((item, index) => (<BoxElementPortofolio key={index} label={item} />))
                                    }
                                </ElementSpresifikasi>

                                {/* spesifikasi framework */}
                                <ElementSpresifikasi element='framework'>
                                    {
                                        data?.framework.map((item, index) => (<BoxElementPortofolio key={index} label={item} />))}
                                </ElementSpresifikasi>

                                {/* spesifikasi databsae */}
                                <ElementSpresifikasi element='databases'>
                                    {
                                        data?.database.map((item, index) => (<BoxElementPortofolio key={index} label={item} />))}
                                </ElementSpresifikasi>
                            </div>

                            {/* button feedback */}
                            <div className='w-full flex flex-col justify-start items-start gap-7 mt-12 md:flex-row'>
                                {/* Button View Project */}
                                <ButtonViewProject link={data?.link ?? ''} />
                            </div>
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







export default memo(ModalPortofolio);
