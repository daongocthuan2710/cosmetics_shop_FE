import React from "react";
import {Navigation} from 'react-minimal-side-navigation';
import { GoSearch } from 'react-icons/go';
import {Scrollbars} from 'react-custom-scrollbars-2';
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import {products} from "../../assets/images/datas/products";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './index.scss';

export default function SidebarResponsive(props) {

  return (
  <>
    <div id="sidebarResponsive" className={`sidebar-responsive ${props.isExpanded ? "is-expanded" : ""}`}>
      <Scrollbars 
        autoHeight
        autoHeightMax={"100vh"}
        autoHide
        thumbMinSize={30}
        >
          <div className="sidenav__search">
            <input type="text" placeholder="Tìm sản phẩm..."/>
            <GoSearch className="sidenav__search__icon"/>
          </div>
          <Container style={{padding: "0"}} fluid className="sidenav__matches">
            <Scrollbars 
              autoHeight
              autoHeightMax={"50vh"}
            >
              <div className="sidenav__matches__search-wrapper">
                <div className="sidenav__matches__search-wrapper__cat-item-search">
                    hoa trong &nbsp; 
                    <NavLink to="/about">Nước hoa</NavLink>
                </div>
                <div className="sidenav__matches__search-wrapper__cat-item-search">
                    hoa trong &nbsp; 
                    <NavLink to="/about">Nước hoa</NavLink>
                </div>
                <div className="sidenav__matches__search-wrapper__cat-item-search">
                    hoa trong &nbsp; 
                    <NavLink to="/about">Nước hoa</NavLink>
                </div>
              </div>
              <Row className="sidenav__matches__autocomplete-suggestion">
                <Col xs={3} sm={3} className="sidenav__matches__autocomplete-suggestion__suggestion-thumb">
                  <NavLink to="/about">
                    <img src={products["lipstick_1.jpg"]} className="img-fluid rounded-top" alt="lipstick_1" />
                  </NavLink>
                </Col>
                <Col xs={9} sm={9}>
                  <Col xs={12} sm={12} className="sidenav__matches__autocomplete-suggestion__suggestion-title">
                    <NavLink to="/about">
                      Nước Hoa Hồng Neutrogena Oil-Free Acne Stress Control Triple-Action Toner
                    </NavLink>
                  </Col>
                  <Col xs={12} sm={12} className="sidenav__matches__autocomplete-suggestion__suggestion-price">
                    <span className="sidenav__matches__autocomplete-suggestion__suggestion-price__woocommerce-Price-amount">
                      270,000
                      <span className="sidenav__matches__autocomplete-suggestion__suggestion-price__woocommerce-Price-currencySymbol">đ</span>
                    </span>
                  </Col>
                </Col>
              </Row>
            </Scrollbars>
          </Container>
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
      </Scrollbars>
    </div>
    <div 
      className={`overlay ${props.isExpanded ? "visible" : ""}`}
      onClick={props.closeNav}
    ></div>
  </>
  );
}

