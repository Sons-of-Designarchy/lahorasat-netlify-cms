import React from "react";
import Chicas from "../../img/cursos/curso-en-video/foto-paquete.jpg";

const BuyCard = ({url}) => {
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
                  Curso en video (grabación de zoom)
                </div>
                <h3>Curso para aprender a facturar en el portal del SAT en la versión 4.0</h3>

                <p>
                  <span className="font-lg">¡Acceso de por vida! Lo puedes ver las veces que quieras.</span>
                </p>
                <p>
                  Costo:
                  {/* <span className="d-inline-block ml-2 mr-2 text-decoration-line-through opacity-50">
                      $499
                    </span>{" "} */}
                  <span className="font-xl">$549</span>
                </p>
                <b className="text-uppercase mb-1 font-xxs">Este curso incluye:</b>
                <ul className="font-xs">
                  <li>2 horas y media de curso</li>
                  <li>2 materiales extra de apoyo</li>
                  <li>Acceso ilimitado</li>
                </ul>
                <p className="font-xxs">
                  * Pagas en línea de manera 100% segura o contáctanos por Whatsapp y te ayudamos
                </p>
                <div className="d-flex flex-column flex-md-row">
                  <a
                    className="btn btn-secondary btn-lg mb-3 me-3"
                    style={{ width: "100%" }}
                    href={url}
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
