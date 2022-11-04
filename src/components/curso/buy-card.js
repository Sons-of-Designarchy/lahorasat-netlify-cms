import React from "react";
import Chicas from "../../img/cursos/curso-en-video/foto-paquete.jpg";

const BuyCard = () => {
  return (
    <>
      <div className="section section-green text-center">
        <div className="container">
          Compra tu curso hoy con un 50% de descuento!
          <h1 className="mt-2 mb-4">Pasos básicos para sobrevivir al SAT</h1>
          <img
            src={Chicas}
            className="image-stroke-purple img-fluid mb-5"
            style={{ maxWidth: "400px" }}
          />
          <div className="text-center">
            <div className="px-lg-3">
              <div className="d-flex align-items-center justify-content-center">
                <h4 style={{ marginRight: "6px" }}>
                  <s>de $800 </s> a sólo $349
                </h4>
              </div>
              <b className="text-uppercase mb-1 font-xxs">Incluye:</b>
              <ul>
                <li>
                  8 lecciones en video profesional super faciles de entender
                </li>
                <li>Acceso para siempre</li>
              </ul>
              <p className="font-xs">
                * Pagas en línea de manera 100% segura, aceptamos todas las
                tarjetas de crédito o débito.
              </p>
              <a
                className="btn btn-secondary btn-lg mb-3 me-3"
                href="https://lahorasat.podia.com/curso-en-video"
                data-podia-embed="link"
              >
                Comprar curso
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyCard;
