import { type FC } from 'react'
import SubJudulPrimaryMedium from '../SubJudulPrimaryMedium'
import JudulSection from '../JudulSection'
import clsx from 'clsx';


type Props = {
    subJudul: string;
    title: string;
    position?: 'items-start' | 'items-center'
}
const TitleSection: FC<Props> = ({ subJudul, title, position }) => {
    return (
        <div className={clsx(
            'w-full text-center flex flex-col justify-start items-center gap-4 mb-14',
            position ? position : 'items-center'
        )}>
            <SubJudulPrimaryMedium text={subJudul} />
            <JudulSection text={title} />
        </div>
    )
}

export default TitleSection
