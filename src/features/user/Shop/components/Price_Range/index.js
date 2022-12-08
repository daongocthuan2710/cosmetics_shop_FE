import { Box, Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import "./index.scss";

export default function PriceRange(props) {
    const minDistance = 10;
    const formatPrice = (price) =>{
        const value = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
        return value;
    }
    function valuetext(value) {
        value = formatPrice(value * 10000);
        return `${value}°C`;
    } 

    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
          return;
        }
    
        if (activeThumb === 0) {
            props.handlePrice([Math.min(newValue[0], props.price[1] - minDistance), props.price[1]]);
        } else {
          props.handlePrice([props.price[0], Math.max(newValue[1], props.price[0] + minDistance)]);
        }
      };
    return (
        <>
            <div className="price_range">
                <Box sx={{ width: 250 }}>
                <Typography id="input-slider" gutterBottom>
                    {formatPrice(props.price[0] * 50000)}
                    &ensp; &emsp;
                    {formatPrice(props.price[1] * 50000)}
                </Typography>
                    <Slider
                        getAriaLabel={() => 'Minimum distance'}
                        value={props.price}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                    />
                </Box>
            </div>
        </>
    );
}
