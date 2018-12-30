import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    const { location } = this.props

    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
