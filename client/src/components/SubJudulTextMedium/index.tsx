import { type FC } from 'react'



// type props
type Props = {
    text: string;
}
const SubJudulTextMedium: FC<Props> = ({ text }) => {
    return (
        <h2 className='uppercase text-md font-medium text-text-primary opacity-80 tracking-[0.1rem]'>{text}</h2>
    )
}

export default SubJudulTextMedium;
