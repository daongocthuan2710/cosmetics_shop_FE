import React from "react";
import {status_code} from "../../assets/images/datas/status_code";
import {errors} from "../../assets/images/datas/errors";
import { useState } from "react";
import "./index.scss";

NotFound.propTypes = {};

function NotFound() {
  const [imgSrc, setImgSrc] = useState
  (null);

  return (
    <div  className="not-found">
      <img 
        src={status_code['404.jpg']} 
        alt="Oops... Not Found"
        onError={() => (setImgSrc(errors['no_image.jpg']))}
      />
    </div>
  );
}

export default NotFound;
