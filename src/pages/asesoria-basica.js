import * as React from "react";
import Layout from "../components/page-layout";
import HeroBasica from "../components/asesorias/hero-basica";
import Reviews from "../components/reviews";
import AboutUs from "../components/about-us";
import Colaboraciones from "../components/colaboraciones";
import BlogLatest from "../components/blog-latest";
import BulletsBasica from "../components/asesorias/bullets-basica";
import Millenials from "../img/cursos/curso-en-video/dirigido-millenials.svg";
import Freelancers from "../img/cursos/curso-en-video/dirigido-freelancers.svg";
import Publico from "../img/cursos/curso-en-video/dirigido-publico.svg";
import CheckBullet from "../components/check-bullet";
import BuyBasica from "../components/asesorias/buy-basica";
import AcentoBlanco from "../img/acento-blanco.svg";

const cursoBullets = [
  "Conocer tu situación fiscal",
  "Elegir el mejor regimen para ti",
  "Encontrar los documents mas importantes en el portal",
  "Hacer un plan para tener una mejor relación con el SAT",
];

const AsesoriaBasicaPage = () => {
  return (
    <>
      <Layout>
        <HeroBasica />
        <div className="section section-white">
          <h2 className="text-center">Domina al SATanás desde el primer día</h2>
        </div>
        <BulletsBasica bullets={cursoBullets} />
        <div className="section section-white text-center">
          <div className="container">
            <h2 className="mb-3">Dirigido a:</h2>
            <div className="row mt-3">
              <div className="col-lg-4 mb-3">
                <div className="card h-100">
                  <h5>Nuevos contribuyentes</h5>
                  <p className="font-xs mb-3">
                    Lxs que quieren (o tienen) que darse de alta.
                  </p>
                  <img src={Millenials} width="100" className="mx-auto" />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div className="card h-100">
                  <h5>Recien incorporados</h5>
                  <p className="font-xs mb-3">
                    Recién incorporadxs al SAT que no entienden nada al
                    respecto.
                  </p>
                  <img src={Publico} width="100" className="mx-auto" />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div className="card h-100">
                  <h5>Freelancers y emprendedores</h5>
                  <p className="font-xs mb-3">
                    Que tienen que dar factura a sus clientes y quieren saber
                    cómo hacerlo y usar esto a su favor para tener un futuro
                    tranquilo
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
                  <CheckBullet title="Conocer tu situación fiscal." />
                  <CheckBullet title="Elegir el mejor régimen para ti." />
                  <CheckBullet title="Entender lo básico para estar al día con el SAT." />
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="section-off-purple p-3">
                  <CheckBullet title="Emprender y sobrevivir al SAT de la mejor manera." />
                  <CheckBullet title="Consultar documentos en el portal." />
                  <CheckBullet title="Guiarte para tener una buena relación con el SAT." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <BuyBasica />
        <div className="section section-green d-flex justify-content-center text-center">
          <img src={AcentoBlanco} width="50" className="mx-auto" />
          <h1>Inicia tu vida fiscal con el pie derecho</h1>
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

export default AsesoriaBasicaPage;
