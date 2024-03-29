import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <h1>Blog Page</h1>
        <ol>
          {data.allMarkdownRemark.edges.map((edge, index) => {
            return (
              <li key={index}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
