export type TypeDataSkillSet = {
    skill: string;
    persentase: number;
}

export type TypePropsParallax = {
    children: React.ReactNode;
    duration?: 'transition-500' | 'transition-700'
    delay?: number
}

export type SectionType = 'home' | 'aboutme' | 'features' | 'mytech' | 'portofolio' | 'skillset' | 'thankyou';



export type TypeDataPortofolio = {
    id: number;
    type: string;
    title: string;
    highlight: string;
    design: string[];
    codeEditor: string;
    tools: string[];
    framework: string[];
    color: string;
    database: string[];
    link: string;
}


// type data certificate
export type TypeDataCertificate = {
    name: string;
    img: string;
    instruktur: string;
    linkCertificate: string;
    idCertificate: string;
    courseProvider: string;
}