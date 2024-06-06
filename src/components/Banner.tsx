'use client'
import { useState, memo, useCallback, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
import type { StaticImageData } from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import classNames from "classnames";
import Background from './Background'
import styles from "./index.module.css";
import banner from '@/assets/images/banner.png'

const bannerList: any = [{
  title: '',
  banner: banner
}]

SwiperCore.use([Autoplay, EffectFade]);

const loadBanner = (list: []) => {
  let slideData: any[] = []
  list && list?.map((item: any, index: number)=> {
    slideData.push({
      render: () => (
        <div className="mx-auto h-full max-w-[1920px] border border-[#fff] flex">
          <div className="wrapper flex justify-between relative z-10">
            <div className="text-black-primary pt-[220px]">
              <h2 className="mb-[20px] text-[48px] leading-[48px] text-[#fff]">{item.title}</h2>
            </div>
          </div>
        </div>
      ),
      src: item.banner,
    })
  })

  return slideData
}

interface SlideData {
  src?: StaticImageData;
  render: Function;
}
export interface CustomPaginationData<T> {
  changeSlide: (index: number) => () => void;
  activeIndex: number;
  slideData?: T[];
  data: T[]
}

const Slide: React.FC<{ data: any; index: number }> = memo((props) => {
  const {
    data: { src, render },
    index,
  } = props;
  return (
    <div
      className={classNames("swiper-no-swiping relative h-[380px]")}
    >
      {src ? (
        <div
          className={classNames(
            index === 0 ? "z-10" : "",
            "relative mx-auto h-[380px] w-full min-w-[1180px]"
          )}
        >
          <Background src={src} priority alt="" />
          {render()}
        </div>
      ) : (
        <div>{render()}</div>
      )}
    </div>
  );
});
Slide.displayName = "Slide";

const CustomPagination: React.FC<CustomPaginationData<SlideData>> = memo((props) => {
  const { changeSlide, activeIndex,data } = props;
  const start = useRef<any>(null);
  const ref = useRef<any>(null);
  const rafId = useRef<any>(null);

  useEffect(() => {
    start.current = null;
    const step = (timestamp: DOMHighResTimeStamp) => {
      if (start.current === null) {
        start.current = timestamp;
      }

      const elapsed = timestamp - start.current;
      if (elapsed <= 5000) {
        let dom = ref.current as HTMLElement;
        if (dom) {
          dom.style.width = Math.min((elapsed / 5000) * 100, 100) + "%";
        }
        rafId.current = window.requestAnimationFrame(step);
      }
    };
    rafId.current = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(rafId.current);
    };
  }, [activeIndex]);

  const handleClick = (_index: number) => {
    changeSlide(_index)();
  };

  return (
    <div className="wrapper">
      <ul className="absolute bottom-[88px] z-20 flex h-[24px]">
        {data.map((slide, index: number) => {
          return (
            <div
              key={index}
              className="cursor-pointer py-[10px]"
              onClick={() => handleClick(index)}
            >
              <li className="mr-[8px] h-[3px] w-[36px] bg-[#000B17]/[0.1]">
                {activeIndex === index && <div ref={ref} className="h-[3px] bg-[#FFF]" />}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
});
CustomPagination.displayName = "CustomPagination";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mainSwiper, setMainSwiper] = useState<any>();

  const slideData = loadBanner(bannerList)
  
  const changeSlide = useCallback(
    (index: number) => () => {
      setActiveIndex(index);
      mainSwiper.slideTo(index);
      mainSwiper.autoplay.start();
    },
    [mainSwiper]
  );

  const handleMouseEnter = () => {
    if (mainSwiper) {
      mainSwiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    mainSwiper.autoplay.start();
  };

  return (
    <div
      className={classNames(
        "homeBanner relative h-[380px] min-w-[1180px] overflow-hidden mt-[60px]",
        styles.swiper
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        speed={300}
        onSwiper={setMainSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        pagination={{ type: "custom" }}
        height={560}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        virtualTranslate={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
      >
        {slideData.map((item, index) => (
          <SwiperSlide key={index}>
            <Slide data={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomPagination changeSlide={changeSlide} activeIndex={activeIndex} data={slideData}/>
    </div>
  );
};
export default Banner;
