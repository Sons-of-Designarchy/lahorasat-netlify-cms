import * as React from "react";
import Layout from "../components/page-layout";
import MiniGuia from "../img/mini-guia.png"
import MiniGuiaPDF from "../docs/mini-guia-sat.pdf"

// markup
const AsesoriasPage = () => {
  return (
    <>
      <Layout hideSubscribe title="Descarga tu mini guia del SAT">
        <div className="hero section section-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="pt-5 pb-4">
                  Gracias por ser parte de la comunidad, da click en el botón para descargar tu guía
                </h1>
                <a href={MiniGuiaPDF} className="btn btn-primary btn-lg">Descargar mi guía ahora</a>
              </div>
              <div className="col-lg-6">
                <img src={MiniGuia} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AsesoriasPage;
