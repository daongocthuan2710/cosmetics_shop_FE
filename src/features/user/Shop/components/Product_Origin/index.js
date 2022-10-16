import React from "react";
import "./index.scss";

export default function ProductOrigin(props) {
    const products = [
        {
            id:"q5", 
            origin:"Quận 5", 
        },
        {
            id:"q7", 
            origin:"Quận 7", 
        },
        {
            id:"qbt", 
            origin:"Bình Thạnh", 
        }
    ];

    return (
        <>
            <div className="origin-list">
                {products.map((item) => (
                    <div className="form-check" key={item.id}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={item.id}
                            id="flexCheckDefault"
                            // onChange = {props.onChangeCategory}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {item.origin}
                        </label>
                    </div>
                ))}
            </div>
        </>
    );
}
