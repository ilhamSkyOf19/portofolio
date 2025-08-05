import { FaGithub } from "react-icons/fa";
import ShadowBox from "../ShadowBox";
import type { FC } from "react";

type ButtonViewProjectProps = {
    link: string;
}
// button view project
const ButtonViewProject: FC<ButtonViewProjectProps> = ({ link }) => {
    return (
        <a href={link} target='_blank' className='flex flex-row justify-center items-center h-14 w-50 bg-tertiary-light rounded-md relative gap-6'>
            {/* shadow */}
            <ShadowBox rounded='md' />
            {/* text */}
            <p className='uppercase text-md font-medium text-primary'>
                View Project
            </p>
            {/* icons */}
            <div className='w-3 h-full flex flex-col justify-center items-center relative'>
                <FaGithub className='text-2xl text-primary top-[1rem] absolute' />
            </div>
        </a>
    )
}


export default ButtonViewProject;