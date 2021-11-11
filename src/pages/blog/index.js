import React from 'react'

import Layout from '../../components/page-layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="section section-purple">
          <div className="container">
            <h1 className="text-center text-primary mb-0">
              Bienvenidx a nuestro blog
            </h1>
            <p className="text-light text-center">Aquí encontrarás todo lo que necesitas para saber cómo funciona el SAT. </p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
