// import { Link } from "gatsby"
import React from "react";
import coverPhoto from "../../img/taller/taller-cover.png";

const HeaderTaller = () => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <div className="section section-purple">
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-6 p-lg-r">
            <p className="font-xs uppercase text-primary">Taller: Hacks del Sat para Freelancers y Rifs</p>
            <h4>
              ¿Tus clientes te piden factura y no tienes ni idea de cómo sacarla? {" "}
              <span className="text-primary">
                Entonces este taller es para ti 😉
              </span>
            </h4>
            <button onClick={() => setOpenModal(!openModal)} className="d-lg-none">
              <img
                src={coverPhoto}
                className="img-fluid mb-4"
                style={{ borderRadius: 24, width: "100%" }}
              />
            </button>
            <p className="text-light font-sm">
              Aquí aprenderás de forma práctica cómo navegar a través del portal del SAT, cómo declarar, facturar y dónde encontrar tus documentos fiscales más importantes.
            </p>
            <div className="mt-2 mb-4">
            </div>
            <div className="d-flex flex-column flex-md-row">
              <a
                className="btn btn-primary btn-lg mb-3 me-3"
                style={{ width: "100%" }}
                href="#horarios"
              >
                Ver fechas disponibles
              </a>
              <a
                className="btn btn-outline-primary btn-lg mb-3"
                style={{ width: "100%" }}
                target="_blank"
                href="https://wa.me/+525510722129"
              >
                Agendar por Whatsapp
              </a>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <button
              onClick={() => setOpenModal(!openModal)}
              className="video-link-icon"
            >
              <img
                src={coverPhoto}
                className="img-fluid mb-4"
                style={{ borderRadius: 24, width: "100%" }}
              />
            </button>
          </div>
        </div>
      </div>
      {openModal && (
        <div className={openModal ? "section-modal open" : "section-modal"}>
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
            <iframe
              width="100%"
              className="section-modal-video"
              src="https://www.youtube.com/embed/BxjK_NGBq0o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderTaller;
