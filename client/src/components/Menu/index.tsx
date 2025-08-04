import { type FC } from 'react'

type Props = {
    setSideBar: (value: boolean) => void
    label: string
    id: string
}

const Menu: FC<Props> = ({ setSideBar, label, id }) => {
    return (
        <a href={`#${id}`} className='uppercase text-md font-normal text-text-primary opacity-80 hover:text-white py-2.5' onClick={() => setSideBar(false)}>{label}</a>
    )
}

export default Menu
