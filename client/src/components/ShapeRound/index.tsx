import clsx from 'clsx';
import { type FC } from 'react'


// type props 
type Props = {
    size: number;
    color: string;
    opacity?: number;
    center?: boolean;
    position?: [(number | ''), (number | ''), (number | ''), (number | '')];
}
const ShapeRound: FC<Props> = ({ size, color, position, opacity, center }) => {

    // destructure
    const [left, right, top, bottom] = position ?? ['', '', '', ''];

    return (
        <div className={clsx(
            'absolute rounded-full',
            center && 'left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
        )}
            style={{
                opacity: `${opacity ? opacity : 1}`,
                width: `${size ? size : 4}rem`,
                height: `${size ? size : 4}rem`,
                backgroundColor: `${color}`,
                left: left !== '' ? `${left}rem` : undefined,
                right: right !== '' ? `${right}rem` : undefined,
                top: top !== '' ? `${top}rem` : undefined,
                bottom: bottom !== '' ? `${bottom}rem` : undefined,
            }}
        />
    )
}

export default ShapeRound
