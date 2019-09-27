import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

interface IProps {
  title: string
  heading: string
  subheading?: string
  description: string
}

const LandingTemplate = ({
  title,
  heading,
  subheading,
  description,
}: IProps) => (
  <Layout>
    <SEO title={title} />
    <h1>{heading}</h1>
    <p>{subheading}</p>
    <p>{description}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

// @TODO, there must be a built in for this stuff.
interface ILandingProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        heading: string
        subheading?: string
        description: string
      }
    }
  }
}
const Landing = ({ data }: ILandingProps) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <LandingTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
      />
    </Layout>
  )
}
export default Landing

export const pageQuery = graphql`
  query LandingTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "landing-page" }}) {
      frontmatter: {
        title
        heading
        subheading
        description
      }
    }
  }
`
