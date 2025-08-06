import type { FC, RefObject } from "react";
import { useButtonHref } from "../../hook/useButtonHref";
import BoxHrefIcon from "../BoxHrefIcon";
import { FaGithub, FaInstagram } from "react-icons/fa";

// component social media 
const SocialMedia: FC = () => {
    const [buttonInstagram, buttonGithub] = [
        useButtonHref('a'),
        useButtonHref('a')];

    return (
        <div className='w-full flex flex-row justify-start items-center gap-6'>
            {/* instagram */}
            <BoxHrefIcon buttonRef={buttonInstagram.buttonRef as RefObject<HTMLAnchorElement>} mouseDown={buttonInstagram.mouseDown} link='https://www.instagram.com/iiaammr_?igsh=MTdtdzF3MmNpZndsdQ==' icon={FaInstagram} />
            {/* github */}
            <BoxHrefIcon buttonRef={buttonGithub.buttonRef as RefObject<HTMLAnchorElement>} mouseDown={buttonGithub.mouseDown} link='https://github.com/ilhamSkyOf19' icon={FaGithub} />
        </div>
    )
}


export default SocialMedia