import React, { useState } from "react";
import './index.scss';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Col, Container, Row } from "react-bootstrap";
import RatingStarCheckbox from "../RatingStarCheckBox";
// import ProductOrigin from "../Product_Origin";
// import Delivery from "../Delivery";
import Brand from "../Brand";
import PriceRange from "../Price_Range";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { breadcrumbList } from "../../../../../Store/user/breadcrumbSlice";
import { typeProductAction } from "../../../../../Store/user/typeProductSlice";

export default function Sidebar(props) {
    const navigate = useNavigate();
    const cates = [];
    for (var key in props.categoryList) {
        var item = props.categoryList[key];
        const subNavTmp = [];
        item.types.forEach((item_subNav) => {
            subNavTmp.push({
                title: item_subNav.name,
                itemId: `/danh-muc/${item.name}=${item.id}/${item_subNav.name}=${item_subNav.id}`,
            })
        }); 
        cates.push({
            title: item.name,
            itemId: `/danh-muc/${item.name}=${item.id}`,
            subNav: subNavTmp,
        })
     }

    function removeAccents(str) {
    var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ", "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ"    
    ];
    for (var i=0; i<AccentsMap.length; i++) {
        var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str;
    }

    const dispatch = useDispatch();
    const handleBreadcrumb = (breadcrumb) => {
      const action = breadcrumbList(breadcrumb);
      dispatch(action);
    }

  return (
  <>
    <div id="sidebar" className="sidebar">
        <Container style={{padding: "0"}} fluid className="sidebar-wrapper">
        <Row 
            className="sidebar-wrapper__title"
            onClick={() => {props.handleAllProduct()}}
        > 
            <Col>
                Danh Mục
            </Col>
        </Row>
        <Row className="sidebar-wrapper__navigation">
            <Navigation
            activeItemId="/thuong-hieu"
            onSelect={({itemId}) => {
                let url = removeAccents(itemId).split(" ").join("-");
                let stringList = itemId.split("/").slice(2);
                let breadcrumbList = [];
                let idList = [];
                stringList.forEach((item) =>{
                    let tempItem = item.split("=");
                    breadcrumbList.push(tempItem[0]);
                    idList.push(tempItem[1]);
                })
                if(idList.length > 1){
                    const action = typeProductAction(idList[1]);
                    dispatch(action);
                }
                handleBreadcrumb(breadcrumbList);
                navigate(url);
            }}
            items={cates}
        />
        </Row>
        <Row className="sidebar-wrapper__price">
            <Col md={12} className="sidebar-wrapper__price__title">
                Khoảng giá
            </Col>
            <Col md={12} className="sidebar-wrapper__price__range">
                <PriceRange 
                    price={props.price}
                    handlePrice={props.handlePrice}
                />
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
                <Brand handleFilterByBrand={props.handleFilterByBrand}/>
            </Col>
        </Row>
        <Row className="sidebar-wrapper__rating-star">
            <Col md={12} className="sidebar-wrapper__rating-star__title">
                Đánh giá sản phẩm
            </Col>
            <Col md={12}>
                <RatingStarCheckbox handleFilterByRating={props.handleFilterByRating}/>
            </Col>
        </Row>
        </Container>
    </div>
  </>
  );
}

