import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { Helmet } from "react-helmet"

import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    // Add more block type handlers if needed
  },
}

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutPage {
        nodes {
          title
          description {
            raw
          }
          image {
            gatsbyImage(width: 200)
          }
        }
      }
    }
  `)

  const aboutPage = data.allContentfulAboutPage.nodes[0]
  const image = getImage(aboutPage.image)

  return (
    <Layout>
      <Helmet>
        <title>Maximilian Bakaldin</title>
        <meta
          name="description"
          content="Kort om Maximilian Bakaldin"
        />
      </Helmet>
      <h1>{aboutPage.title}</h1>
      {image && <GatsbyImage image={image} alt={aboutPage.title} />}
      {documentToReactComponents(
        JSON.parse(aboutPage.description.raw),
        options
      )}
    </Layout>
  )
}

export default About
