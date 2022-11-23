import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import brandApi from "../../../../../api/brandApi";
import "./index.scss";

function Brand(props) {
    const [brands, setBrands] = useState([]);

    const fetchBrands =  async () => {
        try{
          const response = await brandApi.getAll();
          setBrands(response.data);
          
        } catch(error) {
          console.log("Fail to fetch brands", error);
        }
      }

      useEffect(() =>{
        fetchBrands();
      }, []);

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
                                    onChange = {(e) => props.handleFilterByBrand(e.target.checked, item.id)}
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

export default React.memo(Brand);
