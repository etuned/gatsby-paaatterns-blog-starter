import React from 'react'
import Layout from '../components/layout'


const BlogPage = () => {
    return (
        <Layout>
        <section className="hero hero-img-inner is-dark is-bold">
        <div className="hero-body">
          <div className="container text-shadow">
            <h1 className="title">
              Blog Section
            </h1>
            <h2 className="subtitle text-shadow">
              Primary bold subtitle
            </h2>
          </div>
        </div>
      </section>
        </Layout>
    )
}

export default BlogPage
