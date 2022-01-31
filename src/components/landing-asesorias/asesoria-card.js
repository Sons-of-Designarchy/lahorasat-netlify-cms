import * as React from "react";



const LandingCard = () => {
  return (
    <>
      <div className="section section-white">
        <div className="container">
          <div className="row">

            <div className="col-lg-6 mb-3">
             <div className="section-off-purple">
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
                      <span className="font-xl">$699</span>
                    </p>
                    
                    <div className="boxed-bullet-white font-xxs text-uppercase d-inline-block mb-4">
                      Dirigido a:
                    </div>
                    <div>  
                      <img  className="img-fluid" width="100"/>
                      <p className="bold mb-0">Nuevos contribuyentes</p>
                      <p className="font-xs mb-3">
                        Lxs que quieren (o tienen) que darse de alta.
                      </p>
                    </div>
                    <div>  
                      <img  className="img-fluid" width="100"/>
                      <p className="bold mb-0">Recién incorporados</p>
                      <p className="font-xs mb-3">
                        Recién incorporadxs al SAT que no entienden nada al respecto.
                      </p>
                    </div>
                    <div>  
                      <img  className="img-fluid" width="100"/>
                      <p className="bold mb-0">Freelancers y emprendedores</p>
                      <p className="font-xs mb-3">
                      Que tienen que dar factura a sus clientes y quieren saber cómo hacerlo y usar esto a su favor para tener un futuro tranquilo
                      </p>
                    </div>



                    <div className="d-flex flex-column flex-md-row">
                      <a
                        className="btn btn-secondary btn-lg mb-3 me-3"
                        style={{ width: "100%" }}
                        href="https://lahorasat.podia.com/curso-en-video"
                        data-podia-embed="link"
                      > 
                      Regalar curso
                      </a>

                  </div>
                  <p className="font-xxs text-center">
                      * DESPUÉS DE PAGAR, LLENARÁS UN FORMULARIO CON LOS DATOS DE TU AMIGO Y NOSOTROS LO CONTACTAREMOS EN LA FECHA QUE NOS DIGAS.
                    </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
             <div className="section-off-purple">
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
                      <span className="font-xl">$699</span>
                    </p>
                    
                    <div className="boxed-bullet-white font-xxs text-uppercase d-inline-block mb-4">
                      Dirigido a:
                    </div>
                    <div>  
                      <img  className="img-fluid" width="100"/>
                      <p className="bold mb-0">Nuevos contribuyentes</p>
                      <p className="font-xs mb-3">
                        Lxs que quieren (o tienen) que darse de alta.
                      </p>
                    </div>
                    <div>  
                      <img  className="img-fluid" width="100"/>
                      <p className="bold mb-0">Recién incorporados</p>
                      <p className="font-xs mb-3">
                        Recién incorporadxs al SAT que no entienden nada al respecto.
                      </p>
                    </div>
                    <div>  
                      <img  className="img-fluid" width="100"/>
                      <p className="bold mb-0">Freelancers y emprendedores</p>
                      <p className="font-xs mb-3">
                      Que tienen que dar factura a sus clientes y quieren saber cómo hacerlo y usar esto a su favor para tener un futuro tranquilo
                      </p>
                    </div>



                    <div className="d-flex flex-column flex-md-row">
                      <a
                        className="btn btn-secondary btn-lg mb-3 me-3"
                        style={{ width: "100%" }}
                        href="https://lahorasat.podia.com/curso-en-video"
                        data-podia-embed="link"
                      > 
                      Regalar curso
                      </a>

                  </div>
                  <p className="font-xxs text-center">
                      * DESPUÉS DE PAGAR, LLENARÁS UN FORMULARIO CON LOS DATOS DE TU AMIGO Y NOSOTROS LO CONTACTAREMOS EN LA FECHA QUE NOS DIGAS.
                    </p>
                </div>
              </div>
            </div>










          </div>
        </div>
      </div>
    </>
  );
};

export default LandingCard;
