import React from "react";
import { Col, Row, NavLink } from 'react-bootstrap';
import {products} from "../../../../../../../assets/images/datas/products";
import {errors} from "../../../../../../../assets/images/datas/errors";
import { useState } from "react";
import "./index.scss";

export default function AllType() {
    const [imgSrc, setImgSrc] = useState(null);

    return (
      <>
        <Col md={12} className="all_type">
            <Row className="all_type_order">
                <Col xs={10} sm={9}>
                    <Row>
                        <Col
                            xs={3}
                            sm={3}
                        >
                            <NavLink to="/about">
                                <img
                                    src={imgSrc ? imgSrc : products['mask1.png']}
                                    onError={() => (setImgSrc(errors['no_image.jpg']))}
                                    className="img-fluid rounded-top"
                                    alt="lipstick_1"
                                />
                            </NavLink>
                        </Col>
                        <Col xs={9} sm={9} className="mt-3 all_type_order_detail">
                            <Col
                                xs={12}
                                sm={12}                              
                            >
                                <NavLink to="/about">
                                Nước Hoa Hồng Neutrogena Oil-Free Acne Stress Control
                                Triple-Action Toner
                                </NavLink>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                className="mt-4"
                            >
                                x1
                            </Col>
                        </Col>
                    </Row>
                </Col>
                <Col xs={2} sm={3}>
                    <span className="sidenav__matches__autocomplete-suggestion__suggestion-price__woocommerce-Price-amount"> 
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(270000)}
                    </span>
                </Col>     
            </Row>
            <hr/>
        </Col>
      </>
    );
  }  