import { useEffect, useRef, useState, type FC, type RefObject } from 'react'
import TitleSection from '../../components/TitleSection'
import CardPortofolio from '../../components/CardPortofolio'
import ShapeOne from '../../components/ShapeTamplate/ShapeOne'
import ModalPortofolio from '../../components/modals/ModalPortofolio'
import { useClickOutSide } from '../../hook/useClickOutSide'
import LazyImage from '../../components/LazyImage'
import ShapeTwo from '../../components/ShapeTamplate/ShapeTwo'




// mockup 
import mockup1 from '../../assets/mockups/mockup-1.png'
import mockup2 from '../../assets/mockups/mockup-2.png'



const SectionMyProtofolio: FC = () => {

    // state
    const [id, setId] = useState<string>('');
    // ref
    const cardRef = useRef<HTMLDivElement>(null);
    // handle click out side 
    const { ref, active, setActive } = useClickOutSide(cardRef as RefObject<HTMLDivElement>);

    // handle scroll modal active 
    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
        } else (
            document.body.style.overflow = "auto"
        )

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [active])

    // handle active 
    const handleActive = (id: string) => {
        setActive(true);
        setId(id);
    }

    useEffect(() => {
        console.log(id)
    }, [id])


    return (
        <section id='portfolio' className='w-full min-h-[100vh] flex flex-col justify-start items-center bg-tertiary-light pt-12 gap-16 relative'>
            {/* title */}
            <TitleSection subJudul='visit my portofolio and keep your feedback' title='my portfolio' />

            {/* container card */}
            <div ref={cardRef} className='w-full flex flex-col justify-start items-center gap-10 px-3'>
                <CardPortofolio
                    id='1'
                    shape={
                        <ShapeOne color='#87ceeb'>
                            <LazyImage alt='mockup' src={mockup1} className='w-full h-full object-cover' />
                        </ShapeOne>
                    }
                    type='development'
                    title='Develop Fake E-commerce API For Full Online Store'
                    handleActive={handleActive}
                />
                <CardPortofolio
                    id='2'
                    shape={
                        <ShapeTwo color='#fbbf24'>
                            <LazyImage alt='mockup' src={mockup2} className='w-full h-full object-cover' />
                        </ShapeTwo>
                    }
                    type='development'
                    title='Develop App Catatan Celengan Full Rest API'
                    handleActive={handleActive}
                />
            </div>
            {/* modal */}
            <ModalPortofolio refComponent={ref as RefObject<HTMLDivElement>} active={active} id={id} setActive={setActive} />
        </section>
    )
}

export default SectionMyProtofolio
