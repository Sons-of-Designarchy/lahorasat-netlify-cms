import * as React from "react";
import Layout from "../components/page-layout";
import Cursos from "../components/cursos";

// markup
const AsesoriasPage = () => {
  return (
    <>
      <Layout title="Cursos">
        <Cursos />
      </Layout>
    </>
  );
};

export default AsesoriasPage;
