import * as React from "react";
import Layout from "../components/page-layout";
import HeaderTaller from "../components/taller/header-taller";
import BulletsTaller from "../components/taller/bullets-taller";
import BuyCard from "../components/taller/buy-card";
import Reviews from "../components/reviews";
import AboutUs from "../components/about-us";
import Colaboraciones from "../components/colaboraciones";
import BlogLatest from "../components/blog-latest";
import Asesorias from "../components/asesorias";
// import Temario1 from "../img/cursos/curso-en-video/temario-1.svg";
// import Temario2 from "../img/cursos/curso-en-video/temario-2.svg";
// import Temario3 from "../img/cursos/curso-en-video/temario-3.svg";
import Millenials from "../img/cursos/curso-en-video/dirigido-millenials.svg";
import Freelancers from "../img/cursos/curso-en-video/dirigido-freelancers.svg";
import Publico from "../img/cursos/curso-en-video/dirigido-publico.svg";
import AcentoBlanco from "../img/acento-blanco.svg";

const bullets = [
  "Cómo configurar mi plataforma de facturación.",
  "Cómo realizar una factura al público en general.",
  "Dónde revisar mis facturas generadas.",
  "Cómo cancelar una factura errónea.",
  "Resolución de dudas personales.",
];

// markup
const CursoEnVideoPage = () => {
  return (
    <>
      <Layout
        title="Taller: Aprende a facturar en la versión 4.0"
        headerAction={
          <div style={{ marginRight: 8 }}>
            <a
              className="btn btn-menu btn-menu-purple"
              href="https://lahorasat.podia.com/4d962167-2a55-4d9c-9c1d-abbff22bf249"
              data-podia-embed="link"
            >
              Inscríbete
            </a>
          </div>
        }
      >
        <HeaderTaller />
        <BulletsTaller bullets={bullets} />

        {/* temario */}

        <div className="section">
          <div className="container">
            <div className="text-center">
              <h3>Dirigido a</h3>
              <p>personas que el SAT les quita el sueño... por ejemplo:</p>
              <div className="row mt-3">
                <div className="col-lg-4">
                  <div className="card mb-3">
                    <h5>Soy mi propio contador</h5>
                    <p className="font-xs mb-3">
                      Quienes llevan su propia contabilidad o quieren aprender a
                      hacerlo
                    </p>
                    <img src={Millenials} width="100" className="mx-auto" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card mb-3">
                    <h5>Freelancers y emprendedores</h5>
                    <p className="font-xs mb-3">
                      Que tienen que dar factura a sus clientes y quieren saber
                      cómo hacerlo y usar esto a su favor.
                    </p>
                    <img src={Freelancers} width="100" className="mx-auto" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card mb-3">
                    <h5>Público en general</h5>
                    <p className="font-xs mb-3">
                      Personas que quieran aprender a facturar en la nueva
                      versión 4.0
                    </p>
                    <img src={Publico} width="100" className="mx-auto" />
                  </div>
                </div>
              </div>

              <h3 className="mt-5">Requisitos</h3>

              <div className="row justify-content-center">
                <div className="col-lg-3 p-3">
                  <div className="card">
                    Haber tomado el curso básico en video. (Lo encuentras en la sección de cursos)
                  </div>
                </div>
                <div className="col-lg-3 p-3">
                  <div className="card">Laptop</div>
                </div>
                <div className="col-lg-3 p-3">
                  <div className="card">
                    E.firma y contraseña para acceder al SAT y/o tu RFC y
                    contraseña.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BuyCard />

        <Reviews />
        <AboutUs />
        <Colaboraciones />
        <BlogLatest />
        <Asesorias title="¿Tienes una duda especifica? Agenda una asesoria" />
      </Layout>
    </>
  );
};

export default CursoEnVideoPage;
