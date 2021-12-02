import * as React from "react";
import Layout from "../components/page-layout";
import Asesorias from "../components/asesorias";
import HeaderCursoNew from "../components/curso/header-curso-new";
import BulletsCursoNew from "../components/curso/bullets-curso-new";
import AboutUs from "../components/about-us";
import Temario1 from "../img/cursos/curso-en-video/temario-1.svg";
import Temario2 from "../img/cursos/curso-en-video/temario-2.svg";
import Temario3 from "../img/cursos/curso-en-video/temario-3.svg";
import Millenials from "../img/cursos/curso-en-video/dirigido-millenials.svg";
import Freelancers from "../img/cursos/curso-en-video/dirigido-freelancers.svg";
import Publico from "../img/cursos/curso-en-video/dirigido-publico.svg";
import AcentoBlanco from "../img/acento-blanco.svg";
import BuyCard from "../components/curso/buy-card";
import Colaboraciones from "../components/colaboraciones";

const cursoBullets = [
  "¿Qué es el SAT?",
  "¿Cómo sacar una cita en el SAT?",
  "¿Qué es la firma electrónica?",
  "¿Cuándo debo darme de alta?",
  "¿Iré a la carcel por no pagar mis impuestos?",
];

// markup
const CursoEnVideoPage = () => {
  return (
    <>
      <Layout
        title="Curso Básico"
        headerAction={
          <div style={{ marginRight: 8 }}>
            <a
              className="btn btn-menu btn-menu-purple"
              href="https://lahorasat.podia.com/curso-en-video"
              data-podia-embed="link"
            >
              Comprar curso
            </a>
          </div>
        }
      >
        <HeaderCursoNew />
        <BulletsCursoNew bullets={cursoBullets} />
        <BuyCard />

        {/* temario */}

        <div className="section text-center">
          <div className="container">
            <h3 className="mb-5">Temario del curso</h3>
            <div className="row mb-3">
              <div className="col-lg-4">
                <div className="mb-3">
                  <img src={Temario1} className="img-fluid" />
                </div>
                <h6>Entendamos un poco al SAT</h6>
                <ul className="font-sm">
                  <li>¿Cómo funciona?</li>
                  <li>¿Qué necesito para incorporarme?</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <img src={Temario2} className="img-fluid" />
                </div>
                <h6>Obligaciones ante el SAT</h6>
                <ul className="font-sm">
                  <li>¿Qué son los regímenes?</li>
                  <li>¿Cómo elegir mi régimen?</li>
                  <li>Impuestos y declaraciones</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <img src={Temario3} className="img-fluid" />
                </div>
                <h6>Información que cura</h6>
                <ul className="font-sm">
                  <li>Deducciones: Cómo usarlas a tu favor</li>
                  <li>Tips para hacer todo más sencillo</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="boxed-bullet light text-uppercase font-xs d-inline-block">
                  ¿Qué aprenderás aqui?
                </div>
                <ul className="font-sm">
                  <li>
                    Cómo incorporarte de forma correcta (y que te convenga) ante
                    el SAT
                  </li>
                  <li>
                    Primeros pasos para la vida fiscal: obligaciones y derechos
                  </li>
                  <li>
                    Pro tips para llevar tu contabilidad de manera sencilla
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="boxed-bullet light text-uppercase font-xs d-inline-block">
                  Este curso incluye:
                </div>
                <ul className="font-sm">
                  <li>7 lecciones para aprender lo básico del SAT.</li>
                  <li>eBook del curso para que repases la info.</li>
                  <li>
                    Material extra de apoyo: lista de deducciones personales y
                    autorizadas.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-5 text-center">
              <h2>Dirigido a</h2>
              <p>personas que el SAT les quita el sueño... por ejemplo:</p>
              <div className="row mt-3">
                <div className="col-lg-4">
                  <div className="card">
                    <h5>Millenials</h5>
                    <p className="font-xs mb-3">
                      Que acaban de incorporarse a la vida de “adulto” y quieren
                      saber quiúbole con el SAT
                    </p>
                    <img src={Millenials} width="100" className="mx-auto" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <h5>Freelancers</h5>
                    <p className="font-xs mb-3">
                      Que tienen que dar factura a sus clientes y quieren saber
                      cómo hacerlo y usar esto a su favor.
                    </p>
                    <img src={Freelancers} width="100" className="mx-auto" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <h5>Público en general</h5>
                    <p className="font-xs mb-3">
                      Que quiere aprender cómo sobrevivir al SAT de manera
                      sencilla.
                    </p>
                    <img src={Publico} width="100" className="mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-green d-lg-flex justify-content-center">
          <img src={AcentoBlanco} width="50" className="mx-auto" />
          <h1>Aprende a sobrevivir al SATanás</h1>
          <img src={AcentoBlanco} width="50" className="mx-auto" />
        </div>
        <AboutUs />
        <Colaboraciones />
        <Asesorias title="¿Tienes una duda especifica? Agenda una asesoria" />
      </Layout>
    </>
  );
};

export default CursoEnVideoPage;
