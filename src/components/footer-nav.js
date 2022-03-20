import React from "react";
import logo from "../img/logo-footer.svg";
import Instagram from "../img/ig.svg";
import Twitter from "../img/twitter.svg";
import Facebook from "../img/fb-logo.svg";
import Youtube from "../img/youtube-icon.svg";
import Linkedin from "../img/linkedin-icon.svg";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="section section-purple text-center">
      <div className="mb-3">
        <img
          alt="La Hora Sat"
          width="100"
          src={logo}
          style={{ display: "inline-block" }}
        />
      </div>
      <div className="my-3">
        Contáctanos: <br />
        <a href="mailto:lahorasat@gmail.com" className="text-light">lahorasat@gmail.com</a>
      </div>
      <div className="d-flex mb-3 justify-content-center">
        <a
          target="_blank"
          className="footer-social-link"
          href="https://www.instagram.com/lahorasat/"
        >
          <img src={Instagram} />
        </a>
        <a
          target="_blank"
          className="footer-social-link"
          href="https://twitter.com/lahorasat"
        >
          <img src={Twitter} />
        </a>
        <a
          target="_blank"
          className="footer-social-link"
          href="https://www.facebook.com/profile.php?id=100063771390136"
        >
          <img src={Facebook} />
        </a>
        <a
          target="_blank"
          className="footer-social-link"
          href="https://www.youtube.com/channel/UC4oXv1xgGoPSxiFni7xVUWQ"
        >
          <img src={Youtube} />
        </a>
        <a
          target="_blank"
          className="footer-social-link"
          href="https://www.linkedin.com/company/79887276"
        >
          <img src={Linkedin} />
        </a>
      </div>
      © 2021 La Hora Sat. Todos los derechos reservados.
      <br /><br />
      <div className="d-flex justify-content-center">
        <Link
          to="/terminos-y-condiciones" className="text-light font-xs text-underline p-3 d-block ">
          Términos y Condiciones
        </Link>
        <Link
          to="/aviso-de-privacidad" className="text-light font-xs text-underline p-3 d-block">
          Aviso de Privacidad
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
