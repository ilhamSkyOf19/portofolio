import clsx from 'clsx'
import { type Dispatch, type FC, type SetStateAction } from 'react'
import ButtonCloseShadow from '../../ButtonCloseShadow'
import ImgZoomInOut from '../../ImgZoomInOut'




type Props = {
    img: string;
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
}
const ModalCertificate: FC<Props> = ({ showModal, setShowModal, img }) => {
    return (
        <div className={clsx(
            "z-50 fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] flex flex-col justify-center items-center px-4 transition-500",
            showModal ? 'visible opacity-100' : 'invisible opacity-0'
        )}>
            {/* button close */}
            <div className="w-full flex flex-row justify-end items-center mb-2 md:mb-12 md:px-12 lg:w-[60%]">
                <ButtonCloseShadow size={3} action={setShowModal} />
            </div>
            <div className="w-full h-auto flex flex-col justify-center items-center md:w-[80%] lg:w-[45%]">
                <ImgZoomInOut src={img} />
            </div>
        </div>
    )
}

export default ModalCertificate
