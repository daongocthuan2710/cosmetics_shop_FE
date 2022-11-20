import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import {sliders} from "../../assets/images/datas/sliders";
import {errors} from "../../assets/images/datas/errors";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./index.scss";


function Slider() {
    const [imgSrc, setImgSrc] = useState(null);
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
                    <img 
                        src={imgSrc ? imgSrc : sliders["slide1.jpg"]}
                        onError={() => (setImgSrc(errors['no_image.jpg']))}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src={imgSrc ? imgSrc : sliders["slide2.jpg"]} 
                        onError={() => (setImgSrc(errors['no_image.jpg']))}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src={imgSrc ? imgSrc : sliders["slide3.jpg"]} 
                        onError={() => (setImgSrc(errors['no_image.jpg']))}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
