import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import "./styles.scss";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// import required modules

export default function Test() {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

        </>
    );
}













// import React, { useEffect } from "react";
// import { useAnimation, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import './styles.scss'
// const squareVariants = {
//     visible: { opacity: 1, scale: 4, transition: { duration: 2 } },
//     hidden: { opacity: 0, scale: 0 }
// };
// function Square() {
//     const controls = useAnimation();
//     const [ref, inView] = useInView();
//     useEffect(() => {
//         if (inView) {
//             controls.start("visible");
//         }
//     }, [controls, inView]);
//     return (
//         <motion.div
//             ref={ref}
//             animate={controls}
//             initial="hidden"
//             variants={squareVariants}
//             className="left"
//         >
//             <div className="polygon"></div>
//         </motion.div>
//     );
// }
// export default function Test() {
//     return (
//         <div className="App">
//             <h1 className="title">Scroll Down</h1>
//             <Square />
//             <Square />
//             <Square />
//             <Square />
//         </div>
//     );
// }