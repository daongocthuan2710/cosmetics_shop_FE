import React from "react";
import { Col } from "react-bootstrap";
import CardItem from "../../../../../components/Card_item";
import "./index.scss";

export default function ProductList(props) {
    return (
      <>
            {props.productList
            ?props.productList.map((item) => (
                <Col
                    xs={12}
                    sm={6}
                    md={4}
                    xl={3}
                    className="mt-4"
                    key={item.id}
                >
                    <CardItem productInfo={item}/>
                </Col>
            )) 
            : ""
            }
      </>
    );
  }

  