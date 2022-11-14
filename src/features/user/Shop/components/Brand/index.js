import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./index.scss";

export default function Brand(props) {
    const brands = [
        {
            id:"1", 
            name:"HIN NAIL", 
        },
        {
            id:"2", 
            name:"Some By Mi", 
        },
        {
            id:"3", 
            name:"Goodal", 
        }
    ];

    return (
        <>
            <div className="origin-list">
                <Row>
                    {brands.map((item) => (
                        <Col md={12} className="origin-check" key={`brand${item.id}`}>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={item.id}
                                    id={item.id}
                                    // onChange = {props.onChangeCategory}
                                />
                                <label className="form-check-label" htmlFor={item.id}>
                                    {item.name}
                                </label>    
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}
