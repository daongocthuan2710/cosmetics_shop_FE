import React from "react";
import notFoundImg from "../../assets/images/status/404.jpg";
import "./index.scss";

NotFound.propTypes = {};

function NotFound() {
  return (
    <div  className="not-found">
      <img src={notFoundImg} alt="Oops... Not Found"/>
    </div>
  );
}

export default NotFound;
