import React from "react";
import {slider} from "./datas.js";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./index.scss";


function Slider() {

    return (
        <>
            <Swiper
                className="border border-black mt-2"
                modules={[Navigation, Pagination, Autoplay]}
                mousewheel={true}
                keyboard={true}
                spaceBetween={-60}
                slidesPerView = {1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <img src={slider['slide1']} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider['slide2']} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider['slide3']} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
