import * as React from "react";
import Layout from "../components/page-layout";
import Cursos from "../components/cursos";
import Colaboraciones from "../components/colaboraciones";
import BlogLatest from "../components/blog-latest";

// markup
const AsesoriasPage = () => {
  return (
    <>
      <Layout title="Cursos">
        <Cursos />
        <Colaboraciones />
        <BlogLatest />
      </Layout>
    </>
  );
};

export default AsesoriasPage;
