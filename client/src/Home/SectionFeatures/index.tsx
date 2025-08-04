import { memo, type FC } from 'react'
import SubJudulPrimaryMedium from '../../components/SubJudulPrimaryMedium'
import JudulSection from '../../components/JudulSection'
import { useButtonHref } from '../../hook/useButtonHref';
import CardWhatIDo from '../../components/CardWhatIDo';

// icons
import { CiGlobe, CiMobile3 } from "react-icons/ci";
import { FaCode } from 'react-icons/fa6';


const Features: FC = () => {
    return (
        <section id='features' className='bg-tertiary-light w-full min-h-lvh mt-0.5 flex flex-col justify-start items-items py-18'>
            {/* title */}
            <div className='w-full flex flex-col justify-start items-center gap-4'>
                <SubJudulPrimaryMedium text='features' />
                <JudulSection text='what i do' />
            </div>

            {/* content card */}
            <ContentCard />
        </section>
    )
}

// content card
const ContentCard: FC = () => {
    const [webDevlopment, mobileDevlopment, fullStack] = [useButtonHref('div'), useButtonHref('div'), useButtonHref('div')];
    return (
        <div className='w-full flex flex-col justify-start items-center px-2.5 gap-12 pt-12'>
            {/* web devlopment */}
            <CardWhatIDo title='Web Devlopment' icon={CiGlobe} desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos amet consectetur adipisicing elit.  .' ref={webDevlopment.buttonRef as React.RefObject<HTMLDivElement>} click={webDevlopment.mouseDown} setClick={webDevlopment.setMouseDown} />

            {/* App Devlopment */}
            <CardWhatIDo title='Mobile Devlopment' icon={CiMobile3} desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos amet consectetur adipisicing elit.  .' ref={mobileDevlopment.buttonRef as React.RefObject<HTMLDivElement>} click={mobileDevlopment.mouseDown} setClick={mobileDevlopment.setMouseDown} />

            {/* full stack */}
            <CardWhatIDo title='Mobile Devlopment' icon={FaCode} desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos amet consectetur adipisicing elit.  .' ref={fullStack.buttonRef as React.RefObject<HTMLDivElement>} click={fullStack.mouseDown} setClick={fullStack.setMouseDown} />

        </div>
    )
}







export default memo(Features); 
