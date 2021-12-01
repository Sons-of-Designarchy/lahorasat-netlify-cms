import * as React from "react";
import Layout from "../components/page-layout";
import Asesorias from "../components/asesorias";
import HeaderCursoNew from "../components/curso/header-curso-new";
import BulletsCursoNew from "../components/curso/bullets-curso-new";
import AboutUs from "../components/about-us";

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
      <Layout title="Curso Básico">
        <HeaderCursoNew />
        <BulletsCursoNew bullets={cursoBullets} />
        <div className="section section-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">imagen</div>
              <div className="col-lg-6">
                <div className="px-lg-3">
                  <div className="boxed-bullet font-xs text-uppercase d-inline-block mb-4">
                    Curso en video - 30min
                  </div>
                  <h2>Pasos básicos para sobrevivir al SATanás</h2>
                  <p>
                    Costo:
                    <span className="d-inline-block ml-2 mr-2 text-decoration-line-through opacity-50">
                      $499
                    </span>{" "}
                    <span className="font-xl">$299</span>
                  </p>
                  <p className="font-xs">
                    Pagas en línea de manera 100% segura y recibes acceso
                    permanente al curso.{" "}
                  </p>
                  <div className="d-flex flex-column flex-md-row">
                    <a
                      className="btn btn-primary btn-lg mb-3 me-3"
                      style={{ width: "100%" }}
                      href="https://lahorasat.podia.com/curso-en-video"
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

        <div className="section text-center">
          <div className="container">
            <h3>Temario del curso</h3>
            <div className="row mb-3">
              <div className="col-lg-4">
                <div className="mb-3">{/* image */}</div>
                <h6>Entendamos un poco al SAT</h6>
                <ul className="font-sm">
                  <li>¿Cómo funciona?</li>
                  <li>¿Qué necesito para incorporarme?</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">{/* image */}</div>
                <h6>Obligaciones ante el SAT</h6>
                <ul className="font-sm">
                  <li>¿Qué son los regímenes?</li>
                  <li>¿Cómo elegir mi régimen?</li>
                  <li>Impuestos y declaraciones</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">{/* image */}</div>
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
            <div className="mt-5">
              <h2>Dirigido a</h2>
              <p>personas que el SAT les quita el sueño... por ejemplo:</p>
              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="card">
                    <h5>Millenials</h5>
                    <p className="font-xs mb-3">
                      Que acaban de incorporarse a la vida de “adulto” y quieren
                      saber quiúbole con el SAT
                    </p>
                    {/* imagen here */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <h5>Freelancers</h5>
                    <p className="font-xs mb-3">
                      Que tienen que dar factura a sus clientes y quieren saber
                      cómo hacerlo y usar esto a su favor.
                    </p>
                    {/* imagen here */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <h5>Público en general</h5>
                    <p className="font-xs mb-3">
                      Que quiere aprender cómo sobrevivir al SAT de manera
                      sencilla.
                    </p>
                    {/* imagen here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-green d-lg-flex justify-content-center">
          {/* imagen 1 */}
          <h1>Aprende a sobrevivir al SATanás</h1>
          {/* imagen 1 */}
        </div>
        <AboutUs />
        <Asesorias title="¿Tienes una duda especifica? Agenda una asesoria" />
      </Layout>
    </>
  );
};

export default CursoEnVideoPage;
