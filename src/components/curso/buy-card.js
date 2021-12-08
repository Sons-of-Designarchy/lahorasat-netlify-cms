import React from "react";
import Chicas from "../../img/cursos/curso-en-video/foto-paquete.jpg";

const BuyCard = () => {
  return (
    <>
      <div className="section section-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 px-4 px-lg-5">
              <img
                src={Chicas}
                className="image-stroke-purple img-fluid mb-5"
              />
            </div>
            <div className="col-lg-6">
              <div className="px-lg-3">
                <div className="boxed-bullet font-xxs text-uppercase d-inline-block mb-4">
                  Curso en video - 30min
                </div>
                <h3>Pasos básicos para sobrevivir al SATanás</h3>
                <p>
                  Costo:
                  {/* <span className="d-inline-block ml-2 mr-2 text-decoration-line-through opacity-50">
                      $499
                    </span>{" "} */}
                  <span className="font-xl">$299</span>
                </p>
                <b className="text-uppercase mb-1 font-xxs">Este curso incluye:</b>
                <ul className="font-xs">
                  <li>7 lecciones en video profesional super faciles de entender</li>
                  <li>Acceso al grupo de FB de inscritos al curso</li>
                  <li>Acceso para siempre</li>
                  {/* <li>E-book con la información del curso</li>
                  <li>E-book “Lista de deducciones según mi regimen”.</li> */}
                </ul>
                <p className="font-xxs">
                  * Pagas en línea de manera 100% segura o contactanos por whats y te ayudamos
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
