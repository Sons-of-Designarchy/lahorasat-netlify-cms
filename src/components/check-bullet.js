import React from "react";
import BulletLanding from "../img/bullet-landing.svg";

const CheckBullet = ({ title }) => {
  return (
    <div className="d-flex align-items-center">
      <img src={BulletLanding} width="12" className="m-2 mx-3 mr-0" />
      <p className="font-xs mb-0">{title}</p>
    </div>
  );
};

export default CheckBullet;
