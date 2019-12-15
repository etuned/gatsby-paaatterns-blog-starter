import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (

      <header className="header">
      <Link className="logo" to="/">Gatsby Paaatterns Blog Starter</Link>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul className="menu">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/portfolio">Portfolio</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
</header>

    )
}

export default Header
