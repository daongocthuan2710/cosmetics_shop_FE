import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import { useNavigate } from "react-router-dom";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { GoSearch } from "react-icons/go";
import { Scrollbars } from "react-custom-scrollbars-2";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { breadcrumbList } from "../../../../Store/user/breadcrumbSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {errors} from "../../../../assets/images/datas/errors";
import "./index.scss";

function SideNav(props) {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(null);
  const cates = [
    {
      title: "Thương hiệu",
      itemId: "/thuong-hieu",
    },
  ];
 
  props.categoryList.map((item) => {
    const subNavTmp = [];
    item.types.forEach((item_subNav) => {
      subNavTmp.push({
        title: item_subNav.name,
        itemId: `/danh-muc/${item.name}/${item_subNav.name}`,
      });
    });
    cates.push({
      title: item.name,
      itemId: `/danh-muc/${item.name}`,
      subNav: subNavTmp,
    });
  });

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
      <div
        id="mySidenav"
        className={`sidenav ${props.isExpanded ? "is-expanded" : ""}`}
      >
        <Scrollbars
          autoHeight
          autoHeightMax={"100vh"}
          autoHide
          thumbMinSize={30}
        >
          <div className="sidenav__search">
            <input type="text" placeholder="Tìm sản phẩm..." />
            <GoSearch className="sidenav__search__icon" />
          </div>
          <Container
            style={{ padding: "0" }}
            fluid
            className="sidenav__matches"
          >
            <Scrollbars autoHeight autoHeightMax={"50vh"}>
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
                <Col
                  xs={3}
                  sm={3}
                  className="sidenav__matches__autocomplete-suggestion__suggestion-thumb"
                >
                  <NavLink to="/about">
                    <img
                       src={imgSrc ? imgSrc : "/assets/images/header/logo_header.png"} 
                       onError={() => (setImgSrc(errors['no_image.jpg']))}
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
            </Scrollbars>
          </Container>
          <Navigation
            activeItemId="/thuong-hieu"
            onSelect={({ itemId}) => {
              let url = removeAccents(itemId).split(" ").join("-");
              let breadcrumbList = itemId.split("/").slice(2);
              handleBreadcrumb(breadcrumbList);
              navigate(url);
            }}
            items={cates}
          />
        </Scrollbars>
      </div>
      <div
        className={`overlay ${props.isExpanded ? "visible" : ""}`}
        onClick={props.handleNav}
      ></div>
    </>
  );
}

export default React.memo(SideNav);
