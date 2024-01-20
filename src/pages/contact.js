import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulContactPage {
        nodes {
          title
          email
          gitHub
          linkedIn
        }
      }
    }
  `)

  const contactPage = data.allContentfulContactPage.nodes[0]

  return (
    <Layout>
      <Helmet>
        <title>Kontakta Maximilian</title>
        <meta name="description" content="" />
      </Helmet>
      <h1 className="contact-text">{contactPage.title}</h1>
      <div className="contact-icons">
        <h2>
          <a href={`mailto:${contactPage.email}`}>
            <FaEnvelope size={200} />
          </a>
        </h2>
        <h2>
          <a
            href={contactPage.gitHub}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaGithub size={200} />
          </a>
        </h2>
        <h2>
          <a
            href={contactPage.linkedIn}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <FaLinkedin size={200} />
          </a>
        </h2>
      </div>
    </Layout>
  )
}

export default Contact
