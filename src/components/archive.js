import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ArchiveList>
            {allMarkdownRemark.edges.map(({ node }) => (
              <li key={node.fields.slug}>
                <Link to={`/posts/${node.fields.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ArchiveList>
        </aside>
      </>
    )}
  />
)

export default Archive
