import React from "react";
import {lipstick as product} from "../../../../../assets/images/datas/lipstick.js";
import InputSpinner from "react-bootstrap-input-spinner";
import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";

function ProductInfo(props) {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-6 col-xs-12 card__img">
                    <img
                        src={product[props.productInfo.product_photo]}
                        className="img-fluid rounded-start"
                        alt="..."
                    />
                    <div className="promotion">
                        -23%
                    </div>
                </div>
                <div className="col-md-6 col-xs-12 card__body">
                    <div className="card-body basel-scroll-content card__body__info">
                        <h1 className="product-title">
                            Son Shu Uemura Rouge Unlimited Matte Lipstick Rouge À Lèvres M OR 570 (3g)
                        </h1>
                        <p className="price">
                            <span className="origin-price">550,000đ</span>
                            <span className="promotion-price text-danger">&nbsp; 425,000đ &nbsp;</span>
                            <span className="label-deal">Hot deal</span>
                        </p>
                        <div className="value">
                            <select id="pa_tone-mau" defaultValue="0" className="attribute_pa_tone-mau" aria-label="Default select example">
                                <option value="0">Chọn một tùy chọn</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>   
                        </div>
                        <Container className="card__body__info__cart" style={{padding:'0'}}>
                            <Row style={{margin:'0'}}>
                                <Col md={3} xs={4} className="quantity">
                                    <InputSpinner
                                        editable={true}
                                        type={"real"}
                                        precision={2}
                                        max={10}
                                        min={0}
                                        step={1}
                                        value={1}
                                        // onChange={(num) => setN(num)}
                                        variant={"secondary"}
                                        size=""
                                    />
                                </Col>
                                <Col md={9} xs={8} className="inventory">
                                    <div> Còn lại 112 sản phẩm</div>
                                </Col>
                            </Row>
                            <Row className="mt-3"> 
                                <Col md={7} xs={7}>
                                    <div className="add-to-cart">
                                        Thêm Vào Giỏ Hàng
                                    </div>
                                </Col>
                                <Col md={5} xs={5}>
                                    <div className="buy-now">
                                        Mua Ngay
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <hr/>
                        <div className="call-order">
                            <p>
                                <span> Gọi đặt mua và kiểm tra hàng tại cửa hàng: </span> 
                                <span style={{color:"#e74040"}}>0886 838 939</span>
                                </p>
                            <p>hoặc <span style={{color:"#e74040"}}>1900 636 737</span> (Ấn phím 1)</p>
                            <p>Thời gian hoạt động: 9h - 21h</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}   

export default ProductInfo;
