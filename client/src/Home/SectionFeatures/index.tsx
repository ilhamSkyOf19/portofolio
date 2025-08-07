import { memo, type FC } from 'react'
import { useButtonHref } from '../../hook/useButtonHref';
import CardWhatIDo from '../../components/CardWhatIDo';

// icons
import { CiGlobe, CiMobile3 } from "react-icons/ci";
import { FaCode } from 'react-icons/fa6';
import TitleSection from '../../components/TitleSection';
import ParallaxToTop from '../../components/ParallaxToTop';



const Features: FC = () => {
    // active section


    return (
        <section id='features' className='bg-tertiary-light w-full min-h-[100vh] mt-0.5 flex flex-col justify-start items-items py-18'>
            {/* title */}
            <ParallaxToTop>
                <TitleSection subJudul='features' title='what i do' />
            </ParallaxToTop>

            {/* content card */}
            <ContentCard />
        </section>
    )
}

// content card
const ContentCard: FC = () => {
    const [webDevlopment, mobileDevlopment, fullStack] = [useButtonHref('div'), useButtonHref('div'), useButtonHref('div')];
    return (
        <div className='w-full grid grid-cols-1 px-2.5 gap-12 md:px-0 md:grid-cols-2 md:gap-9 lg:grid-cols-3'>
            {/* web devlopment */}
            <CardWhatIDo title='Web Devlopment' icon={CiGlobe} desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos amet ' ref={webDevlopment.buttonRef as React.RefObject<HTMLDivElement>} click={webDevlopment.mouseDown} />

            {/* App Devlopment */}
            <CardWhatIDo title='Mobile Devlopment' icon={CiMobile3} desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos amet consectetur ' ref={mobileDevlopment.buttonRef as React.RefObject<HTMLDivElement>} click={mobileDevlopment.mouseDown} />

            {/* full stack */}
            <CardWhatIDo title='Mobile Devlopment' icon={FaCode} desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos ame' ref={fullStack.buttonRef as React.RefObject<HTMLDivElement>} click={fullStack.mouseDown} />
        </div>
    )
}







export default memo(Features); 
