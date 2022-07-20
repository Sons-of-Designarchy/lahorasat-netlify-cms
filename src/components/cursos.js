// import { Link } from "gatsby"
import React from "react";
import curso from "../img/cursos/curso-thumbnail-video.jpg";
import taller from "../img/cursos/curso-thumbnail-taller.jpg";
import BannerCursos from "./banner-cursos";
import BannerTaller from "./banner-taller";
import BannerTallerBasico from "./banner-taller-basico";

const Cursos = () => {
  const [openModal, setOpenModal] = React.useState("");

  return (
    <>
      <div className="section section-purple">
        <div className="container">
          <h1 className="text-center text-primary">
            Aprende lo básico sobre el SAT.
          </h1>
          <p className="text-light text-center mb-5">
            Elige el formato que más se adapte a tus necesidades
          </p>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row no-gutters">
                <div className="col-lg-6 mb-3">
                  <a className="course-card rounded" href="/curso-basico">
                    <img src={curso} className="img-fluid" />
                    <div className="course-content">
                      <div className="d-flex mb-2">
                        <div className="label label-primary me-2">
                          CURSO EN VIDEO
                        </div>
                        <div className="label label-primary">$349 MXN</div>
                      </div>
                      <h4 className="mb-1 text-secondary">
                        Curso Básico en Video
                      </h4>
                      <p className="font-sm text-secondary-l">
                        Aprende cómo incorporarte ante el SAT, primeros pasos
                        para la vida fiscal y super tips para llevar tu
                        contabilidad.
                      </p>
                    </div>
                    <div className="p-3">
                      <a className="btn btn-secondary btn-block">
                        Ver detalles →
                      </a>
                    </div>
                  </a>
                </div>

                {/* <div className="col-lg-6 mb-3">
                  <a
                    className="course-card rounded course-card-green"
                    href="/taller-basico"
                  >
                    <img src={taller} className="img-fluid" />
                    <div className="course-content">
                      <div className="d-flex mb-2">
                        <div className="label me-2">
                          TALLER EN ZOOM
                        </div>
                        <div className="label me-2">$399 MXN</div>
                      </div>
                      <h4 className="mb-1 text-secondary">
                        Taller online Básico
                      </h4>
                      <p className="font-sm text-secondary-l">
                        Todo lo del curso en video además de poder resolver todas las dudas que tengas en ese monento.
                      </p>
                    </div>
                    <div className="p-3">
                      <a className="btn btn-secondary btn-block disabled">Pronto nueva fecha :)</a>
                    </div>
                  </a>
                </div> */}

                <div className="col-lg-6 mb-3">
                  <a
                    className="course-card rounded course-card-green"
                    // href="/taller-practico-facturacion"
                  >
                    <img src={taller} className="img-fluid" />
                    <div className="course-content">
                      <div className="d-flex mb-2">
                        <div className="label me-2">TALLER EN ZOOM</div>
                        <div className="label me-2">$799 MXN</div>
                      </div>
                      <h4 className="mb-1 text-secondary">
                        Aprende a facturar en la versión 4.0
                      </h4>
                      <p className="font-sm text-secondary-l mb-0">
                        Te enseñamos cómo navegar y emitir facturas desde la nueva versión 4.0 del portal del SAT
                      </p>
                    </div>
                    <div className="p-3">
                      <a className="btn btn-secondary btn-block disabled">
                        Ver detalles →
                      </a>
                    </div>
                  </a>
                </div>
                {/* 
                <div className="col-lg-4 mb-3">
                  <a
                    className="course-card rounded"
                    href="/taller-hacks-del-sat"
                  >
                    <img src={taller} className="img-fluid" />
                    <div className="course-content">
                      <div className="d-flex mb-2">
                        <div className="label label-primary me-2">
                          TALLER EN ZOOM
                        </div>
                        <div className="label label-primary me-2">$799 MXN</div>
                      </div>
                      <h4 className="mb-1 text-secondary">
                        Hacks del sat para Freelancers y RIF's
                      </h4>
                      <p className="font-sm text-secondary-l">
                        Aquí aprenderás de forma práctica cómo navegar a través del portal del SAT, cómo declarar, facturar y dónde encontrar tus documentos fiscales más importantes. 
                      </p>
                    </div>
                    <div className="p-3">
                      <a className="btn btn-secondary btn-block disabled">Próximamente →</a>
                    </div>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          openModal == "video" ? "section-modal open" : "section-modal"
        }
      >
        <div
          className="section-modal-backdrop"
          onClick={() => setOpenModal("")}
        ></div>
        <div className="section-modal-content">
          <button
            onClick={() => setOpenModal("")}
            className="section-modal-close"
          >
            X
          </button>
          <div className="section-purple">
            <BannerCursos />
          </div>
        </div>
      </div>
      <div
        className={
          openModal == "taller" ? "section-modal open" : "section-modal"
        }
      >
        <div
          className="section-modal-backdrop"
          onClick={() => setOpenModal("")}
        ></div>
        <div className="section-modal-content">
          <button
            onClick={() => setOpenModal("")}
            className="section-modal-close"
          >
            X
          </button>
          <div className="section-purple">
            <BannerTaller />
          </div>
        </div>
      </div>
      <div
        className={
          openModal == "taller-basico" ? "section-modal open" : "section-modal"
        }
      >
        <div
          className="section-modal-backdrop"
          onClick={() => setOpenModal("")}
        ></div>
        <div className="section-modal-content">
          <button
            onClick={() => setOpenModal("")}
            className="section-modal-close"
          >
            X
          </button>
          <div className="section-purple">
            <BannerTallerBasico />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cursos;
