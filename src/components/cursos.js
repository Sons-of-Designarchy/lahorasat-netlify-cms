// import { Link } from "gatsby"
import React from "react";
import curso from "../img/cursos/curso-en-video/foto-home.jpg";
import taller from "../img/cursos/taller-hacks-cover.jpg";
import BannerCursos from "./banner-cursos";
import BannerTaller from "./banner-taller";
import BannerTallerBasico from "./banner-taller-basico";

const Cursos = () => {
  const [openModal, setOpenModal] = React.useState("");

  return (
    <>
      <div className="section section-purple">
        <div className="container">
          <h3 className="text-center text-primary">
            Nuestros cursos y talleres
          </h3>
          <p className="text-light text-center mb-5">
          Aquí están las respuestas del universo. Si tienes dudas de qué curso elegir, <a href="https://wa.me/+525510722129" className="text-primary">mándanos un Whatsapp </a> 
😉
          </p>
          <div className="row no-gutters">
            <div className="col-lg-6 mb-3">
              <a
                className="course-card rounded"
                href="/curso-en-video"
              >
                <img src={curso} className="img-fluid" />
                <div className="course-content">
                  <div className="d-flex mb-2">
                    <div className="label label-primary me-2">
                      CURSO EN VIDEO
                    </div>
                    <div className="label label-primary">$299 MXN</div>
                  </div>
                  <h4 className="mb-1 text-secondary">
                    Pasos básicos para sobrevivir al SATanas
                  </h4>
                  <p className="font-sm text-secondary-l">
                    Aprende cómo incorporarte ante el SAT, primeros pasos para
                    la vida fiscal y super tips para llevar tu contabilidad.
                  </p>
                </div>
                <div className="p-3">
                  <a className="btn btn-secondary btn-block">Ver detalles →</a>
                </div>
              </a>
            </div>
            <div className="col-lg-6 mb-3">
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
                  <a className="btn btn-secondary btn-block">Ver fechas disponibles →</a>
                </div>
              </a>
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
