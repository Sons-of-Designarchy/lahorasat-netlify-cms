import * as React from "react";
import Layout from "../components/page-layout";
import Reviews from "../components/reviews";
import AboutUs from "../components/about-us";
import Colaboraciones from "../components/colaboraciones";
import BlogLatest from "../components/blog-latest";
import Millenials from "../img/cursos/curso-en-video/dirigido-millenials.svg";
import Freelancers from "../img/cursos/curso-en-video/dirigido-freelancers.svg";
import CheckBullet from "../components/check-bullet";
import BuyBasica from "../components/asesorias/buy-basica";
import AcentoBlanco from "../img/acento-blanco.svg";
import HeroPractica from "../components/asesorias/hero-practica";
import BulletsAsesoria from "../components/asesorias/bullets-asesoria";
import BuyPractica from "../components/asesorias/buy-practica";

const cursoBullets = [
  "Como facturar",
  "Hacer tus declaraciones",
  "Ver tus devoluciones de ISR",
  "Actualizar tus datos fiscales",
  "Resolver problemas de adeudos o multas",
];

const AsesoriaPracticaPage = () => {
  return (
    <>
      <Layout>
        <HeroPractica />
        <BulletsAsesoria
          bullets={cursoBullets}
          title="Termina la agonia y ¡domina al SATanás!
te ayudamos paso a paso a ...."
        />
        <div className="section section-white text-center">
          <div className="container">
            <h2 className="mb-3">Dirigido a:</h2>
            <div className="row mt-3 justify-content-center">
              <div className="col-lg-4 mb-3">
                <div className="card h-100">
                  <h5>Personas fisicas</h5>
                  <p className="font-xs mb-3">
                    Incorporados al SAT con dudas de como manejar sus
                    declaraciones y procesos
                  </p>
                  <img src={Millenials} width="100" className="mx-auto" />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div className="card h-100">
                  <h5>Personas con pendientes ante el SAT</h5>
                  <p className="font-xs mb-3">
                    Arregla tu multa, problema y reorganiza tu situacion
                  </p>
                  <img src={Freelancers} width="100" className="mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-off-purple p-3">
          <h4 className="my-3 text-center">¿Qué aprenderé aquí?</h4>
        </div>

        <div className="section section-white">
          <div className="container">
            <div className="row mx-auto">
              <div className="col-lg-6 mb-3">
                <div className="section-off-purple p-3">
                  <CheckBullet title="Revisar tu devolución de ISR." />
                  <CheckBullet title="Guía para seguir con tu negocio de la mejor manera ante el SAT." />
                  <CheckBullet title="Ayuda con algún tema que tengas atrasado con el SAT." />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="section-off-purple p-3">
                  <CheckBullet title="Hacer tus facturas (CFDI) dentro del portal del SAT." />
                  <CheckBullet title="Darte de alta y actualizar tu información." />
                  <CheckBullet title="Presentar tu declaración mensual, bimestral o anual." />
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <div className="boxed-bullet-green font-xxs text-uppercase d-inline-block mb-2 mt-2">
                  Requisitos:
                </div>
                <CheckBullet title="RFC y contraseña para acceder al portal" />
                <CheckBullet title="E.firma y clave vigente" />
              </div>
            </div>
          </div>
        </div>
        <BuyPractica />
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
