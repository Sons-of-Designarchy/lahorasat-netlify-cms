import * as React from "react";
import Layout from "../components/page-layout";
import Asesorias from "../components/asesorias";
import HeaderCursoNew from "../components/curso/header-curso-new";
import BulletsCursoNew from "../components/curso/bullets-curso-new";
import Temario1 from "../img/cursos/curso-en-video/temario-1.svg";
import Temario2 from "../img/cursos/curso-en-video/temario-2.svg";
import Temario3 from "../img/cursos/curso-en-video/temario-3.svg";
import Millenials from "../img/cursos/curso-en-video/dirigido-millenials.svg";
import Freelancers from "../img/cursos/curso-en-video/dirigido-freelancers.svg";
import Publico from "../img/cursos/curso-en-video/dirigido-publico.svg";
import BuyCard from "../components/curso/buy-card";
import Colaboraciones from "../components/colaboraciones";
import Reviews from "../components/reviews";
import AboutUsLandings from "../components/about-us-landings";

const cursoBullets = [
  "Conceptos básicos para empezar tu vida fiscal",
  "¿Cuándo debo darme de alta?",
  "Por qué debes de darte de alta",
  "Cómo darte de alta en el SAT (todo lo que necesitas saber y tener)",
  "Aprende qué son las obligaciones fiscales y cómo manejarlas",
  "¿Cómo sacar una cita en el SAT?",
  "¿Qué es la firma electrónica?",
  "¿Qué es el RESICO?",
  "Y todos los Hacks para sobrevivir al SAT",
];

const url = "https://lahorasat.podia.com/64dcf7e5-4f51-4f50-931b-6f7e297c82b4";

// markup
const CursoEnVideoPage = () => {
  return (
    <>
      <Layout
        title="Pasos básicos para sobrevivir al SATanás"
        headerAction={
          <div style={{ marginRight: 8 }}>
            <a
              className="btn btn-menu btn-menu-purple"
              href={url}
              data-podia-embed="link"
            >
              Comprar curso
            </a>
          </div>
        }
      >
        <HeaderCursoNew url={url} />

        <div className="section section-green text-center">
          <div className="container">
            <h3>
              ¿Sabías que el SAT puede multarte por hasta $35,000 pesos por no
              cumplir con tus obligaciones fiscales?
            </h3>
          </div>
        </div>

        <div className="section section-gray text-center">
          <div className="container">
            <p>
              Sabemos que ser adulto es muy difícil, por eso creamos el curso...
            </p>
            <h1>Pasos básicos para sobrevivir al SAT</h1>
            <p>El curso ideal para:</p>
            <div className="row mt-3">
              <div className="col-lg-4">
                <div className="card mb-3">
                  <img src={Freelancers} width="100" className="mx-auto mb-3" />
                  <h5>Freelancers</h5>
                  <p className="mb-3">
                    Que tienen que dar factura a sus clientes y quieren saber
                    cómo hacerlo y usar esto a su favor.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card mb-3">
                  <img src={Millenials} width="100" className="mx-auto mb-3" />
                  <h5>Recien graduados</h5>
                  <p className="mb-3">
                    Que acaban de incorporarse a la vida de “adulto” y quieren
                    saber quiúbole con el SAT
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card mb-3">
                  <img src={Publico} width="100" className="mx-auto mb-3" />
                  <h5>Emprendedores</h5>
                  <p className="mb-3">
                    Que quiere aprender cómo sobrevivir al SAT de manera
                    sencilla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BulletsCursoNew bullets={cursoBullets} url={url} />
        <BuyCard url={url} />
        <AboutUsLandings />
        <Reviews />

        {/* temario */}

        <div className="section section-white">
          <div className="container">
            <div className="row mb-3 text-center">
              <h3 className="mb-5">Temario del curso</h3>
              <div className="col-lg-4">
                <div className="mb-3">
                  <img src={Temario1} className="img-fluid" width="100" />
                </div>
                <h6>Entendamos un poco al SAT</h6>
                <ul className="font-sm">
                  <li>¿Cómo funciona?</li>
                  <li>¿Qué necesito para incorporarme?</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <img src={Temario2} className="img-fluid" width="100" />
                </div>
                <h6>Obligaciones ante el SAT</h6>
                <ul className="font-sm">
                  <li>¿Qué son los regímenes?</li>
                  <li>¿Cómo elegir mi régimen?</li>
                  <li>¿Qué son los impuestos?</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <img src={Temario3} className="img-fluid" width="100" />
                </div>
                <h6>Información que cura</h6>
                <ul className="font-sm">
                  <li>Deducciones: Cómo usarlas a tu favor</li>
                  <li>Tips para hacer todo más sencillo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-green text-center">
          <h1>Aprende a sobrevivir al SATanás</h1>
          <a
            className="btn btn-secondary btn-lg mt-4"
            href={url}
            data-podia-embed="link"
          >
            Comprar curso
          </a>
        </div>
        <Colaboraciones />
        {/* <BlogLatest /> */}
        <Asesorias title="¿Necesitas asesoría personalizada? Agenda una asesoria" />
      </Layout>
    </>
  );
};

export default CursoEnVideoPage;
