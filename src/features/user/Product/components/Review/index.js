import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Form from "react-bootstrap/Form";
import TextRating from "../../../../../components/RatingStar";
import Pagination from '@mui/material/Pagination';
import {avatars} from "../../../../../assets/images/datas/avatars";
import "./index.scss";

export default function Review(props) {

  const activeFilter = (event) => {
    document.querySelectorAll("#star-filter li").forEach((e) => {
      e.classList.remove("active");
    });
    event.currentTarget.classList.toggle("active");    
  };
  
  const [reviews, setReviews] = useState({
    review_title: "Fiat",
    review_details: "500",
    review_date: "white",
  });

  return (
    <>
      <Container fluid className="review">
        <Row className="review__head">
          <Col md={12} sm={12} xs={12} className="review__head__title">
            <p>Customer Reviews</p>
          </Col>
          <Col md={12} sm={12} xs={12} className="review__head__average-rating">
            <Row>
              <Col xl={2} md={4} sm={4} xs={5} className="review__head__average-rating__text" >
                <span>0</span> /5 Star
              </Col>
              <Col xl={10} md={8} sm={8} xs={7} className="review__head__average-rating__star">
                <TextRating value={4.5} />
              </Col>
            </Row>
          </Col>
          <Col md={12} sm={12} xs={12} id="star-filter" className="review__head__filter-star">
            <ul>
              <li onClick={activeFilter}>All (16)</li>
              <li onClick={activeFilter}>5 star (3)</li>
              <li onClick={activeFilter}>4 star (4)</li>
              <li onClick={activeFilter}>3 star (3)</li>
              <li onClick={activeFilter}>2 star (4)</li>
              <li onClick={activeFilter}>1 star (3)</li>
            </ul>
          </Col>
          <Row className="review__head__show-select">
            <Col md={5} sm={5} xs={12} className="review__head__show-select__text">
              <p>Showing 0 - 1 of 1 reviews</p>
            </Col>
            <Col md={7} sm={7} xs={12}>
              <Row>
                <Col xl={5} md={7} sm={7} xs={7}>
                  <Form.Select
                    aria-label="Default select example"
                    className="review-select sort-select"
                  >
                    <option>Sort by date</option>
                    <option value="newestToOldest">Newest to oldest</option>
                    <option value="oldestToNewest">Oldest to Newest</option>
                  </Form.Select>
                </Col>
                <Col xl={7} md={5} sm={5} xs={5}>
                  <Form.Select
                    aria-label="Default select example"
                    className="review-select show-select"
                  >
                    <option value="5">Show 5</option>
                    <option value="10">Show 10</option>
                    <option value="15">Show 15</option>
                    <option value="20">Show 20</option>
                  </Form.Select>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
        <Row className="review__body">
          <Row>
            <hr></hr>
            <Col xs={1} sm={1} md={2} lg={2} className="review__body__avatar">
              <img src={avatars["man_avt.png"]} alt="Thuận Đào"/>
            </Col>
            <Col xs={11} sm={11} md={10} lg={10} className="review__body__content">
              <Row>
                <Col md={12} sm={12} sx={12} className="review__body__content__user-name">
                  <p>Thuận Đào</p>
                </Col>
                <Col md={12} sm={12} sx={12} className="review__body__content__rating">
                  <TextRating value={4}/>
                </Col>
                <Col md={12} sm={12} sx={12} className="review__body__content__date">
                  <p>Tháng Mười 12, 2022</p>
                </Col>
                <Col md={12} sm={12} sx={12} className="review__body__content__comment">
                  <p>Sản phẩm nói chung cũng oke, xài được, ship nhanh</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <hr></hr>
            <Col xs={1} sm={1} md={2} className="review__body__avatar">
              <img src={avatars["woman_avt.png"]} alt="Ngọc Trâm"/>
            </Col>
            <Col xs={11} sm={11} md={10} className="review__body__content">
              <Row>
                <Col md={12} sm={12} sx={12} className="review__body__content__user-name">
                  <p>Ngọc Trâm</p>
                </Col>
                <Col md={12} sm={12} sx={12} className="review__body__content__rating">
                  <TextRating value={4}/>
                </Col>
                <Col md={12} sm={12} sx={12} className="review__body__content__date">
                  <p>Tháng Mười 12, 2022</p>
                </Col>
                <Col md={12} sm={12} sx={12} className="review__body__content__comment">
                  <p>Shop tư vấn nhiệt tình, ship nhanh, chất lượng sản phẩm tốt, sẽ tiếp tục ủng hộ shop</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="review__body__pagination">
              <Pagination 
                count={10} 
                shape="rounded" 
                // page= {3}
                defaultPage={3}
                // // onChange={handleChange}
                siblingCount={1} 
                boundaryCount={1}
              />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}
