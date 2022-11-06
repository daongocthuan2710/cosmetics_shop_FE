import React from "react";
import InputSpinner from "react-bootstrap-input-spinner";
import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";

function ProductDetail(props) {
    return (
        <Container className="product-detail">
            <Row className="product-detail__body">
                <Col xs={5} sm={5} md={3} className="label">
                    Mã
                </Col>
                <Col xs={7} sm={7} md={9} className="content">
                    N/A
                </Col>
            </Row>
            <Row className="product-detail__body">
                <Col xs={5} sm={5} md={3} className="label">
                    Danh Mục
                </Col>
                <Col xs={7} sm={7} md={9} className="content">
                    Cushion
                </Col>
            </Row>
            <Row className="product-detail__body">
                <Col xs={5} sm={5} md={3} className="label">
                    Kho hàng
                </Col>
                <Col xs={7} sm={7} md={9} className="content">
                37853
                </Col>
            </Row>
            <Row className="product-detail__body">
                <Col xs={5} sm={5} md={3} className="label">
                    Gửi từ
                </Col>
                <Col xs={7} sm={7} md={9} className="content">                   
                    Huyện Hoài Đức, Hà Nội
                </Col>
            </Row>
        </Container>
    );
}   

export default ProductDetail;
