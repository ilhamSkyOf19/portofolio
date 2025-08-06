import { useInView } from "react-intersection-observer";


export const useView = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    return { ref, inView };
}