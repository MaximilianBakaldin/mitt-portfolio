const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const indexResponse = await graphql(`
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

  const indexNode = indexResponse.data.allContentfulIndex.nodes[0]
  createPage({
    path: `/`, // Use any path here
    component: path.resolve("./src/pages/index.js"), // Create a suitable component for the "About Me" page
    context: {
      title: indexNode.title,
      description: indexNode.description,
      image: indexNode.image,
    },
  })

  // Create pages for allContentfulItHogskolan
  const response = await graphql(`
    query {
      allContentfulItHogskolan {
        edges {
          node {
            slug
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
    }
  `)
  response.data.allContentfulItHogskolan.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.slug,
        title: edge.node.title,
        description: edge.node.description,
        image: edge.node.image,
      },
    })
  })

  // Create page for about me
  const aboutPageResponse = await graphql(`
    query {
      allContentfulAboutPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const aboutPageEdge = aboutPageResponse.data.allContentfulAboutPage.edges[0]
  createPage({
    path: `/about`, // Use any path here
    component: path.resolve("./src/pages/about.js"), // Create a suitable component for the "About Me" page
    context: {
      slug: aboutPageEdge.node.slug,
    },
  })

  // Create page for contact
  const contactPageResponse = await graphql(`
    query {
      allContentfulContactPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const contactPageEdge =
    contactPageResponse.data.allContentfulContactPage.edges[0]
  createPage({
    path: `/contact`, // Use any path here
    component: path.resolve("./src/pages/contact.js"), // Create a suitable component for the "About Me" page
    context: {
      slug: contactPageEdge.node.slug,
    },
  })

  // Error page
  const page404Response = await graphql(`
    query {
      allContentfulPage404 {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const page404Edge = page404Response.data.allContentfulPage404.edges[0]
  createPage({
    path: `/404`, // Use any path here
    component: path.resolve("./src/pages/404.js"), // Create a suitable component for the "About Me" page
    context: {
      slug: page404Edge.node.slug,
    },
  })
}
