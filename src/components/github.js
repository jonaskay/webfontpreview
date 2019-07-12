import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      githubMark: file(relativePath: { eq: "github-mark.png" }) {
        childImageSharp {
          fluid(maxWidth: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <a href="https://github.com/jonaskay/webfontpreview">
      <Image fluid={data.githubMark.childImageSharp.fluid} />
    </a>
  )
}
