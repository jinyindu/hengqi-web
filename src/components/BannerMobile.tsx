import React, { FC, memo, useCallback, useEffect, useState } from "react";
import type { StaticImageData } from "next/image";
import Background from './Background'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper/types/swiper-class";
import classNames from "classnames";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

interface BannerData {
}

interface SlideData {
  bgImg?: StaticImageData;
  render: Function;
}

export interface CustomPaginationData<T> {
  changeSlide: (index: number) => () => void;
  activeIndex: number;
  slideData?: T[];
  bannerData?: any[]
}

const Slide: FC<{ data: any; index: number }> = memo((props) => {
  const {
    data: { bgImg, render },
    index,
  } = props;
  return (
    <>
      {bgImg ? (
          <div key={index} className="relative h-[23.1026rem] w-full pt-[25px]">
            <Background src={bgImg} priority={true} alt="" />
            {render()}
          </div>
      ) : (
        <div>{render()}</div>
      )}
    </>
  );
});
Slide.displayName = "Slide";

const bannerData = [
  {
    bgImg: "https://cdn2.weimob.com/saas/@assets/saas-fe-website-h5-stc/_next/static/media/L101.ea36f933.jpg",
    render: () => (
      <div className="relative text-center">
      </div>
    )
  },
  {
    bgImg: "https://cdn2.weimob.com/saas/@assets/saas-fe-website-h5-stc/_next/static/media/L101.ea36f933.jpg",
    render: () => (
      <div className="relative text-center">
      </div>
    )
  },
  {
    bgImg: "https://cdn2.weimob.com/saas/@assets/saas-fe-website-h5-stc/_next/static/media/L101.ea36f933.jpg",
    render: () => (
      <div className="relative text-center">
      </div>
    )
  }
];
const CustomPagination: React.FC<CustomPaginationData<SlideData>> = memo((props) => {
  const { changeSlide, activeIndex } = props;
  return (
    <div className="relative mx-auto w-full">
      <ul className="absolute bottom-[24px] left-1/2 z-10 flex -translate-x-1/2 justify-between rounded-[14px] bg-[#000B17]/10 px-[24px] py-[12px]">
        {bannerData.map((slide, index) => {
          return (
            <li
              key={index}
              onClick={changeSlide(index)}
              className={classNames(
                "z-20 mr-[12px] h-[4px] w-[28px] last:mr-[0px]",
                activeIndex === index ? "bg-[#0071EF] opacity-100" : "bg-[#17181B] opacity-10"
              )}
            ></li>
          );
        })}
      </ul>
    </div>
  );
});
CustomPagination.displayName = "CustomPagination";

const Banner: FC<BannerData> = (props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mainSwiper, setMainSwiper] = useState<any>();
  const changeSlide = useCallback(
    (index: number) => () => {
      setActiveIndex(index);
      mainSwiper.slideTo(index);
    },

    [mainSwiper]
  );
  useEffect(() => {
    const dom = document.getElementById("videoId") as HTMLMediaElement;
    if (dom) dom.play();
  });

  return (
    <div className="relative h-[23.1026rem] w-full">
      <Swiper
        onSwiper={setMainSwiper}
        onSlideChange={(e) => {
          setActiveIndex(e.activeIndex);
        }}
        className="w-full"
      >
        {bannerData.map((item, index) => (
          <SwiperSlide key={index} className="w-full">
            <Slide data={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomPagination
        changeSlide={changeSlide}
        activeIndex={activeIndex}
        bannerData={bannerData}
      />
  </div>
  );
};
export default Banner;
