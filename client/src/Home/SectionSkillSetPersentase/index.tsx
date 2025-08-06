import { memo, useEffect, useState, type FC } from 'react'
import TitleSection from '../../components/TitleSection'
import type { TypeDataSkillSet } from '../../types/types'
import CardSkillSet from '../../components/CardSkillSet'
import TextNormal from '../../components/TextNormal'

const SectionSkillSetPersentase: FC = () => {
    // state
    const [design, setDesign] = useState<TypeDataSkillSet[]>([]);
    const [languageProgramming, setLanguageProgramming] = useState<TypeDataSkillSet[]>([]);
    const [framework, setFramework] = useState<TypeDataSkillSet[]>([]);
    const [database, setDatabase] = useState<TypeDataSkillSet[]>([]);
    const [tools, setTools] = useState<TypeDataSkillSet[]>([]);

    useEffect(() => {
        // 🎨 Design Tools
        setDesign([
            { skill: "Canva", persentase: 75 },
            { skill: "Figma", persentase: 60 },
        ]);

        // 💻 Programming Languages
        setLanguageProgramming([
            { skill: "HTML", persentase: 90 },
            { skill: "CSS", persentase: 90 },
            { skill: "JavaScript", persentase: 90 },
            { skill: "TypeScript", persentase: 90 },
            { skill: "PHP", persentase: 70 },
        ]);

        // ⚡ Framework & Library (termasuk UI & CSS framework)
        setFramework([
            { skill: "React", persentase: 85 },
            { skill: "Next.js", persentase: 60 },
            { skill: "Express.js", persentase: 80 },
            { skill: "Expo", persentase: 80 },
            { skill: "TailwindCSS", persentase: 90 },
            { skill: "Vite", persentase: 80 },
        ]);

        // 🗄️ Database & ORM
        setDatabase([
            { skill: "MongoDB", persentase: 75 },
            { skill: "MySQL", persentase: 90 },
            { skill: "Prisma", persentase: 85 }, // ORM
        ]);

        // 🛠 Tools & Package Manager
        setTools([
            { skill: "Git", persentase: 90 },
            { skill: "GitHub", persentase: 80 },
            { skill: "Vercel", persentase: 80 },
            { skill: "ChatGPT", persentase: 85 }, // AI assistant
        ]);
    }, []);



    return (
        <section id='skillset' className='w-full h-auto bg-tertiary-light flex flex-col justify-start items-center py-12'>
            {/* title */}
            <TitleSection subJudul='skills set' title='my skills set' />

            {/* content skill set */}
            <div className='grid grid-cols-1 gap-16 px-2 md:grid-cols-2 md:gap-10 lg:grid-cols-3 mb-18'>
                <CardSkillSet skillSet='one' title='Design' data={design} />
                <CardSkillSet skillSet='two' title='Database & ORM' data={database} />
                <CardSkillSet skillSet='three' title='Programming' data={languageProgramming} />
                <CardSkillSet skillSet='four' title='Tools & Package Manager' data={tools} />
                <CardSkillSet skillSet='five' title='Framework' data={framework} />
            </div>
            <TextNormal classname='text-center px-4'>
                I consistently aim to employ the right techniques and methods to attain the optimal results.
            </TextNormal>
        </section>
    )
}

export default memo(SectionSkillSetPersentase);
