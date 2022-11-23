import React from "react";
import {Button, Col, Form, Row } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

function ProfileEditForm(props) {

  return (
      <>
        <Form 
          className="profileEditForm"
        >
          <Form.Group as={Row} className="mb-3" controlId="formHorizontaluserName">
            <Form.Label column sm={3}>

            </Form.Label>
            <Col sm={9} className="text-userName">
              
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Form.Label column sm={3}>
              Tên đăng nhập
            </Form.Label>
            <Col sm={9}>
              <Form.Control 
                type="text" 
                defaultValue={props.username} 
                placeholder="Nhập tên" 
                onChange={(e) => {props.handleUserName(e.target.value)}}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              Email
            </Form.Label>
            <Col sm={9}>
              <Form.Control 
                type="email" 
                defaultValue={props.email} 
                placeholder="Nhập Email" 
                onChange={(e) => {props.handleEmail(e.target.value)}}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhoneNumber">
            <Form.Label column sm={3}>
              Số điện thoại
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="number" defaultValue={props.phoneNumber} placeholder="Nhập số điện thoại" />
            </Col>
          </Form.Group>

          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={3}>
                Giới tính
              </Form.Label>
              <Col sm={9}>
                <Row>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Nam"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                      checked={props.gender == "nam" ? true : false}
                      onChange={(e) => {props.handleGender(e.target.checked)}}
                      readOnly
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Nữ"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      checked={props.gender == "nữ" ? true : false}
                      onChange={(e) => {props.handleGender(!e.target.checked)}}
                      readOnly

                    />
                  </Col>
                </Row>
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalBirthDay">
            <Form.Label column sm={3}>
              Ngày sinh
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                  type="date"
                  defaultValue={props.dateOfBirth || null}
                  required
                  className="fs-5"
                  max={new Date().toISOString().slice(0, 10)}
                  onChange = {(e) => {props.handleDateOfBirthCheck(e.target.value)}}
                  isInvalid = {props.dateOfBirthError.error}
              />
              <Form.Control.Feedback type="invalid">{props.dateOfBirthError.message}</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 save-form">
            <Col sm={{ span: 10, offset: 3 }}>
              <Button  
                disabled={props.disableSave}
                onClick={() =>{props.handleUpdateUserInfo()}}
              >Lưu</Button>
            </Col>
          </Form.Group>
        </Form>
      </>
    );
}  

export default React.memo(ProfileEditForm);