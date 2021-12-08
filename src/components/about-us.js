import React from "react";
import AboutChicas from "../img/cursos/curso-en-video/foto-about.jpg";
import Like from "../img/cursos/curso-en-video/like.png";
import Cora from "../img/cursos/curso-en-video/cora.png";
import Instagram from "../img/cursos/curso-en-video/instagram.svg";
import Facebook from "../img/cursos/curso-en-video/facebook.svg";
import Twitter from "../img/cursos/curso-en-video/twitter.svg";
import Adorno from "../img/acento-verde.svg";

const AboutUs = () => {
  return (
    <>
      <div className="section section-purple">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-7 mx-auto">
                <img src={Adorno} className="mb-3 mx-auto" />
              <h2 className="mb-5">
                Somos la comunidad de educación fiscal más grande
              </h2>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6">
              <p className="text-light">
                Todo lo que necesitas saber sobre el SAT contado por millennials
                para millennials (o para quien lo necesite) 🤓💸
              </p>
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
            <div className="col-lg-6">
              <div className="mx-lg-3">
                <img
                  src={AboutChicas}
                  className="image-stroke-green img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row pt-3 mx-auto text-center">
            <div className="col-lg-4 about-number">
              <img src={Cora} width="70" />
              +40k
              <a href="https://www.instagram.com/lahorasat/" tartget="_blank"><img src={Instagram} width="45" /></a>
            </div>
            <div className="col-lg-4 about-number">
              <img src={Like} width="70" />
              2.3k
              <a href="https://www.facebook.com/profile.php?id=100063771390136" target="_blank"><img src={Facebook} width="45" /></a>
            </div>
            <div className="col-lg-4 about-number">
              <img src={Cora} width="70" />
              3k
              <a href="https://twitter.com/LahoraSat/" target="_blank"><img src={Twitter} width="45" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
