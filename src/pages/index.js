import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    // Add more block type handlers if needed
  },
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulIndex {
        nodes {
          title
          description {
            raw
          }
          image {
            gatsbyImage(width: 500)
          }
        }
      }
    }
  `)

  const indexPage = data.allContentfulIndex.nodes[0]
  const image = getImage(indexPage.image)

  return (
    <Layout>
      <Helmet>
        <title>Hemsida Maximilian Bakaldin</title>
        <meta name="description" content="Hemsida" />
      </Helmet>
      <h1>{indexPage.title}</h1>
      {image && <GatsbyImage image={image} alt={indexPage.title} />}
      {documentToReactComponents(
        JSON.parse(indexPage.description.raw),
        options
      )}
      <Link to="/portfolio">Se min portfolio</Link>
    </Layout>
  )
}

export default IndexPage
