import * as React from "react";
import Layout from "../components/page-layout";
import Reviews from "../components/reviews";
import AboutUs from "../components/about-us";
import Colaboraciones from "../components/colaboraciones";
import BlogLatest from "../components/blog-latest";
import Millenials from "../img/cursos/curso-en-video/dirigido-millenials.svg";
import Freelancers from "../img/cursos/curso-en-video/dirigido-freelancers.svg";
import CheckBullet from "../components/check-bullet";
import AcentoBlanco from "../img/acento-blanco.svg";
import BulletsAsesoria from "../components/asesorias/bullets-asesoria";
import BuyDeclaracion from "../components/asesorias/buy-declaracion";
import HeroDeclaracion from "../components/asesorias/hero-declaracion";

const cursoBullets = [
  "Te enseñamos a 1:1 a crear tu declaración",
  "Resolvemos tus dudas",
  "Te preparas para el siguiente año",
];

const AsesoriaPracticaPage = () => {
  return (
    <>
      <Layout>
        <HeroDeclaracion />
        <BulletsAsesoria
          bullets={cursoBullets}
          title="!Evita mutlas por no hacer tu declaracion anual!"
        />
        <div className="section section-white text-center">
          <div className="container">
            <h2 className="mb-3">Dirigido a:</h2>
            <div className="row mt-3 justify-content-center">
              <div className="col-lg-4 mb-3">
                <div className="card h-100">
                  <h5>Asalariados</h5>
                  <p className="font-xs mb-3">
                    Reorganiza tu situacion con tu declaracion anual
                  </p>
                  <img src={Millenials} width="100" className="mx-auto" />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div className="card h-100">
                  <h5>Freelancers</h5>
                  <p className="font-xs mb-3">
                    Incorporados al SAT con dudas de como manejar su declaraciones anual.
                  </p>
                  <img src={Freelancers} width="100" className="mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-off-purple p-3">
          <h4 className="my-3 text-center">Requisitos</h4>
        </div>

        <div className="section section-white">
          <div className="container">
            <div className="row mx-auto">
              <div className="col-lg-6 mb-3">
                <div className="section-off-purple p-3">
                  <CheckBullet title="Acceso a tu portal del SAT." />
                  <CheckBullet title="Tener activado tu buzón tributario." />
                  <CheckBullet title="En ciertos casos, será necesaria la e.firma vigente." />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="section-off-purple p-3">
                  <CheckBullet title="Tomar la asesoría desde una computadora. " />
                  <CheckBullet title="Relación del total de ingresos por nómina del 01 de enero al 31 de diciembre del 2021." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <BuyDeclaracion />
        <div className="section section-green d-flex justify-content-center text-center">
          <img src={AcentoBlanco} width="50" className="mx-auto" />
          <h1>Domina al SAT y maneja tu vida fiscal</h1>
          <img src={AcentoBlanco} width="50" className="mx-auto" />
        </div>
        <AboutUs />
        <Reviews />
        <Colaboraciones />
        <BlogLatest />
      </Layout>
    </>
  );
};

export default AsesoriaPracticaPage;
