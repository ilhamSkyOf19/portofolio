import { type FC } from 'react'
import LayoutPage from '../layouts/LayoutPage'
import SectionThumbnail from './SectionThumbnail'
import Features from './SectionFeatures'
import SectionMyProtofolio from './SectionMyProtofolio'
import SectionAbout from './SectionAbout'
import SectionMyTech from './SectionMyTech'
import SectionSkillSetPersentase from './SectionSkillSetPersentase'
import Footer from './Footer'
import SectionCertificate from './SectionCertificate'

const Home: FC = () => {
    return (
        <LayoutPage>
            <SectionThumbnail />
            <Features />
            <SectionMyProtofolio />
            <SectionAbout />
            <SectionMyTech />
            <SectionSkillSetPersentase />
            <SectionCertificate />
            <Footer />
        </LayoutPage>
    )
}

export default Home
