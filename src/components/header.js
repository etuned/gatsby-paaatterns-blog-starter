import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (

        <nav className="navbar is-white is-fixed-top">
           <div className="navbar-brand">
             <div className="navbar-item">Gatsby Paaatterns Blog Starter</div>

             <button className="navbar-burger burger is-white" aria-label="menu" aria-expanded="false" data-target="navbarMain">
               <span aria-hidden="true"></span>
               <span aria-hidden="true"></span>
               <span aria-hidden="true"></span>
             </button>
           </div>

  <div id="navbarMain" className="navbar-menu">
    <div className="navbar-start">
      <Link to="/" className="navbar-item">
        Home
      </Link>

      <Link to="/about" className="navbar-item">
        About
      </Link>
    
      <Link to="/blog" className="navbar-item">
        Blog
      </Link>

      <Link to="/portfolio" className="navbar-item">
        Portfolio
      </Link>

      <Link to="/contact" className="navbar-item">
      Contact
      </Link>
    </div>
  </div>
</nav>
    )
}

export default Header
