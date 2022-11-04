// import { Link } from "gatsby"
import React from "react";
import CheckBullet from "../../components/check-bullet";

const BulletsCursoNew = ({ bullets }) => {
  return (
    <>
      <div className="section section-white text-center">
        <div className="container">
          {/* <p>Sabemos que ser adulto es muy difícil y a nadie nos enseñan sobre el SAT por eso creamos:</p>
          <h1>Pasos básicos para sobrevivir al SAT</h1>
          <p>El curso ideal para Emprendedores, Millenials, Freelancers y todo el que comienza su vida fiscal</p> */}
          <h1 className="mb-4">En este curso aprenderás</h1>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="boxed-bullet-container row justify-content-center">
                {bullets.map((bullet) => (
                  <div className="col-lg-6">
                    <CheckBullet title={bullet} />
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center">
                <div className="boxed-bullet mb-3">
                  * En 8 lecciones rápidas y sencillas de entender{" "}
                </div>
              </div>
              <a
                className=" mt-4 btn btn-secondary btn-lg mb-3 me-3"
                style={{ width: "100%" }}
                href="https://lahorasat.podia.com/curso-en-video"
                data-podia-embed="link"
              >
                Comprar curso
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BulletsCursoNew;
