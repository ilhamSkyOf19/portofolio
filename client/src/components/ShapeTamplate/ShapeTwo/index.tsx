import { type FC, type ReactNode } from 'react'
import ShapeRound from '../../ShapeRound'


type Props = {
    color: string
    children?: ReactNode
}
const ShapeTwo: FC<Props> = ({ color, children }) => {
    return (
        <div className='h-full w-full bg-black rounded-2xl relative flex flex-col justify-center items-center overflow-hidden z-10'>
            {/* shape */}
            {/* bottom left */}
            <ShapeRound color={color} size={4.5} position={[0, '', 3, '']} opacity={0.3} />
            {/* center */}
            <ShapeRound color={color} size={5} center={true} opacity={0.1} />
            {/* top right */}
            <ShapeRound color={color} size={2} position={['', 1, '', 0]} opacity={1} />

            {/* front */}
            <div className='w-full h-full flex flex-col justify-center items-center backdrop-blur-xl'>
                <>
                    {children !== undefined ? (
                        children
                    ) : (
                        null
                    )}
                </>
            </div>
        </div>

    )
}

export default ShapeTwo
