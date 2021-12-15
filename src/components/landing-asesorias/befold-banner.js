// import { Link } from "gatsby"
import React from "react";


const BulletsCursoNew = ({ bullets }) => {
  return (
    <>
      <div className="section section-green-flu text-center">
        <div className="container">
          
          <h2 className="">* El regalo perfecto para tu amix en aprietos *</h2>
          
        </div>
      </div>
      <div className="section section-green d-flex justify-content-center text-center">
          <img src={AcentoBlanco} width="50" className="mx-auto" />
          <h1>Aprende a sobrevivir al SATanás</h1>
          <p className="mb-5">Le ayudamos a tu amigo en una asesoría 1-1 en videollamada en zoom con uno de nuestros expertos, en la hora y fecha que el pueda</p>
          <img src={AcentoBlanco} width="50" className="mx-auto" />
      </div>
    </>
  );
};

export default BulletsCursoNew;