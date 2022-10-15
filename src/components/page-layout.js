import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer-nav";
import Header from "./header";
import "./layout.css";
import Subscribe from "./subscribe";
import MiniGuia from "../img/mini-guia.png"

export default function Layout({ children, homepage, title, headerAction, hideSubscribe }) {
  return (
    <main>
      <Helmet>
        <script src="https://cdn.podia.com/embeds.js" async="async"></script>
        {/* <script src="http://danielpliego.com/lahorasat/trengo.js"></script> */}
        <title>{title ? `La hora SAT® 🤓  | ${title}` : "La hora SAT® 🤓 "}</title>
        <meta name="description" content="Somos una comunidad de educación fiscal. Hacemos contenido informativo, impartimos cursos y asesorías personalizadas que te ayudarán a entender cómo funciona el SAT." />
        <meta name="keywords" content="sat, cursos, asesorias, educación fiscal, impuestos" />
      </Helmet>
      <Header homepage={homepage} headerAction={headerAction} />
      <div className="page-content">{children}</div>
      {!hideSubscribe && (
        <div className="hero section section-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h1 className="pt-4">
                  Suscríbete al newsletter y recibe gratis la mini guía del Portal del Sat
                </h1>
                <Subscribe />
              </div>
              <div className="col-lg-5">
                <img src={MiniGuia} />
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}
