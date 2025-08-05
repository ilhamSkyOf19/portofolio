import { type FC } from 'react'


type Props = {
    label: string;
}
const BoxElementPortofolio: FC<Props> = ({ label }) => {
    return (
        <div className='flex flex-col justify-center items-center py-3 px-4.5 bg-tertiary-light rounded-lg'>
            <p className='tex-sm text-text-primary capitalize font-semibold'>
                {label}
            </p>
        </div>
    )
}

export default BoxElementPortofolio
