import { useEffect, useState, type FC } from 'react'
import TitleSection from '../../components/TitleSection'
import CardCertificate from '../../components/CardCertificate'

// img
import certifcateUdemy from '../../assets/sertifikat/e-certificate-udemy.png'
import ModalCertificate from '../../components/modals/ModalCertificate'
import ParallaxToTop from '../../components/ParallaxToTop'

const SectionCertificate: FC = () => {
    // state 
    const [showModal, setShowModal] = useState<boolean>(false);

    // handle scroll
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else (
            document.body.style.overflow = "auto"
        )

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [showModal])

    return (
        <section id='certificate' className='w-full h-auto py-12 bg-tertiary-light flex flex-col justify-start items-center px-2.5'>
            {/* title */}
            <ParallaxToTop>
                <TitleSection subJudul='certificate' title='my certificate' />
            </ParallaxToTop>
            {/* container cards certificate */}
            <div className='grid grid-cols-1 w-full px-2 md:flex md:flex-row place-content-center md:pt-4'>
                {/* card */}
                <CardCertificate category='e-certificate' title='Sertifikat Penyelesaian - HTML, CSS, Javascript Pemula sampai Mahir' instruktur='Programmer Zaman Now' courseProvider='Udemy' img={certifcateUdemy} handleSetShowModal={setShowModal} />
            </div>


            {/* modal certificate */}
            <ModalCertificate showModal={showModal} setShowModal={setShowModal} id={1} />
        </section>
    )
}





export default SectionCertificate
