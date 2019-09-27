import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

interface IIndexProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        heading: string
        intro: string
      }
    }
  }
}

const IndexPage = ({ data }: IIndexProps) => {
  const { title, heading, intro } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <h1>{heading}</h1>
      <p>{intro}</p>
      {/* <p>Now go build something great.</p> */}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query LandingTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
      frontmatter {
        title
        heading
        intro
      }
    }
  }
`
