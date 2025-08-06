import { type FC } from 'react'
import LayoutPage from '../layouts/LayoutPage'
import SectionThumbnail from './SectionThumbnail'
import Features from './SectionFeatures'
import SectionMyProtofolio from './SectionMyProtofolio'
import SectionAbout from './SectionAbout'
import SectionMyTech from './SectionMyTech'
import SectionSkillSet from './SectionSkillSet'
import Footer from './Footer'

const Home: FC = () => {
    return (
        <LayoutPage>
            <SectionThumbnail />
            <Features />
            <SectionMyProtofolio />
            <SectionAbout />
            <SectionMyTech />
            <SectionSkillSet />
            <Footer />
        </LayoutPage>
    )
}

export default Home
