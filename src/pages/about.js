import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About</h1>
        <p>
          Loved what you react please <Link to="/contact">contact me</Link>.
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
