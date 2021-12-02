import React from "react";
import Chicas from "../../img/cursos/curso-en-video/foto-paquete.jpg";

const BuyCard = () => {
  return (
    <>
        <div className="section section-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 px-lg-5">
                <img src={Chicas} className="image-stroke-purple img-fluid" />
              </div>
              <div className="col-lg-6">
                <div className="px-lg-3">
                  <div className="boxed-bullet font-xs text-uppercase d-inline-block mb-4">
                    Curso en video - 30min
                  </div>
                  <h2>Pasos básicos para sobrevivir al SATanás</h2>
                  <p>
                    Costo:
                    <span className="d-inline-block ml-2 mr-2 text-decoration-line-through opacity-50">
                      $499
                    </span>{" "}
                    <span className="font-xl">$299</span>
                  </p>
                  <p className="font-xs">
                    Pagas en línea de manera 100% segura y recibes acceso
                    permanente al curso.{" "}
                  </p>
                  <div className="d-flex flex-column flex-md-row">
                    <a
                      className="btn btn-secondary btn-lg mb-3 me-3"
                      style={{ width: "100%" }}
                      href="https://lahorasat.podia.com/curso-en-video"
                      data-podia-embed="link"
                    >
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default BuyCard;
