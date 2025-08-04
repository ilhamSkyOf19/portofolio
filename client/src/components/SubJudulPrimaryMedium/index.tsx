import { type FC } from 'react'


// type props 
type Props = {
    text: string;
}
const SubJudulPrimaryMedium: FC<Props> = ({ text }) => {
    return (
        <h2 className='text-center font-normal text-md text-primary uppercase tracking-[0.05rem]'>{text}</h2>
    )
}

export default SubJudulPrimaryMedium
