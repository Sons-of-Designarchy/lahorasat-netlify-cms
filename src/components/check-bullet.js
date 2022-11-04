import React from "react";
import BulletLanding from "../img/bullet-landing.svg";

const CheckBullet = ({ title }) => {
  return (
    <div className="d-flex align-items-center mb-3">
      <img src={BulletLanding} width="12" className="m-2 mx-3 mr-0" />
      <p className="mb-0" style={{ lineHeight: '110%', textAlign: 'left' }}>{title}</p>
    </div>
  );
};

export default CheckBullet;
