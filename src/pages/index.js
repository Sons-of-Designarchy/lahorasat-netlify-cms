import * as React from "react";
import Cursos from "../components/cursos";
import Layout from "../components/page-layout";
import Redes from "../img/redes.png";
import Asesorias from "../components/asesorias";
import telowkento from "../img/colabs/telokwento.png";
import mujeres from "../img/colabs/mujeres.png";
import fintual from "../img/colabs/fintual.png";
import fondeadora from "../img/colabs/fondeadora.png";
import ninas from "../img/colabs/ninas.png";
import tipo from "../img/colabs/tipo-y-asi.png";
import animal from "../img/colabs/animal.png";
import legalmente from "../img/colabs/legalmente-creativo.png";
import chicmag from "../img/colabs/chic.png";

// markup
const IndexPage = () => {
  return (
    <>
      <Layout homepage>
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
        <div className="section section-white">
          <div className="container">
            <h4 className="text-center mb-4">Algunas de nuestras colaboraciones</h4>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-6">
                <a
                  className="p-2 p-lg-4 d-block"
                  href="https://www.instagram.com/p/CRCJvuLDV0y/?utm_medium=copy_link"
                  target="_blank"
                >
                  <img src={fintual} />
                </a>
              </div>
              <div className="col-lg-3 col-6">
                <a
                  className="p-2 p-lg-4 d-block"
                  href="https://www.instagram.com/p/CSW2qRDHSqQ/?utm_medium=copy_link"
                  target="_blank"
                >
                  <img src={telowkento} />
                </a>
              </div>
              <div className="col-lg-3 col-6">
                <a
                  className="p-2 p-lg-4 d-block"
                  href="https://www.instagram.com/tv/CVTceIVFZRR/"
                  target="_blank"
                >
                  <img src={fondeadora} />
                </a>
              </div>
              <div className="col-lg-3 col-6">
                <a
                  className="p-2 p-lg-4 d-block"
                  href="https://open.spotify.com/episode/70ZP4KlU9QO21hQjsTv8aH?si=FSCQzSL1S--4WI3Jyo2oQg"
                  target="_blank"
                >
                  <img src={ninas} />
                </a>
              </div>
              <div className="col-lg-3 col-6">
                <a
                  className="p-2 p-lg-4 d-block"
                  href="https://open.spotify.com/episode/2lfcJeDXPgohY33yk451d2?si=jRFiesTDQMe_YkE_5tLdYg&dl_branch=1&nd=1"
                  target="_blank"
                >
                  <img src={tipo} />
                </a>
              </div>
              <div className="col-lg-3 col-6">
                <a
                  className="p-2 p-lg-4 d-block"
                  href="https://www.instagram.com/tv/CMlcDr_DKtU/?utm_medium=copy_link"
                  target="_blank"
                >
                  <img src={animal} />
                </a>
              </div>
              <div className="col-lg-3 col-6">
                <a
                  className="p-2 p-lg-4 d-block"
                  href="https://www.instagram.com/p/CLfw4fQDoMf/?utm_medium=copy_link"
                  target="_blank"
                >
                  <img src={mujeres} />
                </a>
              </div>
              <div className="col-lg-3 col-6">
                <a
                  className="p-2 p-lg-4 d-block"
                  href="https://www.instagram.com/tv/CQzuToHlo2b/?utm_medium=copy_link"
                  target="_blank"
                >
                  <img src={legalmente} />
                </a>
              </div>
              <div className="col-lg-3 col-6">
                <a
                  className="p-2 p-lg-4 d-block"
                  href="https://www.chicmagazine.com.mx/magazines#details?ref=supp&date=2020-11-12&ratio=magazine&ratiow=737&ratioh=935&edition=2&id=202&sup=Chic%20Magazine"
                  target="_blank"
                >
                  <img src={chicmag} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
