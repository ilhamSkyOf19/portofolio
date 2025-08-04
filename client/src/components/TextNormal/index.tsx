import clsx from 'clsx';
import { type FC } from 'react'

type Props = {
    children: string;
    classname?: string
}

const TextNormal: FC<Props> = ({ children, classname }) => {
    return (
        <p className={clsx(
            'text-md font-normal text-text-primary opacity-80 ',
            classname,
        )}>
            {children}
        </p>
    )
}

export default TextNormal
