import { type FC } from 'react'
import SubJudulPrimaryMedium from '../SubJudulPrimaryMedium'
import JudulSection from '../JudulSection'


type Props = {
    subJudul: string;
    title: string;
}
const TitleSection: FC<Props> = ({ subJudul, title }) => {
    return (
        <div className='w-full text-center flex flex-col justify-start items-center gap-4 mb-14'>
            <SubJudulPrimaryMedium text={subJudul} />
            <JudulSection text={title} />
        </div>
    )
}

export default TitleSection
