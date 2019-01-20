const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      // basePath: `pages`
    })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               tags
//               Layout
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       result.errors.forEach(e => console.error(e.toString()))
//       return Promise.reject(result.errors)
//     }

//     const posts = result.data.allMarkdownRemark.edges

//     posts.forEach(({ node }) => {
//       const id = node.id
//       createPage({
//         path: `/posts/${node.fields.slug}`,
//         component: path.resolve('./src/components/postLayout.js'),
//         context: {
//           slug: node.fields.slug,
//         },
//       })
//     })
//   })
// }
