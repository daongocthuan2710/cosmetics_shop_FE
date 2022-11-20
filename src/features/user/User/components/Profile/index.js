import React, { useEffect, useState } from "react";
import { Col, Row, Container } from 'react-bootstrap';
import { useSelector } from "react-redux";
import Avatar from "./components/Avatar";
import ProfileEditForm from "./components/ProfileEditForm";
import { Loading } from "notiflix";
import "./index.scss";
import userApi from "../../../../../api/userApi";

export default function UserProfile() {
  const userLogin = useSelector(state => state.auths);
  const [userInfo, setUserInfo] = useState([]);
  const fetchUserInfo =  async () => {
    Loading.hourglass({
      clickToClose: true,
      svgSize: "50px",
      svgColor: "rgb(223, 139, 42)",
      backgroundColor: "rgb(255, 255, 255)"
      })
    try{
      const body = {
        token : userLogin.token, 
        id : userLogin.id
      };
      const response = await userApi.getUserById(body);
      setUserInfo(response.data)

    } catch(error) {
      console.log("Fail to fetch userInfo", error);
    }
    Loading.remove();
  }

  useEffect(() =>{
    fetchUserInfo();
  }, []);

    return (
      <>
        <Container className="edit-profile">
          <Row>
            <Col md={12} className="edit-profile__top">
              <p className="edit-profile__top__title">Hồ Sơ Của Tôi</p>
              <p className="edit-profile__top__text">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </Col>
            <Col md={12} className="edit-profile__form">
              <Row>
                <Col md={8} className="edit-profile__form__content">
                  <ProfileEditForm userInfo={userInfo}/>
                </Col> 
                <Col md={4} className="edit-profile__form__avatar">
                  <Avatar userInfo={userInfo}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }  