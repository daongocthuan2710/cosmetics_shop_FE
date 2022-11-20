import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

function ProfileEditForm(props) {
  const [dateOfBirth, setDateOfBirth] = useState(new Date().toISOString().slice(0, 10));
  const [dateOfBirthError, setDateOfBirthError] = useState({error: false, message: ""});
  const [disableSave, setDisableSave] = useState(true);
  const [select, setSelect] = useState(false);


  const handleDateOfBirthCheck = (DOB) => {
    setDateOfBirth(DOB);
    if (new Date(DOB).getFullYear() > (new Date().getFullYear()-16)) {
      setDateOfBirthError({
          error: true,
          message: "Người dùng phải trên 16 tuổi."
      })
      // setDisableSubmit(true)
  }
  else {
      setDateOfBirthError({error:false,message:""});
        // if(dateOfBirthError.error === false)  setDisableSubmit(false)
    }
  }

  useEffect(() => {
    setDisableSave(true);
    if ((dateOfBirth >= new Date().toISOString().slice(0, 10) )
    && select == true)
        setDisableSave(false);
    }, [dateOfBirth, select]);

    return (
      <>
        <Form 
          className="profileEditForm"
        >
          <Form.Group as={Row} className="mb-3" controlId="formHorizontaluserName">
            <Form.Label column sm={3}>
              Tên đăng nhập
            </Form.Label>
            <Col sm={9} className="text-userName">
              {props.userInfo.username}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Form.Label column sm={3}>
              Tên
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="text" placeholder="Nhập tên" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              Email
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="email" placeholder="Nhập Email" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhoneNumber">
            <Form.Label column sm={3}>
              Số điện thoại
            </Form.Label>
            <Col sm={9}>
              <Form.Control type="email" placeholder="Nhập số điện thoại" />
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
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Nữ"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
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
                  value={dateOfBirth}
                  required
                  className="fs-5"
                  max={new Date().toISOString().slice(0, 10)}
                  onChange = {(e) => {handleDateOfBirthCheck(e.target.value)}}
                  isInvalid = {dateOfBirthError.error}
              />
              <Form.Control.Feedback type="invalid">{dateOfBirthError.message}</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 save-form">
            <Col sm={{ span: 10, offset: 3 }}>
              <Button 
                // onClick={handleUpdateUserInfo}
                disabled={disableSave}
              >Lưu</Button>
            </Col>
          </Form.Group>
        </Form>
      </>
    );
}  

export default React.memo(ProfileEditForm);