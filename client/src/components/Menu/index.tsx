import clsx from 'clsx'
import { type FC } from 'react'

type Props = {
    setSideBar: (value: boolean) => void
    label: string
    id: string
    size?: 'text-xs' | 'text-sm' | 'text-md';
    active: boolean
}

const Menu: FC<Props> = ({ setSideBar, label, id, size, active }) => {
    return (
        <a href={`#${id}`} aria-label='link' className={clsx(
            'w-full uppercase font-normal text-white opacity-50 transition-all duration-300 ease-in-out hover:opacity-100 py-2.5 md:w-auto',
            size ? size : 'text-md',
            active ? 'opacity-100' : 'opacity-60'
        )} onClick={() => setSideBar(false)}>{label}</a>
    )
}

export default Menu
