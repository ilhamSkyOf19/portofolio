import type { FC } from "react";
import { TransformWrapper, TransformComponent, type ReactZoomPanPinchHandlers } from "react-zoom-pan-pinch";
import LazyImage from "../LazyImage";

// icons
import { FaMinus, FaPlus } from "react-icons/fa";

type Props = {
    src: string
}
const ImgZoomInOut: FC<Props> = ({ src }) => {
    return (
        <TransformWrapper initialScale={1}>
            {({ zoomIn, zoomOut, resetTransform }: ReactZoomPanPinchHandlers) => (
                <>
                    {/* button zoom */}
                    <div className="w-full flex-row justify-start items-center gap-4 mb-2 hidden">
                        <button onClick={() => zoomOut()} className="text-black h-7 px-3 bg-white font-bold rounded-xs">
                            <FaMinus className="text-xs" />
                        </button>
                        <button onClick={() => resetTransform()} className="text-black h-7 px-4 bg-white font-bold rounded-xs text-xs">
                            Reset
                        </button>
                        <button onClick={() => zoomIn()} className="text-black h-7 px-3 bg-white font-bold rounded-xs">
                            <FaPlus className="text-xs" />
                        </button>
                    </div>
                    {/* image */}
                    <TransformComponent>
                        <LazyImage src={src} alt="Zoomable" className="w-full h-full object-cover" />
                    </TransformComponent>
                </>
            )}
        </TransformWrapper>
    );
};

export default ImgZoomInOut;
