import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { Helmet } from "react-helmet"

/* import { BLOCKS } from "@contentful/rich-text-types" */
/* import { documentToReactComponents } from "@contentful/rich-text-react-renderer" */

import Layout from "../components/layout"

/* const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    // Add more block type handlers if needed
  },
} */

//sidans namn blir portfolio efter namnet på javascript-filen
const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulItHogskolan(sort: { createdAt: ASC }) {
        edges {
          node {
            title
            slug
            image {
              gatsbyImage(width: 200)
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet>
        <title>Maximilian Bakaldin</title>
        <meta
          name="description"
          content="Din beskrivande meta-beskrivning här"
        />
      </Helmet>
      <h1>Portfolio</h1>

      <ul className="main-content">
        {data.allContentfulItHogskolan.edges.map(edge => {
          /* const descriptionJson = JSON.parse(edge.node.description.raw) */
          return (
            <li className="title" key={edge.node.title}>
              <Link to={`/portfolio/${edge.node.slug}`}>
                <h3>{edge.node.title}</h3>
              </Link>
              {/* <div className="description">{documentToReactComponents(descriptionJson, options)}</div> */}
              {edge.node.image && (
                <Link to={`/portfolio/${edge.node.slug}`}>
                  <div
                    className="rounded-circle overflow-hidden"
                    style={{ width: "200px", height: "200px" }}
                  >
                    <GatsbyImage
                      image={edge.node.image.gatsbyImage}
                      alt={edge.node.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
