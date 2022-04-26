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
  "Resolvemos todas tus dudas",
  "Ingresamos tu solicitud para recuperar el ISR a favor (según sea el caso)",
  "Te enseñamos cómo lidiar con el SAT de forma sencilla",
  "Aprendes cómo hacer la declaración para el próximo año",
];

const AsesoriaPracticaPage = () => {
  return (
    <>
      <Layout>
        <HeroDeclaracion />
        <BulletsAsesoria
          bullets={cursoBullets}
          title="Evita que el SAT te multe por no hacer tu declaración."
        />
        <div className="section section-white text-center">
          <div className="container">
            <h2 className="mb-3">Dirigido a:</h2>
            <div className="row mt-3 justify-content-center">
              <div className="col-lg-4 mb-3">
                <div className="card h-100">
                  <h5>Asalariadxs</h5>
                  <p className="font-xs mb-3">
                    Que quieren obtener su ISR a favor.
                  </p>
                  <img src={Millenials} width="100" className="mx-auto" />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div className="card h-100">
                  <h5>Freelancers</h5>
                  <p className="font-xs mb-3">
                    Que quieren aprender a hacer su declaración anual.
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
                  <CheckBullet title="Acceso a tu portal del SAT" />
                  <CheckBullet title="E-firma vigente (en ciertos casos)" />
                  <CheckBullet title="Buzón tributario activado" />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="section-off-purple p-3">
                  <CheckBullet title="Relación total de ingresos del 01 al 31 de dic. del 2021" />
                  <CheckBullet title="Computadora y acceso a buen internet" />
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
