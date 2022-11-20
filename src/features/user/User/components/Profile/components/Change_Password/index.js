import React, {useState} from "react";
import {Button, Col, Form, Row} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

function ChangePassword() {

    return (
      <>
      <div className="changePassword">
        <Row>
          <Col md={12} className="changePassword__top">
            <p className="changePassword__top__title">Đổi mật khẩu</p>
            <p className="changePassword__top__text">Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</p>
          </Col>
        </Row>
        <Row className="changePassword__content">
        <Col md={8}>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
              <Form.Label column sm={4}>
                Mật khẩu hiện tại
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
              <Form.Label column sm={4}>
                Mật khẩu mới
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
              <Form.Label column sm={4}>
                Xác nhận mật khẩu
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text"/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 save-form">
              <Col sm={{ span: 10, offset: 4 }}>
                <Button type="submit">
                  Xác Nhận
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
        <Col md={4}>
          <p>Quên mật khẩu</p>
        </Col>
      </Row>
      </div>
      </>
    );
} 

export default React.memo(ChangePassword);