// import { Link } from "gatsby"
import React from "react";

const FechasTaller = () => {
  return (
    <>
      <div id="horarios" className="section section-white">
        <div className="container">
          <h3 className="mb-4 text-center">
            Elige una fecha para tomar el taller
          </h3>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-xl-4">
              <div className="boxed-bullet p-4 text-left">
                <p className="font-xs uppercase  mb-0">
                  Hacks del sat para Freelancers y RIF's
                </p>
                <h4>
                  Sábado 30 de Oct. <br /> 12 a 2pm
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
                    href="https://lahorasat.podia.com/a7da7413-4937-46a2-b0a2-6390a7905c56"
                    data-podia-embed="link"
                  >
                    Pagar en linea
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-4">
              <div className="boxed-bullet p-4 text-left">
                <p className="font-xs uppercase  mb-0">
                  Hacks del sat para Freelancers y RIF's
                </p>
                <h4>
                  Martes 2 de Nov. <br /> 7 a 9pm
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
                    href="https://lahorasat.podia.com/227f1554-bce7-42f6-9024-8d04cea14677"
                    data-podia-embed="link"
                  >
                    Pagar en linea
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-secondary text-center">
              ¿Tienes dudas de cual elegir o como pagar? {" "}
              <a
                href="https://wa.me/+525510722129"
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
