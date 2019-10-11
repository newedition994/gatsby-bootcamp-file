import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <p>Breyanna the Dev</p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
