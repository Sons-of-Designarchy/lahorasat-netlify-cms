import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer-nav";
import Header from "./header";
import "./layout.css";
import Subscribe from "./subscribe";
// import MiniGuia from "../img/mini-guia.png"

export default function Layout({ children, homepage, title, headerAction, hideSubscribe }) {
  const [showModal, setShowModal] = React.useState(true);

  return (
    <main>
      <Helmet>
        <script src="https://cdn.podia.com/embeds.js" async="async"></script>
        <script src="http://danielpliego.com/lahorasat/hotjar.js"></script>
        <title>{title ? `La hora SAT® 🤓  | ${title}` : "La hora SAT® 🤓 "}</title>
        <meta name="description" content="Somos una comunidad de educación fiscal. Hacemos contenido informativo, impartimos cursos y asesorías personalizadas que te ayudarán a entender cómo funciona el SAT." />
        <meta name="keywords" content="sat, cursos, asesorias, educación fiscal, impuestos" />
      </Helmet>
      <Header homepage={homepage} headerAction={headerAction} />
      <div className="page-content">{children}</div>
      {!hideSubscribe && showModal && (
        <Subscribe setShowModal={setShowModal} />
      )}
      <Footer />
    </main>
  );
}
