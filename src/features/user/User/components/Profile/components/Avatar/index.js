import React from "react";
import { Row, Col } from "react-bootstrap";
import {FaRegUserCircle} from "react-icons/fa";
import avatar from "../../../../../../../assets/images/avatars/default-avatar.png";
import "./index.scss";

export default function Avatar() {


    return (
      <>
        <Row className="upload-avt-form">
            <Col md={12} className="avatar">
                <img src={avatar} alt="Thuận Đào"/>
            </Col>
            <Col md={12} className="upload">
                Upload
            </Col>
            <Col md={12} className="text-file">
                Dung lượng file tối đa 1 MB
                Định dạng:.JPEG, .PNG
            </Col>
        </Row>
      </>
    );
  }  