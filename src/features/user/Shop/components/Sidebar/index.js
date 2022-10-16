import React from "react";
import './index.scss';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Col, Container, Row } from "react-bootstrap";
import RatingStarCheckbox from "../RatingStarCheckBox";
import ProductOrigin from "../Product_Origin";
import Delivery from "../Delivery";
import Brand from "../Brand";
import PriceRange from "../Price_Range";

export default function Sidebar(props) {

  return (
  <>
    <div id="sidebar" className="sidebar">
        <Container style={{padding: "0"}} fluid className="sidebar-wrapper">
        <Row className="sidebar-wrapper__title"> 
            <Col>
                Danh Mục
            </Col>
        </Row>
        <Row className="sidebar-wrapper__navigation">
            <Navigation
            activeItemId="/thuong-hieu"
            onSelect={({itemId}) => {
            // maybe push to the route
            }}
            items={[
            {
                title: 'Thương hiệu',
                itemId: '/thuong-hieu',
                // you can use your own custom Icon component as well
                // icon is optional
                // elemBefore: () => <Icon name="inbox" />,
            },
            {
                title: 'Trang điểm',
                itemId: '/trang-diem',
                // elemBefore: () => <Icon name="users" />,
                subNav: [
                {
                    title: 'Face Makeup',
                    itemId: '/trang-diem/face-makeup',
                },
                {
                    title: 'Eyes Makeup',
                    itemId: '/trang-diem/eyes-makeup',
                },
                ],
            },
            {
                title: 'Chăm sóc da',
                itemId: '/cham-soc-da1',
                subNav: [
                {
                    title: 'Kem dưỡng da',
                    itemId: '/cham-soc-da1/kem-duong-da',
                },
                {
                    title: 'Mặt na',
                    itemId: '/cham-soc-da1/mat-na',
                }
                ],
            },
            {
                title: 'Chăm sóc da',
                itemId: '/cham-soc-da2',
                subNav: [
                {
                    title: 'Kem dưỡng da',
                    itemId: '/cham-soc-da2/kem-duong-da',
                },
                {
                    title: 'Mặt na',
                    itemId: '/cham-soc-da2/mat-na',
                }
                ],
            },
            {
                title: 'Chăm sóc da',
                itemId: '/cham-soc-da3',
                subNav: [
                {
                    title: 'Kem dưỡng da',
                    itemId: '/cham-soc-da3/kem-duong-da',
                },
                {
                    title: 'Mặt na',
                    itemId: '/cham-soc-da3/mat-na',
                }
                ],
            },
            {
                title: 'Chăm sóc da',
                itemId: '/cham-soc-da4',
                subNav: [
                {
                    title: 'Kem dưỡng da',
                    itemId: '/cham-soc-da4/kem-duong-da',
                },
                {
                    title: 'Mặt na',
                    itemId: '/cham-soc-da4/mat-na',
                }
                ],
            }
            ]}
        />
        </Row>
        <Row className="sidebar-wrapper__price">
            <Col md={12} className="sidebar-wrapper__price__title">
                Khoảng giá
            </Col>
            <Col md={12} className="sidebar-wrapper__price__range">
                <PriceRange/>
            </Col>
        </Row>
        {/* <Row className="sidebar-wrapper__origin">
            <Col md={12} className="sidebar-wrapper__origin__title">
                Nơi bán
            </Col>
            <Col md={12} className="sidebar-wrapper__origin__list">
                <ProductOrigin/>
            </Col>
        </Row>
        <Row className="sidebar-wrapper__delivery">
            <Col md={12} className="sidebar-wrapper__delivery__title">
                Đơn vị vận chuyển
            </Col>
            <Col md={12} className="sidebar-wrapper__delivery__list">
                <Delivery/>
            </Col>
        </Row> */}
        <Row className="sidebar-wrapper__brand">
            <Col md={12} className="sidebar-wrapper__brand__title">
                Thương hiệu
            </Col>
            <Col md={12} className="sidebar-wrapper__brand__list">
            <Brand/>
            </Col>
        </Row>
        <Row className="sidebar-wrapper__rating-star">
            <Col md={12} className="sidebar-wrapper__rating-star__title">
                Đánh giá sản phẩm
            </Col>
            <Col md={12}>
                <RatingStarCheckbox/>
            </Col>
        </Row>
        </Container>
    </div>
    <div 
      className={`overlay ${props.isExpanded ? "visible" : ""}`}
      onClick={props.closeNav}
    ></div>
  </>
  );
}

