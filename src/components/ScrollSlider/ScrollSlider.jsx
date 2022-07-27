import React from "react";
import "./styles.scss";
import CubeSvg from "../../assets/icons/ScrollbarSlider/CubeSvg";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Scrollbar} from "swiper/core";
import "swiper/css/scrollbar";

SwiperCore.use([Scrollbar]);

export default () => {
    return (
        <>
            <main className='scroll_slider'>
                <div className="main-wrap">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={50}
                        initialSlide={0}
                        centeredSlides={true}
                        scrollbar={{draggable: true, dragSize: 200}}
                    >
                        <SwiperSlide>
                            <CubeSvg/>
                            <p>Fix virtual 3D objects in the real world at specific locations.</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>예제</p>
                            <span>2021.05.30 | 예제</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>예제</p>
                            <span>2021.05.30 | 예제</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>예제</p>
                            <span>2021.05.30 | 예제</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>예제</p>
                            <span>2021.05.30 | 예제</span>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </main>
        </>

    );
}

