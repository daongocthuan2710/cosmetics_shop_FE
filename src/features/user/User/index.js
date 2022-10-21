import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Outlet} from 'react-router-dom';
import UserSidebar from "./components/Sidebar";
import "./index.scss";


export default function User() {
  
    return (
      <>
      <Container>
        <Row>
          <Col md={3}>
            <UserSidebar/>
          </Col>
          <Col md={9} className="user-outlet">
            <Outlet/>
          </Col>
        </Row>
      </Container>

      </>
    );
  }  