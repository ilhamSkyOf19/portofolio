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