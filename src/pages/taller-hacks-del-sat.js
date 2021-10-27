import * as React from "react";
import Layout from "../components/page-layout";
import HeaderTaller from "../components/taller/header-taller";
import BulletsTaller from "../components/taller/bullets-taller";
import FechasTaller from "../components/taller/fechas-taller";

const bullets = [
  "Cómo revisar tu Buzón Tributario",
  "Dónde encontrar tus documentos más importantes dentro del portal.",
  "Cómo realizar una factura (CFDI)",
  "¿Qué puedo deducir como freelancer?",
  "¿Estoy declarando de manera correcta? ",
  "¿Qué se llena en una declaración y qué impuestos se presentan?",
  "Sección de preguntas y consultas personales",
];

// markup
const CursoEnVideoPage = () => {
  return (
    <>
      <Layout title="Taller Hacks del Sat para Freelancers y Rifs">
        <HeaderTaller />
        <BulletsTaller bullets={bullets} />
        <FechasTaller />
      </Layout>
    </>
  );
};

export default CursoEnVideoPage;
