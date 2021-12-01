import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="section section-purple">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <h2 className="mb-5 text-center">
                Somos la comunidad de educación fiscal más grande
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <p className="text-light">
                Tenemos año y medio en el mercado y en ese tiempo{" "}
                <strong>
                  hemos logrado ayudar a más de 50 mil personas a aprender de
                  forma sencilla
                </strong>{" "}
                cómo funciona el SAT.
              </p>
              <p className="text-light">
                Nuestro curso ha sido todo un éxito, se ha vendido en todo
                México, en USA y hasta en España. (respaldando a los mexas a la
                distancia 💪🏻)
              </p>
            </div>
            <div className="col-lg-7">image</div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              +40k
            </div>
            <div className="col-lg-4">
              2.3k
            </div>
            <div className="col-lg-4">
              3k
            </div>
          </div>
          Nuestros clientes nos avalan
        </div>
      </div>
    </>
  );
};

export default AboutUs;
