import { useEffect, useState, type FC } from 'react'
import ShadowBox from '../ShadowBox'
import SubJudulPrimaryMedium from '../SubJudulPrimaryMedium'
import BoxPersentase from '../BoxPersentase'
import type { TypeDataSkillSet } from '../../types/types'
import { useInView } from 'react-intersection-observer'


type Props = {
    data: TypeDataSkillSet[];
    title: string
    skillSet: string
}
const CardSkillSet: FC<Props> = ({ data, title, skillSet }) => {

    // lazy component 
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    // animated
    const [animated, setAnimated] = useState<number[]>(Array(data.length).fill(0));
    // set persentase animated
    useEffect(() => {
        if (inView) {
            data.forEach((item, index) => {
                setTimeout(() => {
                    setAnimated((prev) => {
                        const updated = [...prev];
                        updated[index] = item.persentase;
                        return updated;
                    })
                }, index * 200)
            })
        }
    }, [inView])



    return (
        <div className=' w-full flex flex-col justify-start items-center'>
            {/* card skill set */}
            <div className='w-full h-auto py-10 px-4 bg-tertiary-light relative gap-6 flex flex-col justify-start items-start'>
                {/* shadow */}
                <ShadowBox rounded='md' />

                {/* content title card */}
                <div ref={ref} className='w-full flex flex-col justify-start items-start gap-3'>
                    {/* sub title */}
                    <SubJudulPrimaryMedium text={`skill set ${skillSet}`} style='capitalize' />
                    {/* title */}
                    <h3 className='uppercase text-2xl font-semibold text-text-primary'>
                        {title}
                    </h3>
                </div>
                {
                    data.map((item, index) => (
                        <BoxPersentase key={index} persentase={animated[index]} skill={item.skill} />
                    ))
                }
            </div>
        </div>
    )
}

export default CardSkillSet
