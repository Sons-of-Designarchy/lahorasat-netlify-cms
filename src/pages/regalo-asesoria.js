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
    const [accordion, setAccordion] = React.useState('');

  return (
    <>
      <Layout
        title="feofkeok"
        headerAction
      >
        
        <HeaderRegalaAsesoria />
        <div className="section section-green ">
          <div className="d-flex justify-content-center text-center">
            <img src={AcentoBlanco} width="50" className="mx-auto" />
            <h1>El regalo perfecto para tu amix en aprietos</h1>
            <img src={AcentoBlanco} width="50" className="mx-auto" />
          </div>
          <div className="text-center"><p className="font-lg mx-5">Le ayudamos a tu amigo en una asesoría 1-1 en videollamada en zoom con uno de nuestros expertos, en la hora y fecha que el pueda</p></div> 
        </div>
        <div className="section section-white">
        <div className="container">
          <h4 className="text-center mb-5">
            DAN DAN Escoge la asesoría que tu amigo necesita
          </h4>
          <div className="row">
            <div className="col-lg-6 mb-3">
             <div className="section-off-purple p-3">

              <div className="px-lg-3">
                <div className="boxed-bullet-green font-xxs text-uppercase d-inline-block mb-4">
                  vía zoom - 1hr
                </div>
                    <h3>Asesoría básica</h3>
                    <p>
                      Costo:
                      {/* <span className="d-inline-block ml-2 mr-2 text-decoration-line-through opacity-50">
                          $499
                        </span>{" "} */}
                      <span className="font-xl">$650</span>
                    </p>
                    
                    <div className="boxed-bullet-white font-xxs text-uppercase d-inline-block mb-4">
                      Dirigido a:
                    </div>
                    <div className="d-flex">  
                      <img src={Millenials} width="100" className="p-3" />
                      <div>
                        <p className="bold mb-0">Nuevos contribuyentes</p>
                        <p className="font-xs mb-3">
                          Lxs que quieren (o tienen) que darse de alta.
                        </p>
                      </div>
                      
                    </div>
                    <div className="d-flex">  
                      <img src={Publico} width="100" className="p-3" />
                      <div>
                        <p className="bold mb-0">Recien incorporados</p>
                        <p className="font-xs mb-3">
                          Recién incorporadxs al SAT que no entienden nada al respecto.
                        </p>
                      </div>
                    </div>

                    <div className="d-flex">  
                      <img src={Freelancers} width="100" className="p-3" />
                      <div>
                        <p className="bold mb-0">Freelancers y emprendedores</p>
                        <p className="font-xs mb-3">
                          Que tienen que dar factura a sus clientes y quieren saber cómo hacerlo y usar esto a su favor para tener un futuro tranquilo
                        </p>
                      </div>
                    </div>



                    <div className="d-flex flex-column flex-md-row">
                      <a
                        className="btn btn-green-primary btn-lg mb-3 me-3"
                        style={{ width: "100%" }}
                        href="https://lahorasat.podia.com/coaching_session/e9d72c23-0ecd-4709-a46a-d44cf72c2663"
                        data-podia-embed="link"
                      > 
                      Regalar curso
                      </a>

                  </div>
                  <p className="font-xxs text-center">
                      * DESPUÉS DE PAGAR, LLENARÁS UN FORMULARIO CON LOS DATOS DE TU AMIGO Y NOSOTROS LO CONTACTAREMOS EN LA FECHA QUE NOS DIGAS.
                  </p>
                 
                </div>
                <div className="text-center section-purple p-4" onClick={() => setAccordion('basica')}>
                  👇 Da click para ver que aprenderas aquí 👇
                  </div>
                  {accordion == 'basica' && (
                      <><><div className="d-flex p4">
                      <div className="d-flex">
                        <img src={BulletLanding} width="20" className="m-3 mr-0" />
                        <div>
                          <p className="font-xs mt-3">
                            Conocera su situación fiscal.
                          </p>
                        </div>
                      </div>
                    </div><div className="d-flex">
                        <img src={BulletLanding} width="20" className="m-3 mr-0" />
                        <div>
                          <p className="font-xs mt-3">
                          Elegiremos el mejor régimen para ti.
                          </p>
                        </div>
                      </div></><div className="d-flex">
                        <img src={BulletLanding} width="20" className="m-3 mr-0" />
                        <div>
                          <p className="font-xs mt-3">
                          Entender lo básico para estar al día con el SAT.
                          </p>
                        </div>
                      </div><div className="d-flex">
                        <img src={BulletLanding} width="20" className="m-3 mr-0" />
                        <div>
                          <p className="font-xs mt-3">
                          Emprender y sobrevivir al SAT de la mejor manera.
                          </p>
                        </div>
                      </div><div className="d-flex">
                        <img src={BulletLanding} width="20" className="m-3 mr-0" />
                        <div>
                          <p className="font-xs mt-3">
                            Consultar documentos en el portal.
                          </p>
                        </div>
                      </div><div className="d-flex">
                        <img src={BulletLanding} width="20" className="m-3 mr-0" />
                        <div>
                          <p className="font-xs mt-3">
                          Guiarte para tener una buena relación con el SAT. 
                          </p>
                        </div>
                      </div></>
                  )}
              </div>
            </div>


            <div className="col-lg-6 mb-3">
             <div className="section-off-purple p-3">

              <div className="px-lg-3">
                <div className="boxed-bullet-green font-xxs text-uppercase d-inline-block mb-4">
                  vía zoom - 1:30hr
                </div>
                    <h3>Asesoría Practica</h3>
                    <p>
                      Costo:
                      {/* <span className="d-inline-block ml-2 mr-2 text-decoration-line-through opacity-50">
                          $499
                        </span>{" "} */}
                      <span className="font-xl">$950</span>
                    </p>
                    
                    <div className="boxed-bullet-white font-xxs text-uppercase d-inline-block mb-4">
                      Dirigido a:
                    </div>
                    <div className="d-flex">  
                    <img src={Publico} width="100" className="p-3" />
                      <div>
                        <p className="bold mb-0">Personas dadas de alta como ”personas fisicas”</p>
                        <p className="font-xs mb-3">
                          Incorporados al SAT con dudas de como manejar sus declaraciones y procesos
                        </p>
                      </div>
                      
                    </div>
                    <div className="d-flex">  
                      <img src={Publico} width="100" className="p-3" />
                      <div>
                        <p className="bold mb-0">Personas con pendientes ante el SAT</p>
                        <p className="font-xs mb-3">
                          Arregla tu multa, problema y reorganiza tu situacion
                        </p>
                      </div>
                    </div>

                    <div className="boxed-bullet-white font-xxs text-uppercase d-inline-block mb-4">
                      Requisitos:
                    </div>
                    <div className="d-flex">
                        <img src={BulletLanding} width="20" className="m-3 mr-0" />
                        <div>
                          <p className="font-xs mt-3">
                            RFC y contraseña para acceder al portal
                          </p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <img src={BulletLanding} width="20" className="m-3 mr-0" />
                        <div>
                          <p className="font-xs mt-3">
                            E.Firma y clave vigente
                          </p>
                        </div>
                      </div>

                    <div className="d-flex flex-column flex-md-row">
                      <a
                        className="btn btn-green-primary btn-lg mb-3 me-3"
                        style={{ width: "100%" }}
                        href="https://lahorasat.podia.com/coaching_session/ac0e677e-8e2b-480c-8b94-72664d848e5c"
                        data-podia-embed="link"
                      > 
                      Regalar curso
                      </a>

                  </div>
                  <p className="font-xxs text-center">
                      * DESPUÉS DE PAGAR, LLENARÁS UN FORMULARIO CON LOS DATOS DE TU AMIGO Y NOSOTROS LO CONTACTAREMOS EN LA FECHA QUE NOS DIGAS.
                  </p>
                 
                </div>
                <div className="text-center section-purple p-4" onClick={() => setAccordion('practica')}>
                  👇 Da click para ver que aprenderas aquí 👇
                  </div>
                  {accordion == 'practica' && (
                      <><><div className="d-flex p4">
                      <div className="d-flex">
                        <img src={BulletLanding} width="20" className="m-3 mr-0" />
                        <div>
                          <p className="font-xs mt-3">
                            Revisar tu devolución de ISR.
                          </p>
                        </div>
                      </div>
                    </div><div className="d-flex">
                        <img src={BulletLanding} width="20" className="m-3 mr-0" />
                        <div>
                          <p className="font-xs mt-3">
                          Guía para seguir con tu negocio de la mejor manera ante el SAT.
                          </p>
                        </div>
                      </div></><div className="d-flex">
                        <img src={BulletLanding} width="20" className="m-3 mr-0" />
                        <div>
                          <p className="font-xs mt-3">
                          Ayuda con algún tema que tengas atrasado con el SAT. 
                          </p>
                        </div>
                      </div><div className="d-flex">
                        <img src={BulletLanding} width="20" className="m-3 mr-0" />
                        <div>
                          <p className="font-xs mt-3">
                          Hacer tus facturas (CFDI) dentro del portal del SAT.
                          </p>
                        </div>
                      </div><div className="d-flex">
                        <img src={BulletLanding} width="20" className="m-3 mr-0" />
                        <div>
                          <p className="font-xs mt-3">
                            Darte de alta y actualizar tu información.
                          </p>
                        </div>
                      </div><div className="d-flex">
                        <img src={BulletLanding} width="20" className="m-3 mr-0" />
                        <div>
                          <p className="font-xs mt-3">
                          Presentar tu declaración mensual, bimestral o anual.
                          </p>
                        </div>
                      </div></>
                  )}
              </div>

            </div>
            <div className="my-5">
              <h2 className="text-center">
                ¿No sabes cual escoger o tienes alguna duda?
              </h2>
              <p className="text-center">
              No te preocupes, estamos aquí para ayudarte contactanos por <a href="https://wa.me/+525510722129" className="text-underline">Whatsapp </a> y te ayudamos 😉
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
