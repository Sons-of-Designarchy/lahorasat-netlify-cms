import * as React from "react";
import Layout from "../components/page-layout";
import HeaderRegalaAsesoria from "../components/curso/header-regala-asesoria";
import AboutUs from "../components/about-us";
import Millenials from "../img/cursos/curso-en-video/dirigido-millenials.svg";
import Freelancers from "../img/cursos/curso-en-video/dirigido-freelancers.svg";
import Publico from "../img/cursos/curso-en-video/dirigido-publico.svg";
import AcentoBlanco from "../img/acento-blanco.svg";
import BulletLanding from "../img/bullet-landing.svg";
import Colaboraciones from "../components/colaboraciones";
import Reviews from "../components/reviews";
import BlogLatest from "../components/blog-latest";

const RegaloAsesoria = () => {
  const [accordion, setAccordion] = React.useState("");

  return (
    <>
      <Layout title="Regala una asesoría" headerAction>
        <HeaderRegalaAsesoria />
        <div className="section section-green">
          <div className="container  d-flex d-justify-content-center">
            <img
              src={AcentoBlanco}
              width="50"
              className="mx-auto d-none d-md-block"
            />
            <div>
              <div className="d-flex justify-content-center text-center">
                <h2>El regalo perfecto para tu amix en aprietos</h2>
              </div>
              <div className="text-center">
                <p className="mx-3 font-lg">
                  Le ayudamos a tu amix en una asesoría online 1-1 con una de
                  nuestras expertas.<br /> Lo mejor de todo es que puede agendarla
                  cuando quiera.
                </p>
              </div>
            </div>
            <img
              src={AcentoBlanco}
              width="50"
              className="mx-auto d-none d-md-block"
            />
          </div>
        </div>
        <div className="section section-white">
          <div className="container">
            <h4 className="text-center mb-5">
              Escoge la asesoría ideal para tu amix.
            </h4>
            <div className="row">
              <div className="col-lg-6 mb-3">
                <div className="section-off-purple p-3">
                  <div className="px-lg-3">
                    <div className="d-flex align-items-center">
                      <h4 className="mb-0" style={{ marginRight: "0.5rem" }}>
                        Asesoría básica
                      </h4>
                      <div className="boxed-bullet-green font-xxs text-uppercase d-inline-block">
                        vía zoom - 1hr
                      </div>
                    </div>
                    <p style={{ marginRight: "1rem", marginBottom: "0.5rem" }}>
                      Costo:
                      <span className="strong bold"> $699</span>
                    </p>
                    <div className="d-flex mb-1 align-items-center">
                      <div
                        className="boxed-bullet-white font-xxs text-uppercase d-inline-block"
                        style={{ marginLeft: 0 }}
                      >
                        Dirigido a:
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <img
                        src={Millenials}
                        width="30"
                        style={{ marginRight: "1rem" }}
                      />
                      <div>
                        <p className="bold mb-0">Nuevos contribuyentes</p>
                        <p className="font-xs mb-0">
                          Lxs que quieren (o tienen) que darse de alta.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mb-3">
                      <img
                        src={Publico}
                        width="30"
                        style={{ marginRight: "1rem" }}
                      />
                      <div>
                        <p className="bold mb-0">Recién incorporados</p>
                        <p className="font-xs mb-0">
                          Recién incorporadxs al SAT que no entienden nada al
                          respecto.
                        </p>
                      </div>
                    </div>

                    <div className="d-flex mb-3">
                      <img
                        src={Freelancers}
                        width="30"
                        style={{ marginRight: "1rem" }}
                      />
                      <div>
                        <p className="bold mb-0">Freelancers y emprendedores</p>
                        <p className="font-xs mb-0">
                          Que tienen que dar factura a sus clientes y quieren
                          saber cómo hacerlo y usar esto a su favor para tener
                          un futuro tranquilo
                        </p>
                      </div>
                    </div>
                    <div className="boxed-bullet-white font-xxs text-uppercase d-inline-block mb-3">
                      ¿Qué incluye?
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src={BulletLanding}
                          width="12"
                          className="m-2 mx-3 mr-0"
                        />
                        <p className="font-xs mb-0">
                          Conocera su situación fiscal.
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={BulletLanding}
                          width="12"
                          className="m-2 mx-3 mr-0"
                        />
                        <p className="font-xs mb-0">Elegirá el régimen ideal</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={BulletLanding}
                          width="12"
                          className="m-2 mx-3 mr-0"
                        />
                        <p className="font-xs mb-0">
                          Entenderá lo básico para estar al día con el SAT.
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={BulletLanding}
                          width="12"
                          className="m-2 mx-3 mr-0"
                        />
                        <p className="font-xs mb-0">
                          Emprender y sobrevivir al SAT de la mejor manera.
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={BulletLanding}
                          width="12"
                          className="m-2 mx-3 mr-0"
                        />
                        <p className="font-xs mb-0">
                          Consultar documentos en el portal.
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={BulletLanding}
                          width="12"
                          className="m-2 mx-3 mr-0"
                        />
                        <p className="font-xs mb-0">
                          Guia para tener una buena relación con el SAT.
                        </p>
                      </div>
                    </div>

                    <div className="d-flex flex-column flex-md-row">
                      <a
                        className="btn btn-primary btn-primary-border btn-lg mb-3 me-3"
                        style={{ width: "100%" }}
                        href="https://lahorasat.podia.com/e9d72c23-0ecd-4709-a46a-d44cf72c2663"
                        data-podia-embed="link"
                      >
                        Regalar gift card
                      </a>
                    </div>
                    <p className="font-xxs text-center">
                      * Después de pagar, llenarás un formulario con los datos
                      de tu amix y la fecha en qué quieres entregarle su regalo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-3">
                <div className="section-off-purple p-3">
                  <div className="px-lg-3">
                    <div className="d-flex align-items-center">
                      <h4 className="mb-0" style={{ marginRight: "0.5rem" }}>
                        Asesoría práctica
                      </h4>
                      <div className="boxed-bullet-green font-xxs text-uppercase d-inline-block">
                        vía zoom - 1:30hr
                      </div>
                    </div>
                    <p style={{ marginRight: "1rem", marginBottom: "0.5rem" }}>
                      Costo:
                      <span className="strong bold"> $1099</span>
                    </p>
                    <div className="d-flex mb-1 align-items-center">
                      <div
                        className="boxed-bullet-white font-xxs text-uppercase d-inline-block"
                        style={{ marginLeft: 0 }}
                      >
                        Dirigido a:
                      </div>
                    </div>
                    <div className="d-flex align-items-flex-start">
                      <div>
                        <p className="font-md mb-3 mb-0">
                          Personas “físicas” que quieren aprender a usar la
                          plataforma del SAT y/o arreglar alguna situación en el
                          portal.
                        </p>
                      </div>
                    </div>
                    <div className="boxed-bullet-white font-xxs text-uppercase d-inline-block mb-3">
                      ¿Qué incluye?
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-center">
                        <img
                          src={BulletLanding}
                          width="12"
                          className="m-2 mx-3 mr-0"
                        />
                        <p className="font-xs mb-0">
                          Revisar su devolución de ISR.
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={BulletLanding}
                          width="12"
                          className="m-2 mx-3 mr-0"
                        />
                        <p className="font-xs mb-0">
                          Guía para seguir con tu negocio de la mejor manera
                          ante el SAT.
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={BulletLanding}
                          width="12"
                          className="m-2 mx-3 mr-0"
                        />
                        <p className="font-xs mb-0">
                          Ayuda con algún tema que tenga atrasado con el SAT.
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={BulletLanding}
                          width="12"
                          className="m-2 mx-3 mr-0"
                        />
                        <p className="font-xs mb-0">
                          Hacer sus facturas (CFDI) dentro del portal del SAT.
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={BulletLanding}
                          width="12"
                          className="m-2 mx-3 mr-0"
                        />
                        <p className="font-xs mb-0">
                          Darse de alta y actualizar tu información.
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={BulletLanding}
                          width="12"
                          className="m-2 mx-3 mr-0"
                        />
                        <p className="font-xs mb-0">
                          Presentar tu declaración mensual, bimestral o anual.
                        </p>
                      </div>
                      <div className="boxed-bullet-white font-xxs text-uppercase d-inline-block mb-2 mt-2">
                        Requisitos:
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={BulletLanding}
                          width="12"
                          className="m-2 mx-3 mr-0"
                        />
                        <p className="font-xs mb-0">
                          RFC y contraseña para acceder al portal
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <img
                          src={BulletLanding}
                          width="12"
                          className="m-2 mx-3 mr-0"
                        />
                        <p className="font-xs mb-0">E.firma y clave vigente</p>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row">
                      <a
                        className="btn btn-green-primary btn-primary-border btn-lg mb-3 me-3"
                        style={{ width: "100%" }}
                        href="https://lahorasat.podia.com/ac0e677e-8e2b-480c-8b94-72664d848e5c"
                        data-podia-embed="link"
                      >
                        Regalar gift card
                      </a>
                    </div>
                    <p className="font-xxs text-center">
                      * Después de pagar, llenarás un formulario con los datos
                      de tu amix y la fecha en qué quieres entregarle su regalo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <h2 className="text-center">
                  ¿No sabes cuál escoger o tienes dudas?
                </h2>
                <p className="text-center">
                  No te preocupes, estamos aquí para ayudarte. Mándanos mensaje
                  por{" "}
                  <a
                    href="https://wa.me/+525510722129"
                    className="text-underline"
                  >
                    Whatsapp{" "}
                  </a>{" "}
                  para asesorarte.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Reviews />
        <AboutUs />
        <Colaboraciones />
        <BlogLatest />
      </Layout>
    </>
  );
};

export default RegaloAsesoria;
