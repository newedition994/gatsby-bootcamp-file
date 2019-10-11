import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        Loved what you react please <Link to="/contact">contact me</Link>.
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
