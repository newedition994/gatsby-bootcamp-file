import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <p>
        Please view my{" "}
        <a
          href="https://www.linkedin.com/in/breyanna-vass-6bb97773/"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        profile for more about my experiences.
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
