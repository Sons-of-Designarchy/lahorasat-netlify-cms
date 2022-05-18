import * as React from "react";
import Layout from "../components/page-layout";
import Asesorias from "../components/asesorias";
import BannerTallerBasico from "../components/banner-taller-basico";
import Reviews from "../components/reviews";
import AboutUs from "../components/about-us";
import Colaboraciones from "../components/colaboraciones";
import BlogLatest from "../components/blog-latest";

// markup
const CursoEnVideoPage = () => {
  return (
    <>
      <Layout>
        <div className="section section-purple">
          <div className="container">
            <BannerTallerBasico />
          </div>
        </div>
        <Reviews />
        <AboutUs />
        <Colaboraciones />
        <BlogLatest />
        <Asesorias />
      </Layout>
    </>
  );
};

export default CursoEnVideoPage;
