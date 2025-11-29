import {
  memo,
  useEffect,
  useRef,
  useState,
  type FC,
  type RefObject,
} from "react";
import TitleSection from "../../components/TitleSection";
import CardPortofolio from "../../components/CardPortofolio";
import ShapeOne from "../../components/ShapeTamplate/ShapeOne";
import ModalPortofolio from "../../components/modals/ModalPortofolio";
import { useClickOutSide } from "../../hook/useClickOutSide";
import LazyImage from "../../components/LazyImage";

// mockup
import mockup1 from "../../assets/mockups/mockup-1.png";
import mockup2 from "../../assets/mockups/mockup-2.png";
import mockup3 from "../../assets/mockups/mockup-3.png";
import mockup4 from "../../assets/mockups/mockup-4.png";

// mockup ticket
import mockupTicket1 from "../../assets/mockups/mockup-ticket-1.png";

import ParallaxToTop from "../../components/ParallaxToTop";
import type { TypeDataPortofolio } from "../../types/types";
import dataPortofolio from "../../jsons/portofolioDatas.json";

const SectionMyProtofolio: FC = () => {
  // state
  const [id, setId] = useState<string>("");
  const [data, setData] = useState<TypeDataPortofolio[]>([]);
  // ref
  const cardRef = useRef<HTMLDivElement>(null);
  // handle click out side
  const { ref, active, setActive } = useClickOutSide(
    cardRef as RefObject<HTMLDivElement>
  );

  // handle scroll modal active
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  // handle active
  const handleActive = (id: string) => {
    setActive(true);
    setId(id);
  };

  // active section
  useEffect(() => {
    setData(dataPortofolio);
  }, []);

  return (
    <section
      id="portfolio"
      className="w-full h-auto flex flex-col justify-start items-center bg-tertiary-light py-12 relative"
    >
      {/* title */}
      <ParallaxToTop>
        <TitleSection
          subJudul="visit my portofolio and keep your feedback"
          title="my portfolio"
        />
      </ParallaxToTop>

      {/* container card */}
      <div
        ref={cardRef}
        className="w-full grid grid-cols-1 gap-10 px-3 md:grid-cols-2 lg:grid-cols-3 lg:place-content-center"
      >
        {data?.map((item, index) => (
          <CardPortofolio
            key={index}
            id={Number(item?.id ?? "").toString()}
            shape={
              <ShapeOne color={item?.color ?? ""}>
                <LazyImage
                  alt="mockup"
                  src={
                    item?.id === 1
                      ? mockup1
                      : item?.id === 2
                      ? mockup2
                      : item?.id === 3
                      ? mockup3
                      : item?.id === 4
                      ? mockup4
                      : item?.id === 5
                      ? mockupTicket1
                      : mockupTicket1
                  }
                  className="w-full h-full object-cover  md:group-hover:md:scale-105"
                  paddingActive={true}
                />
              </ShapeOne>
            }
            type={item?.type ?? ""}
            title={item?.title ?? ""}
            handleActive={handleActive}
          />
        ))}
      </div>
      {/* modal */}
      <ModalPortofolio
        refComponent={ref as RefObject<HTMLDivElement>}
        active={active}
        id={id}
        setActive={setActive}
      />
    </section>
  );
};

export default memo(SectionMyProtofolio);
