import clsx from 'clsx'
import { type FC } from 'react'

type Props = {
    setSideBar: (value: boolean) => void
    label: string
    id: string
    size?: 'text-xs' | 'text-sm' | 'text-md';
}

const Menu: FC<Props> = ({ setSideBar, label, id, size }) => {
    return (
        <a href={`#${id}`} className={clsx(
            'w-full uppercase font-normal text-text-primary opacity-80 hover:text-white py-2.5 md:w-auto',
            size ? size : 'text-md',
        )} onClick={() => setSideBar(false)}>{label}</a>
    )
}

export default Menu
