import React, {useState} from "react";
import {Button, Col, Form, Row, Container } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

export default function ProfileEditForm() {
  const [startDate, setStartDate] = useState(new Date());

    return (
      <>
        <Form className="profileEditForm">
          <Form.Group as={Row} className="mb-3" controlId="formHorizontaluserName">
            <Form.Label column sm={3}>
              Tên đăng nhập
            </Form.Label>
            <Col sm={9} className="text-userName">
              daothuan2710
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

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhoneNumber">
            <Form.Label column sm={3}>
              Ngày sinh
            </Form.Label>
            <Col sm={9}>
            <DatePicker 
              selected={startDate} 
              // onSelect={handleDateSelect} //when day is clicked
              // onChange={(date:Date) => setStartDate(date)} 
            />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 save-form">
            <Col sm={{ span: 10, offset: 3 }}>
              <Button type="submit">Lưu</Button>
            </Col>
          </Form.Group>
        </Form>
      </>
    );
  }  