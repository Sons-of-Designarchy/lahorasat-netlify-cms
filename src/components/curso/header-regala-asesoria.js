// import { Link } from "gatsby"
import React from "react";
import Adorno from "../../img/acento-verde.svg";
import ImagenLanding from "../../img/regalo-asesoria.jpg";


const HeaderRegaloAsesoria = () => {
  return (
    <div className="section section-purple">
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-5 p-lg-r">
            <img src={Adorno} className="mb-3 d-block" />
            <h2 className="mb-3 text-light">
              Santa Claus no existe pero SATanás sí.{" "}
              <span className="text-primary">Este curso es para ti</span>
            </h2>
            <p className="text-light">
            Sé el santo claus de un amix, regálale una asesoría y sálvalo del satanás
            </p>
            
          </div>
          <div className="col-lg-7 d-none d-lg-block">
          <img
              src={ImagenLanding}
              className="img-fluid mb-4"
              style={{ borderRadius: 24, width: "100%" }}
            />
          
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderRegaloAsesoria;
