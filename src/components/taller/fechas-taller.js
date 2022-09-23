// import { Link } from "gatsby"
import React from "react";
import { whatsappNumber } from "../header";

const FechasTaller = () => {
  return (
    <>
      <div id="horarios" className="section section-white">
        <div className="container">
          <h3 className="mb-4 text-center">
            Elige una fecha para tomar el taller
          </h3>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-xl-4 mb-3 mx-auto">
              <div className="boxed-bullet p-4 text-left">
                <p className="font-xs text-uppercase  mb-0">
                  Hacks del sat para Freelancers y RIF's
                </p>
                <h4>
                  Sábado 11 de Dic. <br /> 10 a 1pm
                </h4>
                <div className="d-flex py-1">
                  <p className="label label-primary me-2">$799 pesos</p>
                  <p className="label label-primary me-2">Zoom</p>
                  <p className="label label-primary">2 horas</p>
                </div>
                <div>
                  <a
                    className="btn btn-secondary mb-3 me-3"
                    style={{ width: "100%" }}
                    href="https://lahorasat.podia.com/adf1aa87-56a0-4f22-a5d9-572f805e50cb"
                    data-podia-embed="link"
                  >
                    Pagar en línea
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6 col-xl-4 mb-3">
              <div className="boxed-bullet p-4 text-left">
                <p className="font-xs text-uppercase  mb-0">
                  Hacks del sat para Freelancers y RIF's
                </p>
                <h4>
                  Martes 14 de Dic. <br /> 6 a 9pm
                </h4>
                <div className="d-flex py-1">
                  <p className="label label-primary me-2">$799 pesos</p>
                  <p className="label label-primary me-2">Zoom</p>
                  <p className="label label-primary">2 horas</p>
                </div>
                <div>
                  <a
                    className="btn btn-secondary mb-3 me-3"
                    style={{ width: "100%" }}
                    href="https://lahorasat.podia.com/a122b851-496c-4924-ad59-f4ba67156f2d"
                    data-podia-embed="link"
                  >
                    Pagar en línea
                  </a>
                </div>
              </div>
            </div> */}
          </div>
          <div className="mt-5">
            <p className="text-secondary text-center">
              ¿Tienes dudas de cuál elegir o cómo pagar? {" "}
              <a
                href={'https://wa.me/' + whatsappNumber}
                className="text-secondary text-underline"
              >
                mándanos un Whatsapp
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FechasTaller;
