import { type FC } from 'react'
import LayoutPage from '../layouts/LayoutPage'
import SectionThumbnail from './SectionThumbnail'
import SectionWhatIDo from './SectionWhatIDo'

const Home: FC = () => {
    return (
        <LayoutPage>
            <SectionThumbnail />
            <SectionWhatIDo />
        </LayoutPage>
    )
}

export default Home
