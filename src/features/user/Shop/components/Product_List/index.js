import React from "react";
import { Col } from "react-bootstrap";
import CardItem from "../../../../../components/Card_item";
import "./index.scss";

export default function ProductList() {
    const products = [1,2,3,4,5,6,7,8,9,10];
    return (
      <>
            {products.map((item) => (
                <Col
                    xs={12}
                    sm={6}
                    md={4}
                    xl={3}
                    className="mt-4"
                    key={1}
                >
                    <CardItem/>
                </Col>
            ))}
      </>
    );
  }

  