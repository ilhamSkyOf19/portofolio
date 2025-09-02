import { useEffect, useState, type FC } from 'react'
import TitleSection from '../../components/TitleSection'
import CardCertificate from '../../components/CardCertificate'
import ModalCertificate from '../../components/modals/ModalCertificate'
import ParallaxToTop from '../../components/ParallaxToTop'

// img
import certificateUdemy from '../../assets/sertifikat/e-certificate-udemy.png'
import certificateReact from '../../assets/sertifikat/e-certificate-udemy-react.jpg'
import certificateCodingStudio from '../../assets/sertifikat/Sertifikat_Fundamental_Front-End_Web_Development_II.png'
import fullStackJavascriptMernWebCourseLms from '../../assets/sertifikat/full-stack-javascript-mern-2025-web-course-lms.png'

const SectionCertificate: FC = () => {
    // state 
    const [showModal, setShowModal] = useState<boolean>(false);
    const [imgModal, setImgModal] = useState<string>('');

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


    // handle modal 
    const handleModal = (img: string) => {
        setShowModal(true);
        setImgModal(img);
    }

    // const data certificate 


    return (
        <section id='certificate' className='w-full h-auto py-12 bg-tertiary-light flex flex-col justify-start items-center px-2.5'>
            {/* title */}
            <ParallaxToTop>
                <TitleSection subJudul='certificate' title='my certificate' />
            </ParallaxToTop>
            {/* container cards certificate */}
            <div className='grid grid-cols-1 w-full px-2 md:flex md:flex-row place-content-center md:pt-4 gap-12 md:flex-wrap'>
                {/* card 1 */}
                <CardCertificate category='e-certificate' title='Sertifikat Penyelesaian - HTML, CSS, Javascript Pemula sampai Mahir' instruktur='Programmer Zaman Now' courseProvider='Udemy' img={certificateUdemy} handleSetShowModal={() => handleModal(certificateUdemy)} idCertificate='UC-e8a421ad-a6fb-4431-b15e-44403ee38692' linkCertificate='https://ude.my/UC-e8a421ad-a6fb-4431-b15e-44403ee38692' />
                {/* card 2 */}
                <CardCertificate category='e-certificate' title='Sertifikat Penyelesaian - React Masterclass Untuk Semua' instruktur='Yudi Krisnadi' courseProvider='Udemy' img={certificateReact} handleSetShowModal={() => handleModal(certificateReact)} idCertificate='UC-25a9f08e-1d33-4555-a557-717888617fd4' linkCertificate='https://ude.my/UC-25a9f08e-1d33-4555-a557-717888617fd4' />
                {/* card 3 */}
                <CardCertificate category='e-certificate' title='Sertifikat Penyelesaian - Fundamental Front-End Web Development II' instruktur='Instruktur Coding Studio' courseProvider='Coding Studio' img={certificateCodingStudio} handleSetShowModal={() => handleModal(certificateCodingStudio)} idCertificate='9leqhumaZK' linkCertificate='https://member.codingstudio.id/certificate/9leqhumaZK' />
                {/* card 4 */}
                <CardCertificate category='e-certificate' title='Sertifikat Penyelesaian - Full-Stack JavaScript MERN 2025: Web Course LMS' instruktur='Angga Setiawan' courseProvider='BuildWithAngga' img={fullStackJavascriptMernWebCourseLms} handleSetShowModal={() => handleModal(fullStackJavascriptMernWebCourseLms)} idCertificate='6UZeRSAGrm' linkCertificate='https://buildwithangga.com/cek-sertifikat' />
            </div>


            {/* modal certificate */}
            <ModalCertificate showModal={showModal} setShowModal={setShowModal} img={imgModal} />
        </section>
    )
}





export default SectionCertificate
