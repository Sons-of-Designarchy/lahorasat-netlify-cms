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

const url = 'https://lahorasat.podia.com/curso-en-video-aprende-a-facturar-en-el-portal-del-sat-version-4-0';

// markup
const CursoEnVideoPage = () => {
  return (
    <>
      <Layout
        title="Curso en video: Aprende a facturar en el portal del SAT Versión 4.0 (grabación de zoom)"
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
        <HeaderTaller url={url} />
        <BulletsTaller bullets={bullets} />

        {/* temario */}

        <div className="section">
          <div className="container">
            <div className="text-center">
              <h3>Dirigido a</h3>
              <p>personas que el SAT les quita el sueño... por ejemplo:</p>
              <div className="row mt-3 mx-auto">
                <div className="col-lg-6">
                  <div className="card mb-3">
                    <h5>Soy mi propio contador</h5>
                    <p className="font-xs mb-3">
                      Quienes llevan su propia contabilidad o quieren aprender a
                      hacerlo
                    </p>
                    <img src={Millenials} width="100" className="mx-auto" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card mb-3">
                    <h5>Freelancers y emprendedores</h5>
                    <p className="font-xs mb-3">
                      Que tienen que dar factura a sus clientes y quieren saber
                      cómo hacerlo y usar esto a su favor.
                    </p>
                    <img src={Freelancers} width="100" className="mx-auto" />
                  </div>
                </div>
              </div>

              <h3 className="mt-5">Requisitos</h3>

              <div className="row justify-content-center">
                <div className="col-lg-3 p-3">
                  <div className="card">
                    Tener conocimientos básicos del SAT
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

        <BuyCard url={url} />

        <Reviews />
        <AboutUs />
        <Colaboraciones />
      </Layout>
    </>
  );
};

export default CursoEnVideoPage;
