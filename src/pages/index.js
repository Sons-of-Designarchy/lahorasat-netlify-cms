import * as React from "react";
import Cursos from "../components/cursos";
import Layout from "../components/page-layout";
import Redes from "../img/redes.png";
import Asesorias from "../components/asesorias";
import Colaboraciones from "../components/colaboraciones";
import BlogLatest from "../components/blog-latest";

// markup
const IndexPage = () => {
  return (
    <>
      <Layout
        homepage
        headerAction={
          <>
            {" "}
            <div style={{ marginRight: 8 }}>
              <a
                className="btn btn-menu btn-menu-purple"
                href="https://lahorasat.podia.com/curso-en-video"
                data-podia-embed="link"
              >
                Regala una asesoria!
              </a>
            </div>
          </>
        }
      >
        <div className="section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="mb-4">
                  Somos una comunidad de educación fiscal
                </h1>
                <p className="font-lg">
                  Hacemos contenido informativo, impartimos{" "}
                  <a
                    target="_blank"
                    href="https://taller-basico-para-sobrevivir-al-sat.boletia.com/"
                    className="a-underline"
                  >
                    cursos
                  </a>{" "}
                  y{" "}
                  <a href="#asesoria" className="a-underline">
                    asesorías personalizadas
                  </a>{" "}
                  que te ayudarán a entender cómo funciona el SAT.
                </p>
              </div>
              <div className="col-md-6">
                <a
                  href="https://instagram.com/lahorasat"
                  className="d-block"
                  target="_blank"
                >
                  <img src={Redes} className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="cursos">
          <Cursos />
        </div>
        <div id="asesorias">
          <Asesorias />
        </div>
        <Colaboraciones />
        <BlogLatest />
      </Layout>
    </>
  );
};

export default IndexPage;
