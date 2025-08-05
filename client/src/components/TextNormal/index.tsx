import clsx from 'clsx';
import { type FC } from 'react'

type Props = {
    children: string;
    size?: string;
    classname?: string
}

const TextNormal: FC<Props> = ({ size, children, classname }) => {
    return (
        <p className={clsx(
            ' font-normal text-text-primary opacity-80 ',
            classname,
            size ? size : 'text-md',

        )}>
            {children}
        </p>
    )
}

export default TextNormal
