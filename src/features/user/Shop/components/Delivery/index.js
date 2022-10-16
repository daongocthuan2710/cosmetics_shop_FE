import React from "react";
import "./index.scss";

export default function Delivery(props) {
    const shipping_methods = [
        {
            id:"hoatoc", 
            shipping_method:"Hỏa Tốc", 
        },
        {
            id:"nhanh", 
            shipping_method:"Nhanh", 
        },
        {
            id:"tietkiem", 
            shipping_method:"Tiết Kiệm", 
        }
    ];

    return (
        <>
            <div className="origin-list">
                {shipping_methods.map((item) => (
                    <div className="form-check" key={item.id}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={item.id}
                            id="flexCheckDefault"
                            // onChange = {props.onChangeCategory}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {item.shipping_method}
                        </label>
                    </div>
                ))}
            </div>
        </>
    );
}
