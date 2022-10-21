import React from "react";
import { Col, Row, Container } from 'react-bootstrap';
import Avatar from "./components/Avatar";
import ProfileEditForm from "./components/ProfileEditForm";
import "./index.scss";

export default function UserProfile() {


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
                  <ProfileEditForm/>
                </Col>
                <Col md={4} className="edit-profile__form__avatar">
                  <Avatar/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }  