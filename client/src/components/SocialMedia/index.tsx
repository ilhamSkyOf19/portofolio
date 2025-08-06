import type { FC, RefObject } from "react";
import { useButtonHref } from "../../hook/useButtonHref";
import BoxHrefIcon from "../BoxHrefIcon";
import { FiFacebook } from "react-icons/fi";
import { FaGithub, FaInstagram } from "react-icons/fa";

// component social media 
const SocialMedia: FC = () => {
    const [buttonfacebook, buttonInstagram, buttonGithub] = [
        useButtonHref('a'),
        useButtonHref('a'),
        useButtonHref('a')];

    return (
        <div className='w-full flex flex-row justify-start items-center gap-6'>
            {/* facebook */}
            <BoxHrefIcon buttonRef={buttonfacebook.buttonRef as RefObject<HTMLAnchorElement>} mouseDown={buttonfacebook.mouseDown} link='https://www.facebook.com/IlhamRizky' icon={FiFacebook} />
            {/* instagram */}
            <BoxHrefIcon buttonRef={buttonInstagram.buttonRef as RefObject<HTMLAnchorElement>} mouseDown={buttonInstagram.mouseDown} link='https://www.facebook.com/IlhamRizky' icon={FaInstagram} />
            {/* github */}
            <BoxHrefIcon buttonRef={buttonGithub.buttonRef as RefObject<HTMLAnchorElement>} mouseDown={buttonGithub.mouseDown} link='https://github.com/ilhamSkyOf19' icon={FaGithub} />
        </div>
    )
}


export default SocialMedia