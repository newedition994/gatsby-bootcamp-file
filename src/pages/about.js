import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>
        Loved what you react please <Link to="/contact">contact me</Link>.
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
