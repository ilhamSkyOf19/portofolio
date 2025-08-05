import { type FC } from 'react'
import TitleSection from '../../components/TitleSection'
import SubjudulMedium from '../../components/SubJudulMedium'
import BoxIconSvg from '../../components/BoxIconSvg';


// icons svg
import canva from '../../assets/svg/canva.svg';
import expo from '../../assets/svg/expo.svg';
import expressjs from '../../assets/svg/expressjs.svg';
import javascript from '../../assets/svg/javascript.svg';
import mongodb from '../../assets/svg/mongodb.svg';
import mysql from '../../assets/svg/mysql.svg';
import nextjs from '../../assets/svg/nextjs.svg';
import nodejs from '../../assets/svg/nodejs.svg';
import npm from '../../assets/svg/npm.svg';
import reactjs from '../../assets/svg/react.svg';
import tailwindcss from '../../assets/svg/tailwind.svg';
import pnpm from '../../assets/svg/pnpm.svg';
import php from '../../assets/svg/php.svg';
import prisma from '../../assets/svg/prisma.svg';
import react from '../../assets/svg/react.svg';
import typescript from '../../assets/svg/typescript.svg';
import vercel from '../../assets/svg/vercel.svg';
import vite from '../../assets/svg/vite.svg';
import html from '../../assets/svg/html.svg';
import css from '../../assets/svg/css.svg';
import vscode from '../../assets/svg/vscode.svg';
import figma from '../../assets/svg/figma.svg';
import git from '../../assets/svg/git.svg';
import github from '../../assets/svg/github.svg';
import chatgpt from '../../assets/svg/chatgpt.svg';
import windsurf from '../../assets/svg/windsurf.svg';




const SectionSkills: FC = () => {


    return (
        <section id='skills' className='w-full min-h-[100vh] bg-tertiary-light px-3 py-16'>
            {/* title */}
            <TitleSection subJudul='skills' title='my tech stack' />

            {/* container tech */}
            <ContainerTech title='tools tech' icon={[canva, figma, vscode, git, github, chatgpt, windsurf]} />

            <ContainerTech title='skills & tech programming' icon={[html, css, javascript, typescript, php, reactjs, nextjs, nodejs, mysql, mongodb, expressjs, npm, pnpm, tailwindcss, vite, vercel, prisma, react, expo]} />
        </section>
    )
}


type ContainerTechProps = {
    title: string;
    icon: string[];
}
// container tech 
const ContainerTech: FC<ContainerTechProps> = ({ title, icon }) => {
    return (
        <div className='w-full flex flex-col justify-center items-center mt-18'>
            {/* title tech */}
            <SubjudulMedium text={title} />

            {/* tech */}
            <div className='w-[80%] pt-8 flex flex-row justify-center items-center flex-wrap gap-8'>
                {
                    icon.map((item, index) => (
                        <BoxIconSvg key={index}>
                            <div className='w-8 h-10'>
                                <img src={item} alt='canva' className='w-full h-full object-contain' loading='lazy' />
                            </div>
                        </BoxIconSvg>
                    ))
                }
            </div>
        </div>
    )
}

export default SectionSkills
