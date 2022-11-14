import React from "react";
import { Col } from "react-bootstrap";
import CardItem from "../../../../../components/Card_item";
import Carousel_Skeleton from "../../../../../components/Skeleton/Carosel_Skeleton";
import "./index.scss";

export default function ProductList(props) {
    const skeletonCardList = [1,2,3,4,5,6,7,8,9,10,11,12];
    return (
      <>
            {props.productList.length > 0
            ? props.productList.map((item) => (
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
            : <>
                {skeletonCardList.map((key) => (
                    <Col
                        xs={12}
                        sm={6}
                        md={4}
                        xl={3}
                        className="mt-4"
                        key={key}
                    >
                        <CardItem/>
                    </Col>
                )) }
             </>
            }
      </>
    );
  }

  