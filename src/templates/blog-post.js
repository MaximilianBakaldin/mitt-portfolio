import React from "react"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    // add other types of nodes if needed
  },
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
    // add other types of marks if needed
  },
}

const BlogPost = ({ pageContext }) => {
  const { title, description, image } = pageContext
  const descriptionJson = JSON.parse(description.raw)

  return (
    <Layout>
      <div className="content">
        <h1>{title}</h1>
        <p>{documentToReactComponents(descriptionJson, options)}</p>
        {image && <GatsbyImage image={image.gatsbyImage} alt={title} />}
      </div>
    </Layout>
  )
}

export default BlogPost
