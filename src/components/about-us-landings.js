import React from "react";
import AboutChicas from "../img/cursos/curso-en-video/foto-about.jpg";
import Like from "../img/cursos/curso-en-video/like.png";
import Cora from "../img/cursos/curso-en-video/cora.png";
import Instagram from "../img/cursos/curso-en-video/instagram.svg";
import Facebook from "../img/cursos/curso-en-video/facebook.svg";
import Twitter from "../img/cursos/curso-en-video/twitter.svg";
import Adorno from "../img/acento-verde.svg";

const AboutUsLandings = () => {
  return (
    <>
      <div className="section section-purple">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-7 mx-auto">
              <img src={Adorno} className="mb-3 mx-auto" />
              <h2 className="mb-3">
                Somos la comunidad de educación fiscal más grande
              </h2>
            </div>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6 pt-5">
              <ul>
                <li>+100 cursos presenciales a escuelas y empresas</li>
                <li>Miles de cursos online vendidos</li>
                <li>+1,000 horas de asesoría personalizada y a grupos</li>
              </ul>
              <div className="about-number">
                <img src={Cora} width="70" />
                +50k
                <a href="https://www.instagram.com/lahorasat/" tartget="_blank">
                  <img src={Instagram} width="45" />
                </a>
              </div>
              <div className="about-number">
                <img src={Like} width="70" />
                2.5k
                <a
                  href="https://www.facebook.com/profile.php?id=100063771390136"
                  target="_blank"
                >
                  <img src={Facebook} width="45" />
                </a>
              </div>
              <div className="about-number">
                <img src={Cora} width="70" />
                3k
                <a href="https://twitter.com/LahoraSat/" target="_blank">
                  <img src={Twitter} width="45" />
                </a>
              </div>
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
        </div>
      </div>
    </>
  );
};

export default AboutUsLandings;
