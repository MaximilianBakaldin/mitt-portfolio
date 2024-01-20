import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"

const Page404 = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPage404 {
        nodes {
          errorMessage
          homePageLink
        }
      }
    }
  `)

  const page404 = data.allContentfulPage404.nodes[0]

  return (
    <Layout>
      <h1>{page404.errorMessage}</h1>
      <Link to="/">
        <button>{page404.homePageLink}</button>
      </Link>
    </Layout>
  )
}

export default Page404
