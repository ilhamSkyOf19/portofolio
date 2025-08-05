import { type FC } from 'react'
import LayoutPage from '../layouts/LayoutPage'
import SectionThumbnail from './SectionThumbnail'
import Features from './SectionFeatures'
import SectionMyProtofolio from './SectionMyProtofolio'

const Home: FC = () => {
    return (
        <LayoutPage>
            <SectionThumbnail />
            <Features />
            <SectionMyProtofolio />
        </LayoutPage>
    )
}

export default Home
