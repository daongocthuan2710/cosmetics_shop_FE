import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CardItem from "../Card_item";
import { Col, Row, Container } from "react-bootstrap";
import {effects} from "../../assets/images/datas/effects";
import {errors} from "../../assets/images/datas/errors";
import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./index.scss";

function ProductCarousel(props) {
    const [imgSrc, setImgSrc] = useState(null);
 
    return (
        <>
            <div className="suntory-recent-products">
                <Container fluid>
                <Row>
                    <div className="hometitle-wrapper">
                        <h3 className="home-title">
                            {props.name}
                        </h3>
                        <div className="home-effect">
                            <img 
                                src={ imgSrc? imgSrc : effects['menu_effect.png']} 
                                alt=""
                                onError={() => (setImgSrc(errors['no_image.jpg']))}
                            />
                        </div>
                    </div>
                    <Swiper
                        className="border border-black mt-2 p-0 swiper-wrapper"
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerGroup={2}
                        grabCursor={true}
                        spaceBetween={10}
                        breakpoints={{
                            300: {
                                slidesPerView: 2,
                                },
                            576: {
                            slidesPerView: 3,
                            },
                            992: {
                            slidesPerView: 4,
                            },
                            1200: {
                                slidesPerView: 6,
                                },
                        }}
                        navigation
                        autoplay={{ 
                            delay: props.delay,
                            disableOnInteraction: false,
                        }}
                    >
                        <Row>
                            <Col md={12}>
                            {props.productList?
                            props.productList.map((item) => (
                                <SwiperSlide
                                    key={item.id}
                                    className="swiper-slide"
                                >
                                    <CardItem productInfo={item}/>
                                </SwiperSlide>
                            )) : ""
                            }
                            </Col>
                        </Row>
                    </Swiper>
                </Row>
                </Container>
            </div>
        </>
    );
}

export default ProductCarousel;
