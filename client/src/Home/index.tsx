import { type FC } from 'react'
import LayoutPage from '../layouts/LayoutPage'
import SectionThumbnail from './SectionThumbnail'
import Features from './SectionFeatures'
import SectionMyProtofolio from './SectionMyProtofolio'
import SectionAbout from './SectionAbout'
import SectionMyTech from './SectionMyTech'
import SectionSkillset from './SectionSkillset'

const Home: FC = () => {
    return (
        <LayoutPage>
            <SectionThumbnail />
            <Features />
            <SectionMyProtofolio />
            <SectionAbout />
            <SectionMyTech />
            <SectionSkillset />
        </LayoutPage>
    )
}

export default Home
