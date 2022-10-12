import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CardItem from "../Card_item";
import effect from "../../assets/images/effects/menu_effect.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Col, Row, Container } from "react-bootstrap";
import "./index.scss";

function ProductCarousel(props) {

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
                            <img src={effect}/>
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
                        // autoplay={{ 
                        //     delay: props.delay,
                        //     disableOnInteraction: false,
                        // }}
                    >
                        <Row>
                            <Col md={12}>
                                <SwiperSlide
                                    key={1}
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
                                    key={2}
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
                                    key={3}
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
                                    key={4}
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
                                    key={5}
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
                                    key={6}
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
                                    key={7}
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
                                    key={8}
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
                                    key={9}
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
                                    key={10}
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
                                    key={11}
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
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
