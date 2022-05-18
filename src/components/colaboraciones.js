// import { Link } from "gatsby"
import React from "react";
import telowkento from "../img/colabs/telokwento.png";
import mujeres from "../img/colabs/mujeres.png";
import fintual from "../img/colabs/fintual.png";
import fondeadora from "../img/colabs/fondeadora.png";
import ninas from "../img/colabs/ninas.png";
import tipo from "../img/colabs/tipo-y-asi.png";
import animal from "../img/colabs/animal.png";
import legalmente from "../img/colabs/legalmente-creativo.png";
import chicmag from "../img/colabs/chic.png";
import adn40 from "../img/colabs/adn.png";

const Colaboraciones = () => {
  return (
    <>
      <div className="section section-white">
        <div className="container">
          <h4 className="text-center mb-4">
            Algunas de nuestras colaboraciones
          </h4>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-6">
              <a
                className="p-2 p-lg-4 d-block"
                href="https://www.instagram.com/p/CRCJvuLDV0y/?utm_medium=copy_link"
                target="_blank"
              >
                <img src={fintual} />
              </a>
            </div>
            <div className="col-lg-3 col-6">
              <a
                className="p-2 p-lg-4 d-block"
                href="https://www.instagram.com/p/CSW2qRDHSqQ/?utm_medium=copy_link"
                target="_blank"
              >
                <img src={telowkento} />
              </a>
            </div>
            <div className="col-lg-3 col-6">
              <a
                className="p-2 p-lg-4 d-block"
                href="https://www.instagram.com/tv/CVTceIVFZRR/"
                target="_blank"
              >
                <img src={fondeadora} />
              </a>
            </div>
            <div className="col-lg-3 col-6">
              <a
                className="p-2 p-lg-4 d-block"
                href="https://open.spotify.com/episode/70ZP4KlU9QO21hQjsTv8aH?si=FSCQzSL1S--4WI3Jyo2oQg"
                target="_blank"
              >
                <img src={ninas} />
              </a>
            </div>
            <div className="col-lg-3 col-6">
              <a
                className="p-2 p-lg-4 d-block"
                href="https://open.spotify.com/episode/2lfcJeDXPgohY33yk451d2?si=jRFiesTDQMe_YkE_5tLdYg&dl_branch=1&nd=1"
                target="_blank"
              >
                <img src={tipo} />
              </a>
            </div>
            <div className="col-lg-3 col-6">
              <a
                className="p-2 p-lg-4 d-block"
                href="https://www.instagram.com/tv/CMlcDr_DKtU/?utm_medium=copy_link"
                target="_blank"
              >
                <img src={animal} />
              </a>
            </div>
            <div className="col-lg-3 col-6">
              <a
                className="p-2 p-lg-4 d-block"
                href="https://www.instagram.com/p/CLfw4fQDoMf/?utm_medium=copy_link"
                target="_blank"
              >
                <img src={mujeres} />
              </a>
            </div>
            <div className="col-lg-3 col-6">
              <a
                className="p-2 p-lg-4 d-block"
                href="https://www.instagram.com/tv/CQzuToHlo2b/?utm_medium=copy_link"
                target="_blank"
              >
                <img src={legalmente} />
              </a>
            </div>
            <div className="col-lg-3 col-6">
              <a
                className="p-2 p-lg-4 d-block"
                href="https://www.chicmagazine.com.mx/magazines#details?ref=supp&date=2020-11-12&ratio=magazine&ratiow=737&ratioh=935&edition=2&id=202&sup=Chic%20Magazine"
                target="_blank"
              >
                <img src={chicmag} />
              </a>
            </div>
            <div className="col-lg-3 col-6">
              <a
                className="p-2 p-lg-4 d-block"
                href="https://www.adn40.mx/finanzas/sat-instagram-facil-deps-especial"
                target="_blank"
              >
                <img src={adn40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Colaboraciones;
