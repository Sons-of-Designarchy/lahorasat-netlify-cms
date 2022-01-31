import { Link } from "gatsby";
import React from "react";
import Chicas from "../../img/cursos/curso-en-video/foto-paquete.jpg";

const BuyBasica = () => {
  return (
    <>
      <div className="section section-off-purple">
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
                  Sesión en Zoom de 1 hora
                </div>
                <h3>Asesoría básica</h3>
                <p>
                  Costo:
                  {/* <span className="d-inline-block ml-2 mr-2 text-decoration-line-through opacity-50">
                      $499
                    </span>{" "} */}
                  <span className="font-xl">$699</span>
                </p>
                <p className="font-xs">
                  * Pagas en línea de manera 100% y recibes acceso al calendario
                  para agendar la fecha y hora que gustes.
                </p>
                <div className="d-flex flex-column flex-md-row">
                  <a
                    className="btn btn-primary btn-lg mb-3 me-3"
                    style={{ width: "100%" }}
                    href="https://lahorasat.podia.com/asesoria-basica"
                    data-podia-embed="link"
                  >
                    Agendar asesoria
                  </a>
                </div>
                <p className="font-xxs mt-3">
                  Necesitas asesoría con el portal del SAT?{" "}
                  <Link to="/asesoria-practica" className="text-underline">
                    Agenda una asesoría practica →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyBasica;
