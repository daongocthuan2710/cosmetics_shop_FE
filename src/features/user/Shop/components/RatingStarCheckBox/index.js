import React, {useState} from "react";
import { Container} from "react-bootstrap";
import TextRating from "../../../../../components/RatingStar";
import "./index.scss";

export default function RatingStarCheckbox(props) {
    const [value, setValue] = useState(0);

    const handleChangeRatingStar = (i,event) => {
        document.querySelectorAll(".star-list .rating").forEach((e) => {
            e.classList.remove("active");
          });
          setValue(i);
      };

    const ratingStarList = [];
    for (let i = 0; i < 6; i++) {
        ratingStarList.push(       
            <div className="rating-container" key={i}>     
                <div className={`rating ${i === value ? "active" : ""}`}  
                    onClick={(e)=>handleChangeRatingStar(i,e)} 
                    key={i}
                >
                    <TextRating value={i} text={i === 5? "" : "trở lên"}/>
                </div>
            </div>
        );
        }
    return (
        <>
        <Container className="star-list">{ratingStarList}</Container>
        </>
    );
}
