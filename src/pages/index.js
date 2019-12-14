import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
        <section className="hero hero-img-main has-text-centered is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-white is-size-1 text-shadow">
              Fullheight title
            </h1>
            <h2 className="subtitle has-text-white is-size-5 text-shadow">
              Fullheight subtitle
            </h2>
            <Link to="/about" className="button is-white is-outlined text-shadow">
              Learn more
             </Link>
          </div>
        </div>
      </section>
        </Layout>
    )
}

export default IndexPage
