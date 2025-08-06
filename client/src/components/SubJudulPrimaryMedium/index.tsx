import clsx from 'clsx';
import { type FC } from 'react'


// type props 
type Props = {
    text: string;
    style?: string;
}
const SubJudulPrimaryMedium: FC<Props> = ({ text, style }) => {
    return (
        <h2 className={clsx(
            'font-normal text-md text-primary tracking-[0.1rem]',
            style ? style : 'uppercase'
        )}>{text}</h2>
    )
}

export default SubJudulPrimaryMedium
