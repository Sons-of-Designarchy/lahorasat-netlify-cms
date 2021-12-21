import { Link } from "gatsby"
import React from "react";
import BannerAvanzada from "./banner-avanzada";
import BannerBasica from "./banner-basica";
import basica from "../img/cursos/asesoria.jpg";
import practica from "../img/cursos/asesoria-practica-2.jpg";

const Asesorias = ({ title }) => {

  return (
    <>
      <div className="section section-green">
        <div className="container">
          <h3 className="text-center text-secondary">
            {title ? title : "¿Necesitas asesoría personalizada? "}
          </h3>
          <p className="text-secondary text-center mb-5">
            Tenemos dos modelos, si tienes dudas de cuál elegir, <a href="https://wa.me/+525510722129" className="text-secondary text-underline">mándanos un Whatsapp</a>.
          </p>
          <div className="row no-gutters">
            <div className="col-lg-6 mb-3">
              <Link
                className="course-card rounded"
                to="/asesoria-basica"
              >
                <img src={basica} className="img-fluid" />
                <div className="course-content">
                  <div className="d-flex mb-2">
                    <div className="label label-primary me-2">
                      1 HORA
                    </div>
                    <div className="label label-primary me-2">
                      VIA ZOOM
                    </div>
                    <div className="label label-primary">$650 MXN</div>
                  </div>
                  <h2 className="mb-1 text-secondary">
                    Asesoría básica
                  </h2>
                  <p className="text-secondary-l">
                    Una guía paso a pasito para entrarle al mundo del SAT sin morir en el intento. 
                  </p>
                </div>
                <div className="p-3">
                  <a className="btn btn-secondary btn-lg btn-block">Ver detalles →</a>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 mb-3">
              <Link
                to="/asesoria-practica"
                className="course-card rounded"
              >
                <img src={practica} className="img-fluid" />
                <div className="course-content">
                  <div className="d-flex mb-2">
                    <div className="label label-primary me-2">
                      80 MIN
                    </div>
                    <div className="label label-primary me-2">
                      VIA ZOOM
                    </div>
                    <div className="label label-primary">$950 MXN</div>
                  </div>
                  <h2 className="mb-1 text-secondary">
                    Asesoría práctica <span className="font-lg d-block">(para personas fisicas)</span>
                  </h2>
                  <p className="font-sm text-secondary-l">
                    Te ayudamos de forma práctica en las operaciones más comunes del portal y resolvemos las dudas que no te dejan dormir. 
                  </p>
                </div>
                <div className="p-3">
                  <a className="btn btn-secondary btn-lg btn-block">Ver detalles →</a>
                </div>
              </Link>
            </div>
            <p className="mt-3 text-center">También puedes <Link to="/regala-asesoria" className="text-underline">regalarle una asesoria</Link> a un amigo :)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Asesorias;
