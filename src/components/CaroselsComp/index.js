import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CardItem from "../Card_item";
import { Col, Row, Container } from "react-bootstrap";
import Carousel_Skeleton from "../Skeleton/Carosel_Skeleton/index.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./index.scss";
import productApi from "../../api/productApi";
import { Loading } from "notiflix";

function ProductCarousel(props) {
    // const [productList, setProductList] = useState(props.productList || []);

    // const fetchProducts =  async () => {
    //     Loading.hourglass({
    //       clickToClose: true,
    //       svgSize: "50px",
    //       svgColor: "rgb(223, 139, 42)",
    //       backgroundColor: "rgb(255, 255, 255)"
    //       })
    //     try{ 
    //       const response = await productApi.getProducts({category:props.cateId});
    //       setProductList(response.data.content);
    //     } catch(error) {
    //       console.log("Fail to fetch products", error);
    //     }
    //     Loading.remove();
    //   }

    //   useEffect(() => {
    //     fetchProducts();
    //   }, []);

    return (
        <>
        {props.productList.length > 0
         ?  <div className="suntory-recent-products">
                <Container fluid>
                <Row>
                    <div className="hometitle-wrapper">
                        <h3 className="home-title">
                            {props.name} 
                        </h3>
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
                            {props.productList
                            .map((item) => (
                                <SwiperSlide
                                    key={item.id}
                                    className="swiper-slide"
                                >
                                    <CardItem productInfo={item}/>
                                </SwiperSlide>
                            ))}
                            </Col>
                        </Row>
                    </Swiper>
                </Row>
                </Container>
            </div>
        : <Carousel_Skeleton title={true}/>
        }
        </>
    );
}

export default ProductCarousel;
