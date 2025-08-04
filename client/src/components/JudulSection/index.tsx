import { type FC } from 'react'



type Props = {
    text: string
}
const JudulSection: FC<Props> = ({ text }) => {
    return (
        <h1 className='font-bold text-4xl text-text-primary capitalize tracking-[0.05rem]'>{text}</h1>
    )
}

export default JudulSection
