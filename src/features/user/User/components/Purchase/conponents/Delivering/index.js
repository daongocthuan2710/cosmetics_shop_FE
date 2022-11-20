import React from "react";
import { Col, Row, NavLink } from 'react-bootstrap';
import "./index.scss";

export default function Delivering() {

    return (
      <>
        <Col md={12} className="all_type">
            <Row className="sidenav__matches__autocomplete-suggestion">
                <Col
                    xs={3}
                    sm={3}
                    className="sidenav__matches__autocomplete-suggestion__suggestion-thumb"
                >
                    <NavLink to="/about">
                        <img
                        src="/assets/images/header/logo_header.png"
                        className="img-fluid rounded-top"
                        alt="lipstick_1"
                        />
                    </NavLink>
                </Col>
                <Col xs={9} sm={9}>
                <Col
                    xs={12}
                    sm={12}
                    className="sidenav__matches__autocomplete-suggestion__suggestion-title"
                >
                    <NavLink to="/about">
                    Nước Hoa Hồng Neutrogena Oil-Free Acne Stress Control
                    Triple-Action Toner
                    </NavLink>
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    className="sidenav__matches__autocomplete-suggestion__suggestion-price"
                >
                    <span className="sidenav__matches__autocomplete-suggestion__suggestion-price__woocommerce-Price-amount"> 
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(270000)}
                    </span>
                </Col>
                </Col>
            </Row>
        </Col>
      </>
    );
  }  