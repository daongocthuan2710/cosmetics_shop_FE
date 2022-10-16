import React from "react";
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
                {brands.map((item) => (
                    <div className="form-check" key={item.id}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={item.id}
                            id="flexCheckDefault"
                            // onChange = {props.onChangeCategory}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {item.name}
                        </label>
                    </div>
                ))}
            </div>
        </>
    );
}
