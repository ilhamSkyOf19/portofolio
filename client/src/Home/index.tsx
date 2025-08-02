import { type FC } from 'react'
import LayoutPage from '../layouts/LayoutPage'
import SectionThumbnail from './SectionThumbnail'

const Home: FC = () => {
    return (
        <LayoutPage>
            <SectionThumbnail />
            <div className='w-full min-h-lvh bg-white'>

            </div>
        </LayoutPage>
    )
}

export default Home
