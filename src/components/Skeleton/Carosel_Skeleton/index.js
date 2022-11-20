import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row, Container } from "react-bootstrap";
import Skeleton from '@mui/material/Skeleton';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./index.scss";
import CardItem from "../../Card_item";

export default function Carousel_Skeleton(props) {

    return (
        <>
            <div className="suntory-recent-products" style={{backgroundImage:'none'}}>
                <Container fluid>
                <Row>
                    {props.title
                    ?
                        <div className="hometitle-wrapper">
                            <div className="skeleton_carosel">
                                <Skeleton 
                                    variant="text" 
                                    width="30%"
                                    height={40}
                                    animation={'pulse'}
                                />
                            </div>
                            <div className="skeleton_carosel">
                                <Skeleton 
                                    variant="text" 
                                    width="30%"
                                    height={40}
                                    animation={'pulse'}
                                />
                            </div>
                        </div>
                    : ''}

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
                    >
                        <Row>
                            <Col md={12}>
                                <SwiperSlide
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
                                    className="swiper-slide"
                                >
                                    <CardItem/>
                                </SwiperSlide>
                                <SwiperSlide
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