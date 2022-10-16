import React from "react";
import "./index.scss";

export default function PriceRange(props) {

    return (
        <>
            <div className="price_range">
                <input
                    className="price_range__input"
                    type="number"
                    // value={item.id}
                    id="priceFrom"
                    placeholder="TỪ"
                    // onChange = {props.onChangeCategory}
                />
                <span>  --  </span>
                <input
                    className="price_range__input"
                    type="number"
                    // value={item.id}
                    id="priceTo"
                    placeholder="ĐẾN"
                    // onChange = {props.onChangeCategory}
                />
            </div>
        </>
    );
}
