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
            <Link to="/about" className="button is-white is-outlined text-shadow-button">
              Learn more
             </Link>
          </div>
        </div>
      </section>
      <div className="container is-fullhd">
  <div className="notification">
    This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
  </div>
</div>
<section className="section">
<div className="container">
  <h1 className="title">Section</h1>
  <h2 className="subtitle">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
  </h2>
  <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title">Vertical...</p>
                <p className="subtitle">Top tile</p>
              </article>
              <article className="tile is-child notification is-warning">
                <p className="title">...tiles</p>
                <p className="subtitle">Bottom tile</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png" />
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">Wide tile</p>
              <p className="subtitle">Aligned with the right tile</p>
              <div className="content">
                {/* Content */}
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-success">
            <div className="content">
              <p className="title">Tall tile</p>
              <p className="subtitle">With even more content</p>
              <div className="content">
                {/* Content */}
              </div>
            </div>
          </article>
        </div>
      </div>
</div>
</section>
        </Layout>
    )
}

export default IndexPage
